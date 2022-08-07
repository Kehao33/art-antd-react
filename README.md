# art-antd-react

### 基于 [Ant Design](https://ant-design.gitee.io/components/overview-cn/) 开发的配置化组件，旨在通过配置化开发、做更快更高效更快乐的做一个前端开发艺术家

何时使用该组件库：
- 配置化开发表单
- 配置化展示详情信息
- 通过 hooks 来开发模板页面
- 通过 hooks 来配置化表单弹框
- useRequest 请求数据自动 loading、处理 error、format 返回数据、手动自动请求数据
- 快速使用 antd 搭建一个 react demo（无需配置），开箱即用 antd 组件

### Description
从1.1.0 到 以后的版本，antd 只要是无痛升级，本 library 也是无痛升级

#### 当前可供用的组件

- DetailPresent 详情呈现，配置化展示详情信息
- FormItemsBuilder 表单项构建器，快速生成表单项
- DetailPresent 详情呈现，快速的展示出想展示的信息
- FormGenerator 表单生成器，在表单项构建构造器的基础上封装了 提交，重置，折叠等功能
- antd 的所有组件均可从 本组件中导出(这意味着用 antd demo 的时候只需要安装这个包即可，哈哈 )

#### 提供的 hooks

- useConfigListPage 列表配置页 hooks (支持搜索，table 展示，自动 loading)
- useFormModal 表单弹框 hooks （提交时 loading，提交后请求数据, 成功则关闭 modal，否则弹框仍然打开）
- useRequest 请求时 自动 loading，error 监控，格式化请求到的数据，成功提示

#### 官网 & 仓库地址

> 如果官网暂时不能访问，直接看 Started 的 demo 搭建应用，hooks 可以 clone 本仓库后本地看demo ^_&

Gitee：

