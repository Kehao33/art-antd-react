function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import { Button, Col, Form, Row } from 'antd';
import { FormItemsBuilder, RenderType } from 'art-antd-react'; //  安裝了 art-antd-react 以后 antd 直接导出的 类型或组件 可以直接从 art-antd-react 中导出
// import { FormItemsBuilder, FormItemConfig, RenderType,Button, Col, Form, InputNumberProps, InputProps, Row, SelectProps } from 'art-antd-react';

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var Demo1 = function Demo1() {
  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var mockOptions = [{
    label: 'mock1',
    value: 'mock1'
  }, {
    label: 'mock2',
    value: 'mock2'
  }, {
    label: 'mock3',
    value: 'mock3'
  }];
  var formItemsConfig = [{
    renderType: RenderType.Input,
    formItemProps: {
      name: 'name',
      label: '姓名'
    },
    formItemChildProps: {
      placeholder: '请输入名字'
    }
  }, {
    renderType: RenderType.Select,
    formItemProps: {
      name: 'hobby',
      label: '爱好'
    },
    formItemChildProps: {
      placeholder: '请选择',
      options: mockOptions
    }
  }, {
    renderType: RenderType.InputNumber,
    formItemProps: {
      name: 'number',
      label: '年龄'
    },
    formItemChildProps: {
      placeholder: '请输入数字',
      // 类名 style 等都可以直接写成 key-value 的形式
      style: {
        width: '100%'
      } // 当需要提示或者静态检查时推荐使用 ts 的 as 断言

    }
  }];
  return /*#__PURE__*/_jsx(Form, {
    form: form,
    onFinish: function onFinish(value) {
      console.log('demo1 values: ', value);
    },
    children: /*#__PURE__*/_jsxs(Row, {
      gutter: 18,
      children: [/*#__PURE__*/_jsx(FormItemsBuilder, {
        colProps: {
          span: 6
        },
        formItemsConfig: formItemsConfig
      }), /*#__PURE__*/_jsx(Col, {
        span: 6,
        children: /*#__PURE__*/_jsx(Button, {
          type: "primary",
          htmlType: "submit",
          children: "\u63D0\u4EA4"
        })
      })]
    })
  });
};

export default Demo1;