import React from 'react';
import { FormInstance, message, Modal, ModalProps } from 'antd';
import { RequestService, useRequest } from '../hooks/useRequest';

interface FormModalConfig<Value, Res> extends Omit<ModalProps, 'onError' | 'onOk'> {
  serviceFn: RequestService<Value, Res>;
  formatSubmitValue: (formValue: Value) => unknown;
  onSuccess?: (data?: Res) => void;
  onError?: (e?: Error) => void;
  onCancel?: () => void;
  form: FormInstance;
}

export const MutModal = <Value, Res>({
  serviceFn,
  formatSubmitValue,
  onSuccess,
  onError,
  onCancel,
  form,
  children,
  ...restModalProps
}: FormModalConfig<Value, Res>) => {
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

  const handleCancel = () => {
    onCancel?.();
  };

  return (
    <Modal
      onCancel={handleCancel}
      onOk={() =>
        form.validateFields().then((res) => {
          console.log('result: ', res);
          lazyService(formatSubmitValue ? formatSubmitValue(res) : res);
        })
      }
      confirmLoading={loading}
      {...restModalProps}
    >
      {children}
    </Modal>
  );
};
