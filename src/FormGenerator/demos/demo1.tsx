import { Form, InputProps } from 'antd';
import React from 'react';
import { FormItemConfig, RenderType, FormGenerator } from 'art-antd-react';

const Demo1 = () => {
  const [form] = Form.useForm();

  const formItemsConfig: FormItemConfig[] = Array(11)
    .fill({})
    .map((_, index) => ({
      renderType: RenderType.Input,
      formItemProps: {
        name: `label${index}`,
        label: `label${index}`,
      },
      formItemChildProps: {
        placeholder: `please input label${index}`,
      } as InputProps,
    }))
    .map(({ formItemChildProps, ...rest }) => ({
      ...rest,
      formItemChildProps: {
        style: { width: '100%' },
        ...formItemChildProps,
      },
    }));

  return (
    <FormGenerator
      form={form}
      showRest
      showExpend
      showSubmit
      // 收起的时候 只展示 5 个表单项
      foldNumber={5}
      onFinish={(v: Record<string, unknown>) => {
        console.log('Formgenerator demo1 values: ', v);
      }}
      colProps={{ span: 8 }}
      rowProps={{ gutter: 64 }}
      formItemsConfig={formItemsConfig}
    />
  );
};

export default Demo1;
