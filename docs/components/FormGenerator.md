---
nav:
  title: FormGenerator
  path: /components
---

## FormGenerator 表单生成器

## 何时使用

FormGenerator 的目的是使用配置化的思想来帮助我们快速的生成 Form.Item 和其 Children 的标签，但建议只有必须要把 Form.Item 分组之类的场景时才使用该组件,如 [demo2](/components/form-items-builder#自定义布局和其他标签的使用)，否则建议使用 [FormGenerator](/components/form-generator) ,如果要单独使用则和 [Form](https://ant-design.gitee.io/components/form-cn/) 组件搭配使用

## 代码演示

### 基本使用

 <code src="../../src/demos/FormGeneratorDemo1.tsx"  title="一个配置化的搜索 bar">

### 自定义表单项的 col 布局

 <code src="../../src/demos/FormGeneratorDemo2.tsx"  title="自定义表单">

## API
说明，FormGerator 的所有 API/props 继承自 antd [Form](https://ant-design.gitee.io/components/form-cn/), 故除以下的props外，其他的Form props 均可直接透传给 FormGenrator
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| colProps | 定义每一列的布局,同 antd [ColProps](https://ant-design.gitee.io/components/grid-cn/#Col) | [ColProps](https://ant-design.gitee.io/components/grid-cn/#Col)| -|
| rowProps | 定义行的布局, 同 antd [RowProps](https://ant-design.gitee.io/components/grid-cn/#Row) | [RowProps](https://ant-design.gitee.io/components/grid-cn/#Row) | - |
| submitBtnProps | 定义提交按钮的配置, 同 antd [ButtonProps](https://ant-design.gitee.io/components/button-cn/#API) | [ButtonProps](https://ant-design.gitee.io/components/button-cn/#API) | - |
| restBtnProps | 定义重置按钮的配置, 同 antd [ButtonProps](https://ant-design.gitee.io/components/button-cn/#API) | [ButtonProps](https://ant-design.gitee.io/components/button-cn/#API) | - |
| showExpend | 是否展示收缩功能 | boolean | true|
| showSubmit | 是否展示提交功能| boolean | true|
| showRest | 是否展示重置功能 | boolean | true|
| actionBar | 自定义操作功能 | React.ReactNode|-|
| formItemsConfig | formItems 的配置,查看[FormItemConfig Api](/components/form-items-builder#formitemconfig-api)| [FormItemConfig](/components/form-items-builder#formitemconfig-api)[]|-|
| foldNumber | 收起的时候展示多少个表单项|number|2|
|flodNode | 收起的描述 | React.ReactNode | '收起'|
|unfoldNode | 展开的描述| React.ReactNode| '展开'|
| restNode | 重置的描述 | React.ReactNode | '重置'|
|submitNode| 提交的描述 | React.ReactNode | '提交'|
|fold | 是否收缩 | boolean | false|
| onRest | 点击充值后的操作 | ()=> void|-|
| actionColProps | 操作栏的的 col 布局， 和 antd 的 Col API 相同，优先级高于 colProps,同 antd [ColProps](https://ant-design.gitee.io/components/grid-cn/#Col) |[ColProps](https://ant-design.gitee.io/components/grid-cn/#Col)| -|
