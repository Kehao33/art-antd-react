var _excluded = ["detail", "placeholder", "keyMapLabel", "keyMapItemProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { Descriptions } from 'antd';
import React, { useMemo } from 'react';
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
export var DetailPresent = function DetailPresent(_ref) {
  var detail = _ref.detail,
      placeholder = _ref.placeholder,
      keyMapLabel = _ref.keyMapLabel,
      keyMapItemProps = _ref.keyMapItemProps,
      descriptionProps = _objectWithoutProperties(_ref, _excluded);

  var keys = useMemo(function () {
    return Object.keys(keyMapLabel || {}).filter(function (key) {
      return detail && Object.prototype.hasOwnProperty.call(detail, key);
    });
  }, []);
  return /*#__PURE__*/_jsx(Descriptions, _objectSpread(_objectSpread({}, descriptionProps), {}, {
    children: keys.map(function (key) {
      var _detail$key;

      var itemConfig = _objectSpread(_objectSpread({}, (keyMapItemProps === null || keyMapItemProps === void 0 ? void 0 : keyMapItemProps[key]) || {}), {}, {
        label: keyMapLabel[key]
      });

      return keyMapLabel[key] && /*#__PURE__*/_jsx(Descriptions.Item, _objectSpread(_objectSpread({}, itemConfig), {}, {
        children: /*#__PURE__*/_jsx(_Fragment, {
          children: (_detail$key = detail[key]) !== null && _detail$key !== void 0 ? _detail$key : placeholder
        })
      }), key);
    })
  }));
};