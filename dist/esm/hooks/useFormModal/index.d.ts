/// <reference types="react" />
import { ColProps, FormInstance, ModalProps, RowProps } from 'antd';
import { FormItemConfig } from '../../FormItemsBuilder';
import { RequestService } from '../useRequest';
export interface FormModalConfig<Value, Res> extends Omit<ModalProps, 'onError' | 'onOk'> {
    form?: FormInstance;
    colProps?: ColProps;
    rowProps?: RowProps;
    formItemsConfig: FormItemConfig[];
    serviceFn: RequestService<Value, Res>;
    formatSubmitValue: (formValue: Value) => unknown;
    onSuccess?: (data?: Res) => void;
    onError?: (e?: Error) => void;
    onCancel?: () => void;
}
export declare const useFormModal: <Value, Res>({ form, colProps, rowProps, formItemsConfig, serviceFn, formatSubmitValue, onSuccess, onError, onCancel, ...restModalProps }: FormModalConfig<Value, Res>) => {
    formModal: JSX.Element;
    formInstance: FormInstance<any>;
};
