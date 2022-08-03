import { Button, Col, Form, Input, Row, SelectProps, Space, TimeRangePickerProps } from 'antd';
import React from 'react';
import { FormItemsBuilder, FormItemConfig, RenderType } from 'art-antd-react';

const Demo3 = () => {
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

  const group1FormItems: FormItemConfig[] = [
    {
      renderType: RenderType.Input,
      key: '1',
      itemTitle: <div>itemTitle 一般放在label前加以说明</div>,
      formItemProps: {
        // 这里可以 放 Form.Item 的 所有 props，你懂的！
        name: 'label1',
        label: <div>label1</div>,
        colon: true, // 显示 Form.Item 后边的冒号
        dependencies: ['label2'],
        extra: <div>额外的信息</div>,
        tooltip: 'demo3',
        rules: [
          {
            required: true,
            message: '不能为空',
          },
        ],
      },
      formItemChildProps: {
        placeholder: '请输入名字',
      },
    },
    {
      renderType: RenderType.Select,
      key: '2',
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
        style: { width: '100%' },
        onChange: (v) => {
          console.log('v', v);
        },
        // 当需要提示或者静态检查时推荐使用 ts 的 as 断言
      } as TimeRangePickerProps,
    },
    {
      // 当 使用了 renderType 等于 CustomItemChildren 的时候，定义 formItemChildProps 就不管用了，只需要 使用 customItemChild 写 正常的标签即可
      renderType: RenderType.CustomItemChildren,
      key: 'CustomItemChildren',
      // itemColProps 的优先级 大于 colProps 的优先级
      itemColProps: { span: 24 },
      formItemProps: {
        label: 'label4',
      },
      customItemChildren: (
        <Form.List name="sights">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field) => (
                <Space key={field.key} align="baseline" style={{ marginRight: 10 }}>
                  <Form.Item
                    {...field}
                    label="Price"
                    name={[field.name, 'price']}
                    rules={[{ required: true, message: '价格不能为空' }]}
                  >
                    <Input />
                  </Form.Item>

                  <Button onClick={() => remove(field.name)} type="primary" danger>
                    移除
                  </Button>
                </Space>
              ))}

              <Form.Item>
                <Button type="dashed" onClick={() => add()} block>
                  新增项
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      ),
    },
  ].map(({ formItemProps, ...rest }) => ({
    ...rest,
    formItemProps: {
      labelCol: { span: 24 },
      wrapperCol: { span: 24 },
      ...formItemProps,
    },
  }));

  return (
    <Form
      form={form}
      onFinish={(value: Record<string, unknown>) => {
        console.log('demo3 values: ', value);
      }}
    >
      <Row gutter={16}>
        <FormItemsBuilder colProps={{ span: 24 }} formItemsConfig={group1FormItems} />
      </Row>

      <Col span={6}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Col>
    </Form>
  );
};

export default Demo3;
