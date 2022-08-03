import { Button, message } from 'antd';
import React from 'react';
import { useRequest } from 'art-antd-react';
// getData 来自于你的请求服务函数
import { getData, MockData } from '../../../mock';

const RequestHookDemo = () => {
  const { data, loading, lazyService } = useRequest<MockData>(getData, {
    lazy: true, // lazy 为 true 的时候需要手动去调用 lazyService(xx)
    onError(e: Error) {
      message.error(e?.message || '请求出错');
    },
  });

  if (data) {
    console.log('请求的数据:', JSON.stringify(data, null, 2));
  }

  return (
    <section>
      <Button onClick={() => lazyService()}>点击请求数据</Button>
      <main>
        请求结果：
        <code>{loading ? 'loading ...' : JSON.stringify(data, null, 2)}</code>
      </main>
    </section>
  );
};

export default RequestHookDemo;
