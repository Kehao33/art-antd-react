/// <reference types="react" />
import { FormInstance, ModalProps } from 'antd';
import { RequestService } from '../hooks/useRequest';
interface FormModalConfig<Value, Res> extends Omit<ModalProps, 'onError' | 'onOk'> {
    serviceFn: RequestService<Value, Res>;
    formatSubmitValue: (formValue: Value) => unknown;
    onSuccess?: (data?: Res) => void;
    onError?: (e?: Error) => void;
    onCancel?: () => void;
    form: FormInstance;
}
export declare const FormModal: <Value, Res>({ serviceFn, formatSubmitValue, onSuccess, onError, onCancel, form, children, ...restModalProps }: FormModalConfig<Value, Res>) => JSX.Element;
export {};
