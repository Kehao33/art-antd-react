import React from 'react';
import { Button, Form, Input, SelectProps, Space, TimeRangePickerProps } from 'antd';
import { FormItemConfig, FormGenerator, RenderType } from 'art-antd-react';
//  安裝了 art-antd-react 以后 antd 直接导出的 类型或组件 可以直接从 art-antd-react 中导出
// import { FormItemConfig, FormGenerator, RenderType, Button, Form, Input, SelectProps, Space, TimeRangePickerProps } from 'art-antd-react';

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
        // resolve warning
        valuePropName: 'checked',
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
