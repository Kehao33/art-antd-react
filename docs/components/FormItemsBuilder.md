---
nav:
  title: FormItemsBuilder
  path: /components
---

## FormItemsBuilder 表单项构建器

## 何时使用

FormItemsBuilder 的目的是使用配置化的思想来帮助我们快速的生成 Form.Item 和其 Children 的标签，但建议只有必须要把 Form.Item 分组之类的场景时才使用该组件,如 [demo2](/components/form-items-builder#自定义布局和其他标签的使用)，否则建议使用 [FormGenerator](/components/form-generator) ,如果要单独使用则和 [Form](https://ant-design.gitee.io/components/form-cn/) 组件搭配使用

## 代码演示

### 基本使用

<code src="../../src/demos/FormItemsBuilderDemo1.tsx"  title="使用TS as 断言可以帮助我们检查 formItemChildProps 的 API 是否正确">

### 自定义布局和其他标签的使用

<code src="../../src/demos/FormItemsBuilderDemo2.tsx"  title="itemColProps 优先级高于 colProps">

### 垂直布局

<code src="../../src/demos/FormItemsBuilderDemo3.tsx"  title="itemColProps 优先级高于 colProps">

## API

### 整体 API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| colProps | 同 antd 的 [ColProps](https://ant-design.gitee.io/components/grid-cn/#Col) | ColProps | {} |
| formItemsConfig | 定义每个 Form.Item 和其 Child 的配置，详情见下 | FormItemConfig[] | - |

### FormItemConfig API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 唯一标识，用来做 map 时的 key，不存在则 name, name 不存在时则为 index | React.Key | - |
| formItemProps | 同 antd 的 [Form.Item API](https://ant-design.gitee.io/components/form-cn/#Form.Item) | [FormItemProps](https://ant-design.gitee.io/components/form-cn/#Form.Item) | - |
| itemColProps | 同 antd 的 [ColProps](https://ant-design.gitee.io/components/grid-cn/#Col) , 定义当前的 col 布局 | [ColProps](https://ant-design.gitee.io/components/grid-cn/#Col) | - |
| renderType | 标识 Form.Item 的 Children 应该为 哪个组件 | [见如下 RenderType 声明](/components/form-items-builder#rendertype) | - |
| formItemChildProps | 每一项对应的 Form.Item 的 children 的 Props，如 Input 的 onChange 等属性 | - | - |
| formItemChildProps | renderType 为 CustomItemChildren 的时候 渲染的 Form.Item 的 children 元素 | React.ReactElement | - |
| itemTitle | 定义当前项的 title | React.ReactNode | - |

#### RenderType

```typescript
// 不使用 枚举 是因为 提示不够智能 202E0D19.png
const RenderType = {
  /*
   对应 渲染 antd 的 Input 组件, formItemChildProps 对应为 InputProps
   */
  Input: 'Input',
  /*
   对应 渲染 antd 的 Select 组件, formItemChildProps 对应为 InputNumberProps
   */
  Select: 'Select',
  /*
   对应 渲染 antd 的 InputNumber 组件, formItemChildProps 对应为 CheckboxProps
   */
  InputNumber: 'InputNumber',
  /*
   对应 渲染 antd 的 Checkbox 组件, formItemChildProps 对应为 CheckboxGroupProps
   */
  Checkbox: 'Checkbox',
  /*
   对应 渲染 antd 的 Checkbox.Group 组件, formItemChildProps 对应为 SelectProps
   */
  CheckboxGroup: 'CheckboxGroup',
  /*
   对应 渲染 antd 的 Radio 组件, formItemChildProps 对应为 RadioProps
   */
  Radio: 'Radio',
  /*
   对应 渲染 antd 的 Radio.Group 组件, formItemChildProps 对应为 RadioGroupProps
   */
  RadioGroup: 'RadioGroup',
  /*
   对应 渲染 antd 的 Switch 组件, formItemChildProps 对应为 SwitchProps
   */
  Switch: 'Switch',
  /*
   对应 渲染 antd 的 TimePicker 组件, formItemChildProps 对应为 TimePickerProps
   */
  TimePicker: 'TimePicker',
  /*
   对应 渲染 antd 的 TimePicker.RangePicker 组件, formItemChildProps 对应为 TimeRangePickerProps
   */
  TimeRangePicker: 'TimeRangePicker',
  /*
   对应 渲染 antd 的 DatePicker 组件, formItemChildProps 对应为 DatePickerProps*/
  DatePicker: 'DatePicker',
  /*
   对应 渲染 antd 的 DatePicker.RangePicker 组件, formItemChildProps 对应为 RangePickerProps*/
  DateRangePicker: 'DateRangePicker',
  /*
   对应 渲染 antd 的 Slider 组件, formItemChildProps 对应为 SliderBaseProps*/
  Slider: 'Slider',
  // 自定以 Form.Item 的 children 渲染
  CustomItemChildren: 'CustomItemChildren',
};
```

特殊说明： FormItemsBuilder 的每一个 表单项 都有 Col 包裹，这是为了适配灵活的 布局; RenderRecord 定义 renderType 后边会改进定义，使得 ts 提示更智能（但是不会影响之前发布的版本）
