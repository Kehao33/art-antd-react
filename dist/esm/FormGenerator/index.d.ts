import { ColProps, RowProps, FormProps, ButtonProps } from 'antd';
import React from 'react';
import { FormItemConfig } from '../FormItemsBuilder';
export interface FormGeneratorProps extends Omit<FormProps, 'onReset'> {
    actionColProps?: ColProps;
    colProps?: ColProps;
    rowProps?: RowProps;
    formItemsConfig: FormItemConfig[];
    onReset?: () => void;
    showSubmit?: boolean;
    submitNode?: React.ReactNode;
    restNode?: React.ReactNode;
    showRest?: boolean;
    fold?: boolean;
    showExpend?: boolean;
    foldNumber?: number;
    foldNode?: React.ReactNode;
    unfoldNode?: React.ReactNode;
    actionBar?: React.ReactNode;
    submitBtnProps?: ButtonProps;
    resetBtnProps?: ButtonProps;
}
export declare type FormStoreValue = Record<string, unknown>;
export declare const FormGenerator: React.FC<FormGeneratorProps>;
