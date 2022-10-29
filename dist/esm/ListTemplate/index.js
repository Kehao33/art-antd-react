function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { Card, Space, Table } from 'antd';
import { FormGenerator } from "../FormGenerator";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var ListTemplate = function ListTemplate(_ref) {
  var tableProps = _ref.tableProps,
      searchBarProps = _ref.searchBarProps,
      searchCardProps = _ref.searchCardProps,
      tableCardProps = _ref.tableCardProps,
      spaceProps = _ref.spaceProps;

  var wrapConfig = _objectSpread({
    direction: 'vertical',
    style: {
      width: '100%'
    }
  }, spaceProps || {});

  var searchConfig = _objectSpread({
    showSubmit: true,
    showRest: true
  }, searchBarProps || {
    formItemsConfig: []
  });

  var tableCardConfig = _objectSpread({
    style: {
      marginTop: 16
    }
  }, tableCardProps);

  return /*#__PURE__*/_jsxs(Space, _objectSpread(_objectSpread({}, wrapConfig), {}, {
    children: [/*#__PURE__*/_jsx(Card, _objectSpread(_objectSpread({}, searchCardProps || {}), {}, {
      children: /*#__PURE__*/_jsx(FormGenerator, _objectSpread({}, searchConfig))
    })), /*#__PURE__*/_jsx(Card, _objectSpread(_objectSpread({}, tableCardConfig), {}, {
      children: /*#__PURE__*/_jsx(Table, _objectSpread({}, tableProps))
    }))]
  }));
};