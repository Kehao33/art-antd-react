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
    other: null,
    friend: {
      user: '韩非子'
    },
    sketch: '张良（？—前186年），字子房，一说颍川城父（今河南郏县）人'
  };
  var keyMapLabel = {
    user: '姓名',
    age: '年龄',
    sex: '性别',
    sketch: '来自百度百科介绍',
    state: '国籍',
    hobby: '爱好',
    friend: '朋友',
    other: '其他'
  };
  return /*#__PURE__*/_jsx(DetailPresent, {
    title: "\u8C0B\u5723\u4FE1\u606F",
    detail: _objectSpread(_objectSpread({}, responseData), {}, {
      friend: responseData.friend.user,
      hobby: responseData.hobby.join('、'),
      sketch: /*#__PURE__*/_jsx("a", {
        target: "_blank",
        rel: "noreferrer",
        href: "https://baike.baidu.com/item/%E5%BC%A0%E8%89%AF/6658?fr=aladdin",
        children: responseData.sketch
      })
    }) // 值为空的时候的占位符
    ,
    placeholder: "-",
    keyMapLabel: keyMapLabel // 自定义每一项单独的配置
    ,
    keyMapItemProps: {
      sketch: {
        labelStyle: {
          color: '#f00'
        },
        // 独占3列
        span: 3
      }
    }
  });
};

export default Demo1;