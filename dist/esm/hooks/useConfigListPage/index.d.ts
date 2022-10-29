import { ColProps, RowProps } from 'antd';
import React from 'react';
import { FormItemConfig } from '../../FormItemsBuilder';
import { ListTemplateProps } from '../../ListTemplate';
import { OptionConfig, RequestService } from '../useRequest';
export interface ConfigListPageParameter<Param, Res> extends Omit<ListTemplateProps, 'searchBarProps'>, OptionConfig<Param, Res> {
    queryListService: RequestService<Param, Res>;
    formatSubmitValue?: (formValue: Param) => unknown;
    formItemsConfig?: FormItemConfig[];
    actionColProps?: ColProps;
    colProps?: ColProps;
    rowProps?: RowProps;
}
export declare const useConfigListPage: <Param, Res extends Record<string, unknown>[]>({ queryListService, formatSubmitValue, onSuccess, onError, spaceProps, tableProps, tableCardProps, formItemsConfig, defaulParams, formaResult, actionColProps, colProps, rowProps, }: ConfigListPageParameter<Param, Res>) => {
    listContainer: JSX.Element;
    error: Error | undefined;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
    dataSource: Res | undefined;
    queryList: (params?: Param | undefined) => void;
};
