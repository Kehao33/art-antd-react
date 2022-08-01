import { ColProps, Form, RowProps, Row, FormProps, Col, ButtonProps, Button, Space } from 'antd';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FormItemsBuilder, FormItemConfig } from '../FormItemsBuilder';

export interface FormGeneratorProps extends Omit<FormProps, 'onReset'> {
  // 操作栏的的 col 布局， 和 antd 的 Col API 相同，优先级高于 colProps
  actionColProps?: ColProps;
  // 公共的 col 布局， 和 antd 的 Col API 相同
  colProps?: ColProps;
  // 公共的 rowProps 布局， 和 antd 的 Row API 相同
  rowProps?: RowProps;
  // Form.Item 和 其 children 的配置，和 FormItemsBuilder 的配置一样
  formItemsConfig: FormItemConfig[];
  // 点击重置的时候要执行的方法
  onReset?: () => void;
  // 是否展示 提交按钮
  showSubmit?: boolean;
  // 提交的内容，默认为提交
  submitNode?: React.ReactNode;
  // 重置的内容，默认为重置
  restNode?: React.ReactNode;
  // 是否展示重置按钮
  showRest?: boolean;
  // 默认是收起还是展开,默认展开
  fold?: boolean;
  // 是否展示收缩内容
  showExpend?: boolean;
  // 收缩的时候展示多少个表单项
  foldNumber?: number;
  // 收缩的内容，默认为“收缩”文字
  foldNode?: React.ReactNode;
  // 展开的内容，默认为 “展开”文字
  unfoldNode?: React.ReactNode;
  // 自定义操作内容
  actionBar?: React.ReactNode;
  // 提交按钮的 props
  submitBtnProps?: ButtonProps;
  // 重置按钮的 props
  resetBtnProps?: ButtonProps;
}

export type FormStoreValue = Record<string, unknown>;

export const FormGenerator: React.FC<FormGeneratorProps> = ({
  form,
  colProps,
  rowProps,
  showExpend,
  showSubmit,
  showRest,
  actionBar,
  formItemsConfig,
  foldNumber = 2,
  actionColProps,
  foldNode = '收起',
  unfoldNode = '展开',
  restNode = '重置',
  submitNode = '提交',
  fold = false,
  onReset,
  onValuesChange,
  submitBtnProps,
  resetBtnProps,
  ...restFormConfig
}) => {
  const [formInstance] = Form.useForm(form);
  const [expand, setExpand] = useState(true);
  const formValueRecord = useRef<FormStoreValue>({});

  useEffect(() => {
    setExpand(!fold);
  }, [fold]);

  const handleReset = () => {
    formValueRecord.current = {};
    formInstance.resetFields();

    if (onReset) {
      onReset();
    }
  };

  const handleValuesChange = (changeValues: FormStoreValue, allValues: FormStoreValue) => {
    formValueRecord.current = {
      ...formValueRecord.current,
      ...(changeValues || {}),
    };

    if (onValuesChange) {
      onValuesChange(changeValues, allValues);
    }
  };

  const formItems = useMemo(() => {
    return expand ? formItemsConfig : formItemsConfig.slice(0, foldNumber);
  }, [foldNumber, formItemsConfig, expand]);

  return (
    <Form form={formInstance} onValuesChange={handleValuesChange} {...restFormConfig}>
      <Row {...(rowProps || {})}>
        <FormItemsBuilder formItemsConfig={formItems} colProps={colProps || {}} />
        <Col {...(actionColProps || colProps || {})}>
          {actionBar ||
            ((showExpend || showRest || showSubmit) && (
              <Space>
                {showSubmit && (
                  <Button type="primary" htmlType="submit" {...(submitBtnProps || {})}>
                    {submitNode}
                  </Button>
                )}
                {showRest && (
                  <Button onClick={handleReset} {...(resetBtnProps || {})}>
                    {restNode}
                  </Button>
                )}
                {showExpend && (
                  <a
                    style={{ fontSize: 12 }}
                    onClick={() => {
                      setExpand(!expand);
                    }}
                  >
                    {expand ? foldNode : unfoldNode}
                  </a>
                )}
              </Space>
            ))}
        </Col>
      </Row>
    </Form>
  );
};
