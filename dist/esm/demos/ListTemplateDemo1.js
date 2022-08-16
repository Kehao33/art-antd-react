var _excluded = ["formItemChildProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { getData } from "./mock";
import { Button, message, Space, Tag } from 'antd';
import { ListTemplate, useRequest, RenderType } from 'art-antd-react'; //  安裝了 art-antd-react 以后 antd 直接导出的 类型或组件 可以直接从 art-antd-react 中导出
// import { FormItemConfig, ListTemplate, useRequest, RenderType, Button, message, Space, Tag } from 'art-antd-react';

import { jsx as _jsx } from "react/jsx-runtime";

var Demo1 = function Demo1() {
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
        children: ['删除', '详情', '其他操作'].map(function (act) {
          return /*#__PURE__*/_jsx(Button, {
            type: "link",
            onClick: function onClick() {
              console.log("you click add ".concat(act));
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

  var _useRequest = useRequest(getData, {
    onError: function onError(e) {
      message.error((e === null || e === void 0 ? void 0 : e.message) || '请求出错');
    }
  }),
      dataSource = _useRequest.data,
      loading = _useRequest.loading;

  return /*#__PURE__*/_jsx(ListTemplate // space 的配置 
  , {
    spaceProps: {
      size: 16
    } // table 的配置
    ,
    tableProps: {
      loading: loading,
      dataSource: dataSource,
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
    } // 包裹 Table 的 Card 的配置
    ,
    tableCardProps: {
      title: '列表数据',
      extra: /*#__PURE__*/_jsx(Button, {
        type: "primary",
        onClick: function onClick() {
          console.log('you click add btn');
        },
        children: "Add"
      })
    } // 搜索表单的配置项（这里其实就是 FormGenerator 的配置
    ,
    searchBarProps: {
      formItemsConfig: formItemsConfig,
      rowProps: {
        gutter: 8
      },
      colProps: {
        span: 8
      },
      showSubmit: true,
      // 默认展示的
      showRest: true,
      // 默认展示的
      onFinish: function onFinish(v) {
        console.log('点击了提交', v);
      },
      onReset: function onReset() {
        console.log('出发了重置');
      }
    } // 包裹 搜索表单的 配置
    ,
    searchCardProps: {
      // 任意的 cardProps 属性配置
      style: {
        marginBottom: 2
      }
    }
  });
};

export default Demo1;