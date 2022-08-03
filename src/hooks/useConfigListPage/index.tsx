import { ColProps, message, RowProps } from 'antd';
import React from 'react';
import { useMemo } from 'react';
import { FormItemConfig } from '../../FormItemsBuilder';
import { ListTemplate, ListTemplateProps } from '../../ListTemplate';
import { OptionConfig, RequestService, useRequest } from '../useRequest';

export interface ConfigListPageParameter<Param, Res>
  extends Omit<ListTemplateProps, 'searchBarProps'>,
    OptionConfig<Param, Res> {
  queryListService: RequestService<Param, Res>;
  formatSubmitValue?: (formValue: Param) => unknown;
  // 搜索表单的配置项
  formItemsConfig?: FormItemConfig[];
  // 操作栏的的 col 布局， 和 antd 的 Col API 相同，优先级高于 colProps
  actionColProps?: ColProps;
  // 公共的 col 布局， 和 antd 的 Col API 相同
  colProps?: ColProps;
  // 公共的 rowProps 布局， 和 antd 的 Row API 相同
  rowProps?: RowProps;
}

export const useConfigListPage = <Param, Res extends Record<string, unknown>[]>({
  queryListService,
  formatSubmitValue,
  onSuccess,
  onError,
  spaceProps,
  tableProps,
  tableCardProps,
  formItemsConfig = [],
  defaulParams,
  formaResult,
  actionColProps,
  colProps,
  rowProps,
}: ConfigListPageParameter<Param, Res>) => {
  const {
    loading,
    data: dataSource,
    lazyService: queryList,
    ...rest
  } = useRequest(queryListService, {
    defaulParams,
    onSuccess(value) {
      onSuccess?.(value);
    },
    onError(error) {
      if (onError) {
        onError(error);
      } else {
        message.error('请求列表数据出错');
      }
    },
    formaResult,
  });

  const listContainer = useMemo(() => {
    return (
      <ListTemplate
        tableProps={{
          ...tableProps,
          loading,
          dataSource,
        }}
        tableCardProps={tableCardProps}
        spaceProps={spaceProps}
        searchBarProps={{
          onFinish: (searchValue) => {
            queryList(formatSubmitValue ? formatSubmitValue(searchValue) : searchValue);
          },
          formItemsConfig,
          onReset: () => {
            queryList(defaulParams);
          },
          colProps,
          rowProps,
          actionColProps,
        }}
      />
    );
  }, [spaceProps, tableProps, tableCardProps, formItemsConfig]);

  return {
    loading,
    dataSource,
    queryList,
    ...rest,
    listContainer,
  };
};
