import React from 'react';
import { Button, Col, Form, InputNumberProps, InputProps, Row, SelectProps } from 'antd';
import { FormItemsBuilder, FormItemConfig, RenderType } from 'art-antd-react';
//  安裝了 art-antd-react 以后 antd 直接导出的 类型或组件 可以直接从 art-antd-react 中导出
// import { FormItemsBuilder, FormItemConfig, RenderType, Button, Col, Form, InputNumberProps, InputProps, Row, SelectProps } from 'art-antd-react';

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
        {/* FormItemsBuilder 自带 Col 布局 */}
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
