var _excluded = ["loading", "data", "lazyService"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { message } from 'antd';
import React from 'react';
import { useMemo } from 'react';
import { ListTemplate } from "../../ListTemplate";
import { useRequest } from "../useRequest";
import { jsx as _jsx } from "react/jsx-runtime";
export var useConfigListPage = function useConfigListPage(_ref) {
  var queryListService = _ref.queryListService,
      formatSubmitValue = _ref.formatSubmitValue,
      _onSuccess = _ref.onSuccess,
      _onError = _ref.onError,
      spaceProps = _ref.spaceProps,
      tableProps = _ref.tableProps,
      tableCardProps = _ref.tableCardProps,
      _ref$formItemsConfig = _ref.formItemsConfig,
      formItemsConfig = _ref$formItemsConfig === void 0 ? [] : _ref$formItemsConfig,
      defaulParams = _ref.defaulParams,
      formaResult = _ref.formaResult,
      actionColProps = _ref.actionColProps,
      colProps = _ref.colProps,
      rowProps = _ref.rowProps;

  var _useRequest = useRequest(queryListService, {
    defaulParams: defaulParams,
    onSuccess: function onSuccess(value) {
      _onSuccess === null || _onSuccess === void 0 ? void 0 : _onSuccess(value);
    },
    onError: function onError(error) {
      if (_onError) {
        _onError(error);
      } else {
        message.error('请求列表数据出错');
      }
    },
    formaResult: formaResult
  }),
      loading = _useRequest.loading,
      dataSource = _useRequest.data,
      queryList = _useRequest.lazyService,
      rest = _objectWithoutProperties(_useRequest, _excluded);

  var listContainer = useMemo(function () {
    return /*#__PURE__*/_jsx(ListTemplate, {
      tableProps: _objectSpread(_objectSpread({}, tableProps), {}, {
        loading: loading,
        dataSource: dataSource
      }),
      tableCardProps: tableCardProps,
      spaceProps: spaceProps,
      searchBarProps: {
        onFinish: function onFinish(searchValue) {
          queryList(formatSubmitValue ? formatSubmitValue(searchValue) : searchValue);
        },
        formItemsConfig: formItemsConfig,
        onReset: function onReset() {
          queryList(defaulParams);
        },
        colProps: colProps,
        rowProps: rowProps,
        actionColProps: actionColProps
      }
    });
  }, [spaceProps, tableProps, tableCardProps, formItemsConfig]);
  return _objectSpread(_objectSpread({
    loading: loading,
    dataSource: dataSource,
    queryList: queryList
  }, rest), {}, {
    listContainer: listContainer
  });
};