var _excluded = ["formItemProps"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import { FormItemsBuilder, RenderType } from 'art-antd-react';
import { Button, Col, Form, Input, Row, Space } from 'antd'; //  安裝了 art-antd-react 以后 antd 直接导出的 类型或组件 可以直接从 art-antd-react 中导出
// import { FormItemsBuilder, FormItemConfig, RenderType, Button, Col, Form, Input, Row, SelectProps, Space, TimeRangePickerProps } from 'art-antd-react';

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";

var Demo3 = function Demo3() {
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
    itemTitle: /*#__PURE__*/_jsx("div", {
      children: "itemTitle \u4E00\u822C\u653E\u5728label\u524D\u52A0\u4EE5\u8BF4\u660E"
    }),
    formItemProps: {
      // 这里可以 放 Form.Item 的 所有 props，你懂的！
      name: 'label1',
      label: /*#__PURE__*/_jsx("div", {
        children: "label1"
      }),
      colon: true,
      // 显示 Form.Item 后边的冒号
      dependencies: ['label2'],
      extra: /*#__PURE__*/_jsx("div", {
        children: "\u989D\u5916\u7684\u4FE1\u606F"
      }),
      tooltip: 'demo3',
      rules: [{
        required: true,
        message: '不能为空'
      }]
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
  }, {
    // 当 使用了 renderType 等于 CustomItemChildren 的时候，定义 formItemChildProps 就不管用了，只需要 使用 customItemChild 写 正常的标签即可
    renderType: RenderType.CustomItemChildren,
    key: 'CustomItemChildren',
    // itemColProps 的优先级 大于 colProps 的优先级
    itemColProps: {
      span: 24
    },
    formItemProps: {
      label: 'label4'
    },
    customItemChildren: /*#__PURE__*/_jsx(Form.List, {
      name: "sights",
      children: function children(fields, _ref) {
        var add = _ref.add,
            remove = _ref.remove;
        return /*#__PURE__*/_jsxs(_Fragment, {
          children: [fields.map(function (field) {
            return /*#__PURE__*/_jsxs(Space, {
              align: "baseline",
              style: {
                marginRight: 10
              },
              children: [/*#__PURE__*/_jsx(Form.Item, _objectSpread(_objectSpread({}, field), {}, {
                label: "Price",
                name: [field.name, 'price'],
                rules: [{
                  required: true,
                  message: '价格不能为空'
                }],
                children: /*#__PURE__*/_jsx(Input, {})
              })), /*#__PURE__*/_jsx(Button, {
                onClick: function onClick() {
                  return remove(field.name);
                },
                type: "primary",
                danger: true,
                children: "\u79FB\u9664"
              })]
            }, field.key);
          }), /*#__PURE__*/_jsx(Form.Item, {
            children: /*#__PURE__*/_jsx(Button, {
              type: "dashed",
              onClick: function onClick() {
                return add();
              },
              block: true,
              children: "\u65B0\u589E\u9879"
            })
          })]
        });
      }
    })
  }].map(function (_ref2) {
    var formItemProps = _ref2.formItemProps,
        rest = _objectWithoutProperties(_ref2, _excluded);

    return _objectSpread(_objectSpread({}, rest), {}, {
      formItemProps: _objectSpread({
        labelCol: {
          span: 24
        },
        wrapperCol: {
          span: 24
        }
      }, formItemProps)
    });
  });
  return /*#__PURE__*/_jsxs(Form, {
    form: form,
    onFinish: function onFinish(value) {
      console.log('demo3 values: ', value);
    },
    children: [/*#__PURE__*/_jsx(Row, {
      gutter: 16,
      children: /*#__PURE__*/_jsx(FormItemsBuilder, {
        colProps: {
          span: 24
        },
        formItemsConfig: group1FormItems
      })
    }), /*#__PURE__*/_jsx(Col, {
      span: 6,
      children: /*#__PURE__*/_jsx(Button, {
        type: "primary",
        htmlType: "submit",
        children: "\u63D0\u4EA4"
      })
    })]
  });
};

export default Demo3;