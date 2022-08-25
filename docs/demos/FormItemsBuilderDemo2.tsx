import React from 'react';
import { SliderBaseProps } from 'antd/lib/slider';
import { Button, Card, Col, Form, Row, SelectProps, TimeRangePickerProps } from 'antd';
import { FormItemsBuilder, FormItemConfig, RenderType } from 'art-antd-react';

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

  const group1FormItems: FormItemConfig[] = [
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
      renderType: RenderType.Slider,
      key: '3',
      formItemProps: {
        name: 'label3',
        label: 'label3',
      },
      formItemChildProps: {
        // 类名 style 等都可以直接写成 key-value 的形式
        style: { width: '100%' },
        // 当需要提示或者静态检查时推荐使用 ts 的 as 断言
      } as SliderBaseProps,
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
  ];

  const group2FormItems: FormItemConfig[] = [
    {
      renderType: RenderType.CheckboxGroup,
      formItemProps: {
        name: 'label6',
        label: 'label6',
      },
      formItemChildProps: {
        options: mockOptions,
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
        name: 'label8',
        label: 'label8',
        wrapperCol: { span: 24 },
      },
      customItemChildren: (
        <div>使用RenderType.CustomItemChildren后，这里可以随意定义，限制住的只有你的想象力!</div>
      ),
    },
  ];

  const groupFormItems = [
    {
      title: 'group1',
      itemsConfig: group1FormItems,
    },
    {
      title: 'group2',
      itemsConfig: group2FormItems,
    },
  ];

  return (
    <Form
      form={form}
      onFinish={(value: Record<string, unknown>) => {
        console.log('demo2 values: ', value);
      }}
    >
      {groupFormItems.map(({ title, itemsConfig }) => (
        <Card title={title} key={title} style={{ margin: 16 }}>
          <Row gutter={16}>
            <FormItemsBuilder colProps={{ span: 8 }} formItemsConfig={itemsConfig} />
          </Row>
        </Card>
      ))}
      <Col span={6} push={1}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Col>
    </Form>
  );
};

export default Demo2;
