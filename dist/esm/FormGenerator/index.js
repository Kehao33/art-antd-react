var _excluded = ["form", "colProps", "rowProps", "showExpend", "showSubmit", "showRest", "actionBar", "formItemsConfig", "foldNumber", "actionColProps", "foldNode", "unfoldNode", "restNode", "submitNode", "fold", "onReset", "onValuesChange", "submitBtnProps", "resetBtnProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { Form, Row, Col, Button, Space } from 'antd';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FormItemsBuilder } from "../FormItemsBuilder";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var FormGenerator = function FormGenerator(_ref) {
  var form = _ref.form,
      colProps = _ref.colProps,
      rowProps = _ref.rowProps,
      showExpend = _ref.showExpend,
      showSubmit = _ref.showSubmit,
      showRest = _ref.showRest,
      actionBar = _ref.actionBar,
      formItemsConfig = _ref.formItemsConfig,
      _ref$foldNumber = _ref.foldNumber,
      foldNumber = _ref$foldNumber === void 0 ? 2 : _ref$foldNumber,
      actionColProps = _ref.actionColProps,
      _ref$foldNode = _ref.foldNode,
      foldNode = _ref$foldNode === void 0 ? '收起' : _ref$foldNode,
      _ref$unfoldNode = _ref.unfoldNode,
      unfoldNode = _ref$unfoldNode === void 0 ? '展开' : _ref$unfoldNode,
      _ref$restNode = _ref.restNode,
      restNode = _ref$restNode === void 0 ? '重置' : _ref$restNode,
      _ref$submitNode = _ref.submitNode,
      submitNode = _ref$submitNode === void 0 ? '提交' : _ref$submitNode,
      _ref$fold = _ref.fold,
      fold = _ref$fold === void 0 ? false : _ref$fold,
      onReset = _ref.onReset,
      onValuesChange = _ref.onValuesChange,
      submitBtnProps = _ref.submitBtnProps,
      resetBtnProps = _ref.resetBtnProps,
      restFormConfig = _objectWithoutProperties(_ref, _excluded);

  var _Form$useForm = Form.useForm(form),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      formInstance = _Form$useForm2[0];

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      expand = _useState2[0],
      setExpand = _useState2[1];

  var formValueRecord = useRef({});
  useEffect(function () {
    setExpand(!fold);
  }, [fold]);

  var handleReset = function handleReset() {
    formValueRecord.current = {};
    formInstance.resetFields();

    if (onReset) {
      onReset();
    }
  };

  var handleValuesChange = function handleValuesChange(changeValues, allValues) {
    formValueRecord.current = _objectSpread(_objectSpread({}, formValueRecord.current), changeValues || {});

    if (onValuesChange) {
      onValuesChange(changeValues, allValues);
    }
  };

  var formItems = useMemo(function () {
    return expand ? formItemsConfig : formItemsConfig.slice(0, foldNumber);
  }, [foldNumber, formItemsConfig, expand]);
  return /*#__PURE__*/_jsx(Form, _objectSpread(_objectSpread({
    form: formInstance,
    onValuesChange: handleValuesChange
  }, restFormConfig), {}, {
    children: /*#__PURE__*/_jsxs(Row, _objectSpread(_objectSpread({}, rowProps || {}), {}, {
      children: [/*#__PURE__*/_jsx(FormItemsBuilder, {
        formItemsConfig: formItems,
        colProps: colProps || {}
      }), /*#__PURE__*/_jsx(Col, _objectSpread(_objectSpread({}, actionColProps || colProps || {}), {}, {
        children: actionBar || (showExpend || showRest || showSubmit) && /*#__PURE__*/_jsxs(Space, {
          children: [showSubmit && /*#__PURE__*/_jsx(Button, _objectSpread(_objectSpread({
            type: "primary",
            htmlType: "submit"
          }, submitBtnProps || {}), {}, {
            children: submitNode
          })), showRest && /*#__PURE__*/_jsx(Button, _objectSpread(_objectSpread({
            onClick: handleReset
          }, resetBtnProps || {}), {}, {
            children: restNode
          })), showExpend && /*#__PURE__*/_jsx("a", {
            style: {
              fontSize: 12
            },
            onClick: function onClick() {
              setExpand(!expand);
            },
            children: expand ? foldNode : unfoldNode
          })]
        })
      }))]
    }))
  }));
};