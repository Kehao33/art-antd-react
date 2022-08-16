function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import { Button, Form, Input, message, Modal } from 'antd';
import { RenderType, useFormModal } from 'art-antd-react'; //  安裝了 art-antd-react 以后 antd 直接导出的 类型或组件 可以直接从 art-antd-react 中导出
// import { FormItemConfig, RenderType, useFormModal, Button, message } from 'art-antd-react';

import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var Demo1 = function Demo1() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var formItemsConfig = [{
    renderType: RenderType.Input,
    formItemProps: {
      label: 'Name',
      name: 'name'
    }
  }, {
    renderType: RenderType.InputNumber,
    formItemProps: {
      label: 'Age',
      name: 'age'
    },
    formItemChildProps: {
      placeholder: '请输入年龄'
    }
  }, {
    renderType: RenderType.Select,
    formItemProps: {
      label: 'Gender',
      name: 'gender'
    },
    formItemChildProps: {
      options: [{
        label: '男',
        value: '男'
      }, {
        label: '女',
        value: '女'
      }]
    }
  }, {
    renderType: RenderType.Input,
    formItemProps: {
      label: 'Hobby',
      name: 'hobby'
    }
  }, {
    renderType: RenderType.Input,
    formItemProps: {
      label: 'Description',
      name: 'description'
    }
  }, {
    renderType: RenderType.Input,
    formItemProps: {
      label: 'BestFirend',
      name: 'bestFirend'
    }
  }];

  var _useFormModal = useFormModal({
    visible: visible,
    // 决定了是否出现弹框
    rowProps: {
      gutter: 8
    },
    colProps: {
      span: 24
    },
    formItemsConfig: [],
    title: '编辑个人信息',
    serviceFn: function serviceFn() {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve('请求服务端模拟');
        }, 3000);
      });
    },
    onSuccess: function onSuccess() {
      message.success('操作成功');
      setVisible(false);
      console.log('请求之后你可以做任何行为操作');
    },
    onCancel: function onCancel() {
      message.success('取消编辑');
      setVisible(false);
    },
    formatSubmitValue: function formatSubmitValue(values) {
      console.log('你可以对要提交的数据进行处理');
      return _objectSpread(_objectSpread({}, values), {}, {
        other: '12332'
      });
    }
  }),
      formModal = _useFormModal.formModal,
      formInstance = _useFormModal.formInstance;

  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Button, {
      onClick: function onClick() {
        console.log(':formInstance: ', formInstance);
        formInstance.setFieldsValue({
          name: 'jakequc',
          age: 124
        });
        setVisible(true);
      },
      children: "\u7F16\u8F91\u4FE1\u606F"
    }), /*#__PURE__*/_jsx(Modal, {
      visible: visible,
      children: /*#__PURE__*/_jsx(Form, {
        children: /*#__PURE__*/_jsx(Form.Item, {
          name: "name",
          children: /*#__PURE__*/_jsx(Input, {})
        })
      })
    })]
  });
};

export default Demo1;