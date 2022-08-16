function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import { Button, Card, Col, Form, Row } from 'antd';
import { FormItemsBuilder, RenderType } from 'art-antd-react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var Demo2 = function Demo2() {
  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var mockOptions = [{
    label: 'mock1',
    value: 'mock1'
  }, {
    label: 'mock2',
    value: 'mock2'
  }];
  var group1FormItems = [{
    renderType: RenderType.Input,
    key: '1',
    formItemProps: {
      name: 'label1',
      label: 'label1'
    },
    formItemChildProps: {
      placeholder: '请输入名字'
    }
  }, {
    renderType: RenderType.Select,
    key: '2',
    formItemProps: {
      name: 'label2',
      label: 'label2'
    },
    formItemChildProps: {
      placeholder: '请选择',
      options: mockOptions
    }
  }, {
    renderType: RenderType.Slider,
    key: '3',
    formItemProps: {
      name: 'label3',
      label: 'label3'
    },
    formItemChildProps: {
      // 类名 style 等都可以直接写成 key-value 的形式
      style: {
        width: '100%'
      } // 当需要提示或者静态检查时推荐使用 ts 的 as 断言

    }
  }, {
    renderType: RenderType.TimeRangePicker,
    key: '4',
    // itemColProps 的优先级 大于 colProps 的优先级
    itemColProps: {
      span: 24
    },
    formItemProps: {
      name: 'label4',
      label: 'label4'
    },
    formItemChildProps: {
      // 类名 style 等都可以直接写成 key-value 的形式
      style: {
        width: '100%'
      },
      onChange: function onChange(v) {
        console.log('v', v);
      } // 当需要提示或者静态检查时推荐使用 ts 的 as 断言

    }
  }];
  var group2FormItems = [{
    renderType: RenderType.CheckboxGroup,
    formItemProps: {
      name: 'label6',
      label: 'label6'
    },
    formItemChildProps: {
      options: mockOptions
    }
  }, {
    renderType: RenderType.RadioGroup,
    itemColProps: {
      span: 10
    },
    formItemProps: {
      name: 'label7',
      label: 'label7',
      wrapperCol: {
        span: 24
      }
    },
    formItemChildProps: {
      // 类名 style 等都可以直接写成 key-value 的形式
      style: {
        width: '100%'
      },
      options: mockOptions
    }
  }, {
    // 使用CustomItemChildren 可以自定义 Form.Item 的 children
    renderType: RenderType.CustomItemChildren,
    itemColProps: {
      span: 24
    },
    formItemProps: {
      name: 'label8',
      label: 'label8',
      wrapperCol: {
        span: 24
      }
    },
    customItemChildren: /*#__PURE__*/_jsx("div", {
      children: "\u4F7F\u7528RenderType.CustomItemChildren\u540E\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u968F\u610F\u5B9A\u4E49\uFF0C\u9650\u5236\u4F4F\u7684\u53EA\u6709\u4F60\u7684\u60F3\u8C61\u529B!"
    })
  }];
  var groupFormItems = [{
    title: 'group1',
    itemsConfig: group1FormItems
  }, {
    title: 'group2',
    itemsConfig: group2FormItems
  }];
  return /*#__PURE__*/_jsxs(Form, {
    form: form,
    onFinish: function onFinish(value) {
      console.log('demo2 values: ', value);
    },
    children: [groupFormItems.map(function (_ref) {
      var title = _ref.title,
          itemsConfig = _ref.itemsConfig;
      return /*#__PURE__*/_jsx(Card, {
        title: title,
        style: {
          margin: 16
        },
        children: /*#__PURE__*/_jsx(Row, {
          gutter: 16,
          children: /*#__PURE__*/_jsx(FormItemsBuilder, {
            colProps: {
              span: 8
            },
            formItemsConfig: itemsConfig
          })
        })
      }, title);
    }), /*#__PURE__*/_jsx(Col, {
      span: 6,
      push: 1,
      children: /*#__PURE__*/_jsx(Button, {
        type: "primary",
        htmlType: "submit",
        children: "\u63D0\u4EA4"
      })
    })]
  });
};

export default Demo2;