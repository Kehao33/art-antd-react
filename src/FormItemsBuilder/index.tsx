import {
  CheckboxProps,
  ColProps,
  DatePickerProps,
  Form,
  FormItemProps,
  Input,
  InputNumber,
  InputNumberProps,
  InputProps,
  RadioGroupProps,
  RadioProps,
  SelectProps,
  TimePickerProps,
  TimeRangePickerProps,
  Checkbox,
  Select,
  Radio,
  Switch,
  Slider,
  TimePicker,
  DatePicker,
  Col,
  SwitchProps,
} from 'antd';
import { CheckboxGroupProps } from 'antd/lib/checkbox';
import { RangePickerProps } from 'antd/lib/date-picker';
import { SliderBaseProps } from 'antd/lib/slider';
import React from 'react';

type RenderRecord = {
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

export const RenderType: RenderRecord = {
  // 对应 antd 的 Input 组件
  Input: 'Input',
  // 对应 antd 的 Select 组件
  Select: 'Select',
  // 对应 antd 的 InputNumber 组件
  InputNumber: 'InputNumber',
  // 对应 antd 的 Checkbox 组件
  Checkbox: 'Checkbox',
  // 对应 antd 的 Checkbox.Group 组件
  CheckboxGroup: 'CheckboxGroup',
  // 对应 antd 的 Radio 组件
  Radio: 'Radio',
  // 对应 antd 的 Radio.Group 组件
  RadioGroup: 'RadioGroup',
  // 对应 antd 的 Switch 组件
  Switch: 'Switch',
  // 对应 antd 的 TimePicker 组件
  TimePicker: 'TimePicker',
  // 对应 antd 的 TimePicker.RangePicker 组件
  TimeRangePicker: 'TimeRangePicker',
  // 对应 antd 的 DatePicker 组件
  DatePicker: 'DatePicker',
  // 对应 antd 的 DatePicker.RangePicker 组件
  DateRangePicker: 'DateRangePicker',
  // 对应 antd 的 Slider 组件
  Slider: 'Slider',
  // 自定以 Form.Item 的 children 渲染
  CustomItemChildren: 'CustomItemChildren',
};

export type TRenderType = keyof RenderRecord;

type FormItemChildProps =
  | InputProps
  | InputNumberProps
  | CheckboxProps
  | CheckboxGroupProps
  | SelectProps
  | RadioProps
  | RadioGroupProps
  | SwitchProps
  | TimePickerProps
  | TimeRangePickerProps
  | DatePickerProps
  | RangePickerProps
  | SliderBaseProps;

export interface FormItemConfig {
  key?: React.Key;
  renderType: TRenderType;
  itemColProps?: ColProps;
  itemTitle?: React.ReactNode;
  formItemProps?: FormItemProps;
  formItemChildProps?: FormItemChildProps;
  customItemChildren?: React.ReactElement;
}

export const renderFormItemChild = (
  formItemConfig: Pick<FormItemConfig, 'renderType' | 'customItemChildren' | 'formItemChildProps'>,
) => {
  const { renderType, customItemChildren, formItemChildProps = {} } = formItemConfig;

  switch (renderType) {
    case RenderType.CustomItemChildren: {
      if (!customItemChildren) {
        throw new TypeError(
          `renderType等于${RenderType.CustomItemChildren}时,customItemChildren 必须为 React.ReactElement 类型`,
        );
      }
      return customItemChildren;
    }
    case RenderType.Input:
      return <Input {...(formItemChildProps as InputProps)} />;
    case RenderType.InputNumber:
      return <InputNumber {...(formItemChildProps as InputNumberProps)} />;
    case RenderType.Checkbox:
      return <Checkbox {...(formItemChildProps as CheckboxProps)} />;
    case RenderType.CheckboxGroup:
      return <Checkbox.Group {...(formItemChildProps as CheckboxGroupProps)} />;
    case RenderType.Select:
      return <Select {...(formItemChildProps as SelectProps)} />;
    case RenderType.Radio:
      return <Radio {...(formItemChildProps as RadioProps)} />;
    case RenderType.RadioGroup:
      return <Radio.Group {...(formItemChildProps as RadioGroupProps)} />;
    case RenderType.Switch:
      return <Switch {...(formItemChildProps as SwitchProps)} />;
    case RenderType.TimePicker:
      return <TimePicker {...(formItemChildProps as TimePickerProps)} />;
    case RenderType.TimeRangePicker:
      return <TimePicker.RangePicker {...(formItemChildProps as TimeRangePickerProps)} />;
      break;
    case RenderType.DatePicker:
      return <DatePicker {...(formItemChildProps as DatePickerProps)} />;
    case RenderType.DateRangePicker:
      return <DatePicker.RangePicker {...(formItemChildProps as RangePickerProps)} />;
    case RenderType.Slider:
      return <Slider {...(formItemChildProps as SliderBaseProps)} />;
    default:
      throw new TypeError(
        '没有该渲染类型，请通过renderType为RenderType.CustomItemChildren来配置自定义渲染',
      );
  }
};

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

export const FormItemsBuilder: React.FC<FormItemsBuilderProps> = ({
  formItemsConfig,
  colProps,
}) => (
  <>
    {formItemsConfig?.map(({ key, itemTitle, itemColProps, formItemProps, ...rest }, index) => (
      <Col
        key={key || formItemProps?.name?.toString() || index}
        {...(itemColProps || colProps || {})}
      >
        {itemTitle}
        <Form.Item {...formItemProps}>{renderFormItemChild({ ...rest })}</Form.Item>
      </Col>
    ))}
  </>
);
