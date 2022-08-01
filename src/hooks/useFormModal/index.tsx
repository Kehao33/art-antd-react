import { ColProps, Form, FormInstance, message, Modal, ModalProps, RowProps } from 'antd';
import React, { useMemo } from 'react';
import { FormGenerator } from '../../FormGenerator';
import { FormItemConfig } from '../../FormItemsBuilder';
import { RequestService, useRequest } from '../useRequest';

export interface FormModalConfig<Value, Res> extends Omit<ModalProps, 'onError' | 'onOk'> {
  form?: FormInstance;
  // 公共的 col 布局， 和 antd 的 Col API 相同
  colProps?: ColProps;
  // 公共的 rowProps 布局， 和 antd 的 Row API 相同
  rowProps?: RowProps;
  // Form.Item 和 其 children 的配置，和 FormItemsBuilder 的配置一样
  formItemsConfig: FormItemConfig[];
  serviceFn: RequestService<Value, Res>;
  formatSubmitValue: (formValue: Value) => unknown;
  onSuccess?: (data?: Res) => void;
  onError?: (e?: Error) => void;
  onCancel?: () => void;
}

export const useFormModal = <Value, Res>({
  form,
  colProps,
  rowProps,
  formItemsConfig,
  serviceFn,
  formatSubmitValue,
  onSuccess,
  onError,
  onCancel,
  ...restModalProps
}: FormModalConfig<Value, Res>) => {
  const [formInstance] = Form.useForm(form);

  const { lazyService, loading } = useRequest(serviceFn, {
    lazy: true,
    onSuccess(data) {
      if (onSuccess) {
        onSuccess(data);
      } else {
        message.success('操作成功');
        // 成功后调用 取消操作
        onCancel?.();
      }
    },
    onError(error?: Error) {
      if (onError) {
        onError(error);
      } else {
        message.error('操作失败');
      }
    },
  });

  const onFinish = (formValues: any) => {
    lazyService(formatSubmitValue ? formatSubmitValue(formValues) : formValues);
  };

  const handleCancel = () => {
    onCancel?.();
  };

  const formModal = useMemo(() => {
    return (
      <Modal
        onCancel={handleCancel}
        onOk={() => formInstance.submit()}
        confirmLoading={loading}
        {...restModalProps}
      >
        <FormGenerator
          form={formInstance}
          colProps={colProps}
          rowProps={rowProps}
          onFinish={onFinish}
          formItemsConfig={formItemsConfig}
        />
      </Modal>
    );
  }, [formInstance, colProps, rowProps, formItemsConfig]);

  return {
    formModal,
    formInstance,
  };
};
