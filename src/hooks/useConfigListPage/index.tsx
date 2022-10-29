import { ColProps, message, RowProps } from 'antd';
import React from 'react';
import { useMemo } from 'react';
import { FormItemConfig } from '../../FormItemsBuilder';
import { ListTemplate, ListTemplateProps } from '../../ListTemplate';
import { OptionConfig, RequestService, useRequest } from '../useRequest';

export interface ConfigListPageParameter<Res, Param>
  extends Omit<ListTemplateProps, 'searchBarProps'>,
    OptionConfig<Param, Res> {
  queryListService: RequestService<Param, Res>;
  formatSubmitValue?: (formValue: Param) => unknown;
  formaResult: (res: any) => Res;
  // 搜索表单的配置项
  formItemsConfig?: FormItemConfig[];
  // 操作栏的的 col 布局， 和 antd 的 Col API 相同，优先级高于 colProps
  actionColProps?: ColProps;
  // 公共的 col 布局， 和 antd 的 Col API 相同
  colProps?: ColProps;
  // 公共的 rowProps 布局， 和 antd 的 Row API 相同
  rowProps?: RowProps;
}

export const useConfigListPage = <
  Res extends { dataSource?: any[]; total?: number } = { dataSource?: any[]; total?: number },
  Param = any,
>({
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
}: ConfigListPageParameter<Res, Param>) => {
  const {
    loading,
    data,
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

  const { dataSource, total } = (data || {}) as { dataSource: Res; total: number };
  const list = dataSource && Array.isArray(dataSource) ? dataSource : [];

  const listContainer = useMemo(() => {
    return (
      <ListTemplate
        tableProps={{
          ...tableProps,
          loading,
          dataSource: list,
          pagination: {
            total,
            ...(tableProps?.pagination || {}),
          },
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
    total,
    loading,
    dataSource: list,
    queryList,
    ...rest,
    listContainer,
  };
};
