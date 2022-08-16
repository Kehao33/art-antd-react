var _excluded = ["formItemChildProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useRef } from 'react';
import { Button, message, Space, Tag } from 'antd';
import { RenderType, useConfigListPage } from 'art-antd-react'; //  安裝了 art-antd-react 以后 antd 直接导出的 类型或组件 可以直接从 art-antd-react 中导出
// import { FormItemConfig, RenderType, useConfigListPage, Button, message, Space, Tag } from 'art-antd-react';
// 这里的请求和类型来自于你的项目

import { getData } from "./mock";
import { jsx as _jsx } from "react/jsx-runtime";

var Demo1 = function Demo1() {
  // 记录 useConfigListPage 抛出来的 queryList，在操作栏操作后好重新查询表格数据
  var managerRef = useRef({});
  var columns = [{
    title: 'Name',
    dataIndex: 'name'
  }, {
    title: 'Age',
    dataIndex: 'age',
    sorter: function sorter(a, b) {
      return a.age - b.age;
    }
  }, {
    title: 'Gender',
    dataIndex: 'gender'
  }, {
    title: 'Hobby',
    dataIndex: 'hobby'
  }, {
    title: 'Description',
    dataIndex: 'description'
  }, {
    title: 'BestFirend',
    dataIndex: 'bestFirend',
    render: function render(bestFirend) {
      return /*#__PURE__*/_jsx(Tag, {
        color: "success",
        children: (bestFirend === null || bestFirend === void 0 ? void 0 : bestFirend.name) || '-'
      });
    }
  }, {
    title: 'Action',
    key: 'action',
    render: function render() {
      return /*#__PURE__*/_jsx(Space, {
        size: "middle",
        children: ['delete', '详情', '其他操作'].map(function (act) {
          return /*#__PURE__*/_jsx(Button, {
            type: "link",
            onClick: function onClick() {
              console.log("you click add ".concat(act));

              if ('delete' === act) {
                message.success('删除成功，然后重新请求数据');
                managerRef.current.queryList({
                  请求的参数: 12
                });
              }
            },
            children: act
          }, act);
        })
      });
    }
  }]; // 更多 搜索表单配置 请看 FormItemsBuilder 的 API

  var formItemsConfig = Array(11).fill({}).map(function (_, index) {
    return {
      renderType: RenderType.Input,
      formItemProps: {
        name: "label".concat(index),
        label: "label".concat(index)
      },
      formItemChildProps: {
        placeholder: "please input label".concat(index)
      }
    };
  }).map(function (_ref) {
    var formItemChildProps = _ref.formItemChildProps,
        rest = _objectWithoutProperties(_ref, _excluded);

    return _objectSpread(_objectSpread({}, rest), {}, {
      formItemChildProps: _objectSpread({
        style: {
          width: '100%'
        }
      }, formItemChildProps)
    });
  });

  var _useConfigListPage = useConfigListPage({
    queryListService: getData,
    formItemsConfig: formItemsConfig,
    rowProps: {
      gutter: 8
    },
    colProps: {
      span: 8
    },
    tableProps: {
      columns: columns,
      scroll: {
        x: true
      },
      rowKey: 'id',
      // 分页配置，不需要就不用配置，你懂的
      pagination: {
        onChange: function onChange(page, pageSize) {
          console.log("change pagination: pageNo = ".concat(page, ", pageSize = ").concat(pageSize));
        }
      }
    }
  }),
      listContainer = _useConfigListPage.listContainer,
      queryList = _useConfigListPage.queryList;

  managerRef.current = {
    queryList: queryList
  };
  return listContainer; // 这便是渲染的列表页
};

export default Demo1;