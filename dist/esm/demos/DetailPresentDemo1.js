function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { DetailPresent } from 'art-antd-react';
import { jsx as _jsx } from "react/jsx-runtime";

var Demo1 = function Demo1() {
  var responseData = {
    user: '张良',
    age: '88',
    hobby: ['谋略', '兵法', '识人'],
    state: '中国-汉朝',
    sex: '男',
    friend: {
      user: '韩非子'
    }
  };
  var keyMapLabel = {
    user: '姓名',
    age: '年龄',
    sex: '性别',
    state: '国籍',
    hobby: '爱好',
    friend: '朋友'
  };
  return /*#__PURE__*/_jsx(DetailPresent, {
    title: "\u8C0B\u5723\u4FE1\u606F",
    detail: _objectSpread(_objectSpread({}, responseData), {}, {
      friend: responseData.friend.user
    }),
    keyMapLabel: keyMapLabel
  });
};

export default Demo1;