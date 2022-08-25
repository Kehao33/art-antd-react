---
nav:
  title: ListTemplate
  path: /components
---

## ListTemplate 列表模板

这个是一个模板组件，是对 Ant Design 的 Card, Table, 和 FormGenerator(这里用作搜索表单) 的封装

## 何时使用

中后台常见的列表页面操作

## 代码演示

### 基本使用

<code src="../demos/ListTemplateDemo1.tsx"  title="简单的使用">

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| spaceProps | 包裹 列表页面的 Space 配置 | [SpaceProps](https://ant-design.gitee.io/components/space-cn/#API) | - |
| tableProps | Table 的配置项 | [TableProps](https://ant-design.gitee.io/components/table-cn/#Table) | - |
| tableCardProps | 包裹 Table 的 Card 的配置项 | [CardProps](https://ant-design.gitee.io/components/card-cn/#Card) | - |
| searchBarProps | 搜索表单的配置项 | [FormGeneratorProps](/components/form-items-builder#formitemconfig-api) | - |
| searchCardProps | 包裹 搜索表单 的 Card 的配置项 | [CardProps](https://ant-design.gitee.io/components/card-cn/#Card) | - |
