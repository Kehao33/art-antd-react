import React from 'react';
import { Button, message } from 'antd';
import { useRequest } from 'art-antd-react'; //  安裝了 art-antd-react 以后 antd 直接导出的 类型或组件 可以直接从 art-antd-react 中导出
// import { useRequest, Button, message } from 'art-antd-react';
// getData 来自于你的请求服务函数

import { getData } from "./mock";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var RequestHookDemo = function RequestHookDemo() {
  var _useRequest = useRequest(getData, {
    lazy: true,
    // lazy 为 true 的时候需要手动去调用 lazyService(xx)
    onError: function onError(e) {
      message.error((e === null || e === void 0 ? void 0 : e.message) || '请求出错');
    }
  }),
      data = _useRequest.data,
      loading = _useRequest.loading,
      lazyService = _useRequest.lazyService;

  if (data) {
    console.log('请求的数据:', JSON.stringify(data, null, 2));
  }

  return /*#__PURE__*/_jsxs("section", {
    children: [/*#__PURE__*/_jsx(Button, {
      onClick: function onClick() {
        return lazyService();
      },
      children: "\u70B9\u51FB\u8BF7\u6C42\u6570\u636E"
    }), /*#__PURE__*/_jsxs("main", {
      children: ["\u8BF7\u6C42\u7ED3\u679C\uFF1A", /*#__PURE__*/_jsx("code", {
        children: loading ? 'loading ...' : JSON.stringify(data, null, 2)
      })]
    })]
  });
};

export default RequestHookDemo;