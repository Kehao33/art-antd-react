import { CheckboxProps, ColProps, DatePickerProps, FormItemProps, InputNumberProps, InputProps, RadioGroupProps, RadioProps, SelectProps, TimePickerProps, TimeRangePickerProps, SwitchProps } from 'antd';
import { CheckboxGroupProps } from 'antd/lib/checkbox';
import { RangePickerProps } from 'antd/lib/date-picker';
import { SliderBaseProps } from 'antd/lib/slider';
import React from 'react';
declare type RenderRecord = {
    Input: 'Input';
    Select: 'Select';
    InputNumber: 'InputNumber';
    Checkbox: 'Checkbox';
    CheckboxGroup: 'CheckboxGroup';
    Radio: 'Radio';
    RadioGroup: 'RadioGroup';
    Switch: 'Switch';
    TimePicker: 'TimePicker';
    TimeRangePicker: 'TimeRangePicker';
    DatePicker: 'DatePicker';
    DateRangePicker: 'DateRangePicker';
    Slider: 'Slider';
    CustomItemChildren: 'CustomItemChildren';
};
export declare const RenderType: RenderRecord;
export declare type TRenderType = keyof RenderRecord;
declare type FormItemChildProps = InputProps | InputNumberProps | CheckboxProps | CheckboxGroupProps | SelectProps | RadioProps | RadioGroupProps | SwitchProps | TimePickerProps | TimeRangePickerProps | DatePickerProps | RangePickerProps | SliderBaseProps;
export interface FormItemConfig {
    key?: React.Key;
    renderType: TRenderType;
    itemColProps?: ColProps;
    itemTitle?: React.ReactNode;
    formItemProps?: FormItemProps;
    formItemChildProps?: FormItemChildProps;
    customItemChildren?: React.ReactElement;
}
export declare const renderFormItemChild: (formItemConfig: Pick<FormItemConfig, 'renderType' | 'customItemChildren' | 'formItemChildProps'>) => JSX.Element;
export interface FormItemsBuilderProps {
    /**
     * @description       同 antd 的 [ColProps](https://ant-design.gitee.io/components/grid-cn/#Col), 定义每项布局，优先级没有 itemCol 高
     * @default           支持定义默认值
     */
    colProps?: ColProps;
    /**
     * @description       定义每个 Form.Item 和其 Children 的配置，详情见下 [FormItemConfig](/components/form-items-builder#formitemconfig-api)
     * @default           []
     */
    formItemsConfig: FormItemConfig[];
}
export declare const FormItemsBuilder: React.FC<FormItemsBuilderProps>;
export {};
