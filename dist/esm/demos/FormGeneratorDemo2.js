var _excluded = ["key", "name"],
    _excluded2 = ["formItemChildProps", "formItemProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import { Button, Form, Input, Space } from 'antd';
import { FormGenerator, RenderType } from 'art-antd-react'; //  安裝了 art-antd-react 以后 antd 直接导出的 类型或组件 可以直接从 art-antd-react 中导出
// import { FormItemConfig, FormGenerator, RenderType, Button, Form, Input, SelectProps, Space, TimeRangePickerProps } from 'art-antd-react';

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";

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
  var formItemsConfig = [{
    renderType: RenderType.Switch,
    itemColProps: {
      span: 4
    },
    formItemProps: {
      // resolve warning
      valuePropName: 'checked',
      name: 'label5',
      label: 'label5'
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
      label: 'label8'
    },
    customItemChildren: /*#__PURE__*/_jsx(Form.List, {
      name: "label8",
      children: function children(fields, _ref) {
        var add = _ref.add,
            remove = _ref.remove;
        return /*#__PURE__*/_jsxs(_Fragment, {
          children: [fields.map(function (_ref2) {
            var key = _ref2.key,
                name = _ref2.name,
                restField = _objectWithoutProperties(_ref2, _excluded);

            return /*#__PURE__*/_jsxs(Space, {
              style: {
                display: 'flex',
                marginBottom: 8
              },
              align: "baseline",
              children: [/*#__PURE__*/_jsx(Form.Item, _objectSpread(_objectSpread({}, restField), {}, {
                name: [name, 'first'],
                rules: [{
                  required: true,
                  message: 'Missing first name'
                }],
                children: /*#__PURE__*/_jsx(Input, {
                  placeholder: "First Name"
                })
              })), /*#__PURE__*/_jsx(Button, {
                type: "link",
                onClick: function onClick() {
                  return remove(name);
                },
                children: "\u5220\u9664"
              })]
            }, key);
          }), /*#__PURE__*/_jsx(Form.Item, {
            children: /*#__PURE__*/_jsx(Button, {
              type: "dashed",
              onClick: function onClick() {
                return add();
              },
              children: "+ Add field"
            })
          })]
        });
      }
    })
  }, {
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
      onChange: function onChange(v) {
        console.log('v', v);
      } // 当需要提示或者静态检查时推荐使用 ts 的 as 断言

    }
  }].map(function (_ref3) {
    var formItemChildProps = _ref3.formItemChildProps,
        formItemProps = _ref3.formItemProps,
        rest = _objectWithoutProperties(_ref3, _excluded2);

    return _objectSpread(_objectSpread({}, rest), {}, {
      formItemProps: _objectSpread(_objectSpread({}, formItemProps), {}, {
        wrapperCol: {
          span: 24
        }
      }),
      formItemChildProps: _objectSpread(_objectSpread({}, formItemChildProps || {}), {}, {
        style: {
          width: '100%'
        }
      })
    });
  });
  return /*#__PURE__*/_jsx(FormGenerator, {
    form: form,
    showSubmit: true,
    onFinish: function onFinish(v) {
      console.log('Formgenerator demo2 values: ', v);
    },
    colProps: {
      span: 8
    },
    rowProps: {
      gutter: 20
    },
    showExpend: true,
    formItemsConfig: formItemsConfig,
    actionColProps: {
      span: 24
    },
    actionBar: /*#__PURE__*/_jsx(Button, {
      type: "primary",
      onClick: function onClick() {
        return form.submit();
      },
      children: "\u4FDD\u5B58"
    })
  });
};

export default Demo2;