- [art-antd-react gitee 官网](https://quankehao.gitee.io/art-antd-react) 国内的访问此链接较快

- [art-antd-react repository 地址](https://gitee.com/quankehao/art-antd-react/pages)

github:

- [art-antd-react GitHub 官网](https://kehao33.github.io/art-antd-react/)

- [art-antd-react GitHub repository 地址](https://github.com/Kehao33/art-antd-react)

### Getting Started

```shell
npm i art-antd-react
# or
yarn add art-antd-react
```

# FormItemsBuilder 表单项构建器

## 何时使用

FormItemsBuilder 的目的是使用配置化的思想来帮助我们快速的生成 Form.Item 和其 Children 的标签，但建议只有必须要把 Form.Item 分组之类的场景时才使用该组件,如 [demo2](/components/form-items-builder#自定义布局和其他标签的使用)，否则建议使用 [FormGenerator](/components/form-generator) ,如果要单独使用则和 [Form](https://ant-design.gitee.io/components/form-cn/) 组件搭配使用

## 代码演示

### 基本使用

```tsx
// 这些组件或者 Props API 也可以从 antd 或者 art-antd-react 中导出
// import {
//   Button,
//   Col,
//   Form,
//   InputNumberProps,
//   InputProps,
//   Row,
//   SelectProps,
// } from "antd";

import {
  Button,
  Col,
  Form,
  FormItemConfig,
  FormItemsBuilder,
  InputNumberProps,
  InputProps,
  RenderType,
  Row,
  SelectProps,
} from 'art-antd-react'; // 内部也将 antd 的直接导出组件和props 导出了

const Demo1 = () => {
  const [form] = Form.useForm();

  const mockOptions = [
    {
      label: 'mock1',
      value: 'mock1',
    },
    {
      label: 'mock2',
      value: 'mock2',
    },
    {
      label: 'mock3',
      value: 'mock3',
    },
  ];

  const formItemsConfig: FormItemConfig[] = [
    {
      renderType: RenderType.Input,
      formItemProps: {
        name: 'name',
        label: '姓名',
      },
      formItemChildProps: {
        placeholder: '请输入名字',
      } as InputProps,
    },
    {
      renderType: RenderType.Select,
      formItemProps: {
        name: 'hobby',
        label: '爱好',
      },
      formItemChildProps: {
        placeholder: '请选择',
        options: mockOptions,
      } as SelectProps,
    },
    {
      renderType: RenderType.InputNumber,
      formItemProps: {
        name: 'number',
        label: '年龄',
      },
      formItemChildProps: {
        placeholder: '请输入数字',
        // 类名 style 等都可以直接写成 key-value 的形式
        style: { width: '100%' },
        // 当需要提示或者静态检查时推荐使用 ts 的 as 断言
      } as InputNumberProps,
    },
  ];

  return (
    <Form
      form={form}
      onFinish={(value: Record<string, unknown>) => {
        console.log('demo1 values: ', value);
      }}
    >
      <Row gutter={18}>
        {/* FormItemsBuilder 自带 Col 布局, 因此有时候传递的 colProps/itemProps 不ok时，或许需要加一个 Row 包裹 FormItemsBuilder */}
        <FormItemsBuilder colProps={{ span: 6 }} formItemsConfig={formItemsConfig} />
        <Col span={6}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Demo1;
```

## FormItemsBuilder API

### 整体 API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| colProps | 同 antd 的 [ColProps](https://ant-design.gitee.io/components/grid-cn/#Col) | ColProps | {} |
| formItemsConfig | 定义每个 Form.Item 和其 Child 的配置，详情见下 | FormItemConfig[] | - |

### FormItemConfig API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 唯一标识，用来做 map 时的 key，不存在则 name, name 不存在时则为 index | React.Key | - |
| formItemProps | 同 antd 的 [Form.Item API](https://ant-design.gitee.io/components/form-cn/#Form.Item) | FormItemProps | - |
| itemColProps | 同 antd 的 [ColProps](https://ant-design.gitee.io/components/grid-cn/#Col) , 定义当前的 col 布局 | ColProps | - |
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

特殊说明： FormItemsBuilder 的每一个 表单项 都有 Col 包裹，这是为了适配灵活的 布局; RenderRecord 定义 renderType 是因为使用枚举 的时候 ts 提示不够智能，故暂时采用此方法

# DetailPresent 详情陈述

是基于 antd 的 [Descriptions 描述列表](https://ant-design.gitee.io/components/descriptions-cn/#components-descriptions-demo-basic) 的封装，但是 本组件 仅需要 通过配置 key 展现的 label(必选) 或 Description.Item 对应的布局即可(可选), 让开发者更快的开发，享受 job

## 何时使用

常见于详情页的信息展示, 配置即显示，显示的顺序根据 keyMapLabel 的配置顺序来展示

## 代码演示

### 基本使用

```tsx
import React from 'react';
import { DetailPresent } from 'art-antd-react';

const Demo1 = () => {
  const responseData = {
    user: '张良',
    age: '88',
    hobby: ['谋略', '兵法', '识人'],
    state: '中国-汉朝',
    sex: '男',
    friend: {
      user: '韩非子',
    },
  };

  const keyMapLabel = {
    user: '姓名',
    age: '年龄',
    sex: '性别',
    state: '国籍',
    hobby: '爱好',
    friend: '朋友',
  };

  return (
    <DetailPresent
      title="谋圣信息"
      detail={{
        ...responseData,
        friend: responseData.friend.user,
      }}
      keyMapLabel={keyMapLabel}
    />
  );
};

export default Demo1;
```

### 自定义某个项的 布局

```tsx
import React from 'react';
import { DetailPresent } from 'art-antd-react';

const Demo1 = () => {
  const responseData = {
    user: '张良',
    age: '88',
    hobby: ['谋略', '兵法', '识人'],
    state: '中国-汉朝',
    sex: '男',
    other: null,
    friend: {
      user: '韩非子',
    },
    sketch: '张良（？—前186年），字子房，一说颍川城父（今河南郏县）人',
  };

  const keyMapLabel = {
    user: '姓名',
    age: '年龄',
    sex: '性别',
    sketch: '来自百度百科介绍',
    state: '国籍',
    hobby: '爱好',
    friend: '朋友',
    other: '其他',
  };

  return (
    <DetailPresent<typeof responseData>
      title="谋圣信息"
      detail={{
        ...responseData,
        friend: responseData.friend.user,
        hobby: responseData.hobby.join('、'),

        sketch: (
          <a
            target="_blank"
            rel="noreferrer"
            href="https://baike.baidu.com/item/%E5%BC%A0%E8%89%AF/6658?fr=aladdin"
          >
            {responseData.sketch}
          </a>
        ),
      }}
      // 值为空的时候的占位符
      placeholder="-"
      keyMapLabel={keyMapLabel}
      // 自定义每一项单独的配置
      keyMapItemProps={{
        sketch: {
          labelStyle: { color: '#f00' },
          // 独占3列
          span: 3,
        },
      }}
    />
  );
};

export default Demo1;
```

## DetailPresent API

说明： 该组件是基于 antd 的 [Description](https://ant-design.gitee.io/components/descriptions-cn/#Descriptions) 来封装的，故其他的 API 都可以透传给 本组件的 props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| detail | 要展示的详情对象 | Record<string,any> | - |
| keyMapLabel | 根据 key 来映射 出 label，这个配置决定了显示的顺序 | Record<string,React.ReactNode> | - |
| keyMapItemProps | 映射 单独项的布局 value 的类型为 [DescriptionItemProps](https://ant-design.gitee.io/components/descriptions-cn/#DescriptionItem) | `Record<keyof detail,DescriptionItemProps >` | - |
| placeholder | 空值的占位符 | React.ReactNode | - |

# FormGenerator 表单生成器

## 何时使用

FormGenerator 的目的是使用配置化的思想来帮助我们快速的生成 Form.Item 和其 Children 的标签，但建议只有必须要把 Form.Item 分组之类的场景时才使用该组件,如 [demo2](/components/form-items-builder#自定义布局和其他标签的使用)，否则建议使用 [FormGenerator](/components/form-generator) ,如果要单独使用则和 [Form](https://ant-design.gitee.io/components/form-cn/) 组件搭配使用

## 代码演示

### 基本使用

```tsx
// 所有antd 导出的东西均可以使用 art-antd-react 导出（如果你的项目不需要配置化，也许不需要下载 antd
// import { Button, Form, Input, SelectProps, Space, TimeRangePickerProps } from 'antd';
import React from 'react';
import {
  FormItemConfig,
  RenderType,
  FormGenerator,
  Button,
  Form,
  Input,
  SelectProps,
  Space,
  TimeRangePickerProps,
} from 'art-antd-react';

const Demo2 = () => {
  const [form] = Form.useForm();

  const mockOptions = [
    {
      label: 'mock1',
      value: 'mock1',
    },
    {
      label: 'mock2',
      value: 'mock2',
    },
  ];
  const formItemsConfig: FormItemConfig[] = [
    {
      renderType: RenderType.Switch,
      itemColProps: { span: 4 },
      formItemProps: {
        name: 'label5',
        label: 'label5',
      },
    },
    {
      renderType: RenderType.RadioGroup,
      itemColProps: { span: 10 },
      formItemProps: {
        name: 'label7',
        label: 'label7',
        wrapperCol: { span: 24 },
      },
      formItemChildProps: {
        // 类名 style 等都可以直接写成 key-value 的形式
        style: { width: '100%' },
        options: mockOptions,
      },
    },
    {
      // 使用CustomItemChildren 可以自定义 Form.Item 的 children
      renderType: RenderType.CustomItemChildren,
      itemColProps: { span: 24 },
      formItemProps: {
        label: 'label8',
      },
      customItemChildren: (
        <Form.List name="label8">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <Form.Item
                    {...restField}
                    name={[name, 'first']}
                    rules={[{ required: true, message: 'Missing first name' }]}
                  >
                    <Input placeholder="First Name" />
                  </Form.Item>
                  <Button type="link" onClick={() => remove(name)}>
                    删除
                  </Button>
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()}>
                  + Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      ),
    },
    {
      renderType: RenderType.Input,
      key: '1',
      formItemProps: {
        name: 'label1',
        label: 'label1',
      },
      formItemChildProps: {
        placeholder: '请输入名字',
      },
    },
    {
      renderType: RenderType.Select,
      formItemProps: {
        name: 'label2',
        label: 'label2',
      },
      formItemChildProps: {
        placeholder: '请选择',
        options: mockOptions,
      } as SelectProps,
    },
    {
      renderType: RenderType.Slider,
      key: '3',
      formItemProps: {
        name: 'label3',
        label: 'label3',
      },
    },
    {
      renderType: RenderType.TimeRangePicker,
      key: '4',
      // itemColProps 的优先级 大于 colProps 的优先级
      itemColProps: { span: 24 },
      formItemProps: {
        name: 'label4',
        label: 'label4',
      },
      formItemChildProps: {
        // 类名 style 等都可以直接写成 key-value 的形式
        onChange: (v) => {
          console.log('v', v);
        },
        // 当需要提示或者静态检查时推荐使用 ts 的 as 断言
      } as TimeRangePickerProps,
    },
  ].map(({ formItemChildProps, formItemProps, ...rest }) => ({
    ...rest,
    formItemProps: {
      ...formItemProps,
      wrapperCol: { span: 24 },
    },
    formItemChildProps: {
      ...(formItemChildProps || {}),
      style: { width: '100%' },
    },
  }));

  return (
    <FormGenerator
      form={form}
      showSubmit
      onFinish={(v: Record<string, unknown>) => {
        console.log('Formgenerator demo2 values: ', v);
      }}
      colProps={{ span: 8 }}
      rowProps={{ gutter: 20 }}
      showExpend
      formItemsConfig={formItemsConfig}
      actionColProps={{ span: 24 }}
      actionBar={
        <Button type="primary" onClick={() => form.submit()}>
          保存
        </Button>
      }
    />
  );
};

export default Demo2;
```

## FormGenerator API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| colProps | 定义每一列的布局,同 antd [ColProps](https://ant-design.gitee.io/components/grid-cn/#Col) | ColProps | - |
| rowProps | 定义行的布局, 同 antd [RowProps](https://ant-design.gitee.io/components/grid-cn/#Row) | RowProps | - |
| showExpend | 是否展示收缩功能 | boolean | true |
| showSubmit | 是否展示提交功能 | boolean | true |
| showRest | 是否展示重置功能 | boolean | true |  | actionBar | 自定义操作功能 | React.ReactNode | - |
| formItemmsConfig | formItems 的配置,查看[FormItemsBuilder API]() | FormItemConfig[] | - |
| foldNumber | 收起的时候展示多少个表单项 | number | 2 |
| flodNode | 收起的描述 | React.ReactNode | '收起' |
| unfoldNode | 展开的描述 | React.ReactNode | '展开' |
| restNode | 重置的描述 | React.ReactNode | '重置' |
| submitNode | 提交的描述 | React.ReactNode | '提交' |
| fold | 是否收缩 | boolean | false |
| onRest | 点击充值后的操作 | ()=> void | - |

说明，FormGerator 的所有 API/props 继承自 antd [Form](https://ant-design.gitee.io/components/form-cn/), 故除以下的 props 外，其他的 Form props 均可直接透传给 FormGenrator props
