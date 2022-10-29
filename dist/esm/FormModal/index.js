var _excluded = ["serviceFn", "formatSubmitValue", "onSuccess", "onError", "onCancel", "form", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { message, Modal } from 'antd';
import { useRequest } from "../hooks/useRequest";
import { jsx as _jsx } from "react/jsx-runtime";
export var FormModal = function FormModal(_ref) {
  var serviceFn = _ref.serviceFn,
      formatSubmitValue = _ref.formatSubmitValue,
      _onSuccess = _ref.onSuccess,
      _onError = _ref.onError,
      onCancel = _ref.onCancel,
      form = _ref.form,
      children = _ref.children,
      restModalProps = _objectWithoutProperties(_ref, _excluded);

  var _useRequest = useRequest(serviceFn, {
    lazy: true,
    onSuccess: function onSuccess(data) {
      if (_onSuccess) {
        _onSuccess(data);
      } else {
        message.success('操作成功'); // 成功后调用 取消操作

        onCancel === null || onCancel === void 0 ? void 0 : onCancel();
      }
    },
    onError: function onError(error) {
      if (_onError) {
        _onError(error);
      } else {
        message.error('操作失败');
      }
    }
  }),
      lazyService = _useRequest.lazyService,
      loading = _useRequest.loading;

  var handleCancel = function handleCancel() {
    onCancel === null || onCancel === void 0 ? void 0 : onCancel();
  };

  return /*#__PURE__*/_jsx(Modal, _objectSpread(_objectSpread({
    onCancel: handleCancel,
    onOk: function onOk() {
      return form.validateFields().then(function (res) {
        console.log('result: ', res);
        lazyService(formatSubmitValue ? formatSubmitValue(res) : res);
      });
    },
    confirmLoading: loading
  }, restModalProps), {}, {
    children: children
  }));
};