import { ColProps, RowProps } from 'antd';
import React from 'react';
import { FormItemConfig } from '../../FormItemsBuilder';
import { ListTemplateProps } from '../../ListTemplate';
import { OptionConfig, RequestService } from '../useRequest';
export interface ConfigListPageParameter<Res, Param> extends Omit<ListTemplateProps, 'searchBarProps'>, OptionConfig<Param, Res> {
    queryListService: RequestService<Param, Res>;
    formatSubmitValue?: (formValue: Param) => unknown;
    formaResult: (res: any) => Res;
    formItemsConfig?: FormItemConfig[];
    actionColProps?: ColProps;
    colProps?: ColProps;
    rowProps?: RowProps;
}
export declare const useConfigListPage: <Res extends {
    dataSource?: any[] | undefined;
    total?: number | undefined;
} = {
    dataSource?: any[] | undefined;
    total?: number | undefined;
}, Param = any>({ queryListService, formatSubmitValue, onSuccess, onError, spaceProps, tableProps, tableCardProps, formItemsConfig, defaulParams, formaResult, actionColProps, colProps, rowProps, }: ConfigListPageParameter<Res, Param>) => {
    listContainer: JSX.Element;
    error: Error | undefined;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    total: number;
    loading: boolean;
    dataSource: never[] | (Res & any[]);
    queryList: (params?: Param | undefined) => void;
};
