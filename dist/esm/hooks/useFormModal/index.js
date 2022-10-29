var _excluded = ["form", "colProps", "rowProps", "formItemsConfig", "serviceFn", "formatSubmitValue", "onSuccess", "onError", "onCancel"];

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

import { Form, message, Modal } from 'antd';
import React, { useMemo } from 'react';
import { FormGenerator } from "../../FormGenerator";
import { useRequest } from "../useRequest";
import { jsx as _jsx } from "react/jsx-runtime";
export var useFormModal = function useFormModal(_ref) {
  var form = _ref.form,
      colProps = _ref.colProps,
      rowProps = _ref.rowProps,
      formItemsConfig = _ref.formItemsConfig,
      serviceFn = _ref.serviceFn,
      formatSubmitValue = _ref.formatSubmitValue,
      _onSuccess = _ref.onSuccess,
      _onError = _ref.onError,
      onCancel = _ref.onCancel,
      restModalProps = _objectWithoutProperties(_ref, _excluded);

  var _Form$useForm = Form.useForm(form),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      formInstance = _Form$useForm2[0];

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

  var onFinish = function onFinish(formValues) {
    lazyService(formatSubmitValue ? formatSubmitValue(formValues) : formValues);
  };

  var handleCancel = function handleCancel() {
    onCancel === null || onCancel === void 0 ? void 0 : onCancel();
  };

  var formModal = useMemo(function () {
    return /*#__PURE__*/_jsx(Modal, _objectSpread(_objectSpread({
      onCancel: handleCancel,
      onOk: function onOk() {
        return formInstance.submit();
      },
      confirmLoading: loading
    }, restModalProps), {}, {
      children: /*#__PURE__*/_jsx(FormGenerator, {
        form: formInstance,
        colProps: colProps,
        rowProps: rowProps,
        onFinish: onFinish,
        formItemsConfig: formItemsConfig
      })
    }));
  }, [formInstance, colProps, rowProps, formItemsConfig]);
  return {
    formModal: formModal,
    formInstance: formInstance
  };
};