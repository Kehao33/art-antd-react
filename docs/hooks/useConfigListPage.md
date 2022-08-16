---
nav:
  title: useConfigListPage
  path: /hooks
---

## useConfigListPage

列表页配置

使得列表页面配置化操作，自动处理 loading、模板化列表页面，配置即可生成页面

## 何时使用

常见的 React 项目列表页面的配置，操作，使得渲染与逻辑分离

## 代码演示

### 基本使用

<code src="../../src/demos/UseConfigListPageDemo1.tsx"  title="使用demo">

### Result 返回的结果

| 参数          | 说明                   | 类型                       | 默认值 |
| ------------- | ---------------------- | -------------------------- | ------ |
| dataSource    | 查询到的列表数据       | `Res` \| -                 | -      |
| error         | 请求列表数据抛出的异常 | `Error` \| `undefined`     | -      |
| loading       | request 是否正在执行   | `boolean`                  | -      |
| queryList     | 再次请求的函数         | `(params: Params) => void` | -      |
| listContainer | 列表页渲染 UI          | React.ReactElement         | -      |

### Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| queryListService | 请求列表的方法 | `RequestService<Param, Res>` | - |
| formatSubmitValue | 查询列表时对搜索表单的数据进行格式化，没有此参数时不进行格式化操作 | `(formValue: Param) => unknown` | - |
| formItemsConfig | 搜索表单项的配置 | [FormItemsConfig API](/components/form-items-builder#formitemconfig-api)[] | [] |
| lazy | <ul><li> 默认 `false`。 即在初始化时自动执行 service。</li><li>如果设置为 `true`，则需要手动调用 `lazyService` 触发执行。 </li></ul> | `boolean` | `false` |
| defaulParams | 首次默认执行时，传递给 queryListService 的参数 | `Params` | - |
| onSuccess | request resolve 时触发 | `(data: TData, params: Params) => void` | - |
| onError | request reject 时触发 | `(e: Error, params: Params) => void` | - |
| formaResult | 对请求到的数据做 format 操作 | `formaResult?: (res: any) => Res` | - |
| spaceProps | 包裹列表页面 Space 的配置，同 antd 的 [Space API](https://ant-design.gitee.io/components/space-cn/#API) | [SpaceProps](https://ant-design.gitee.io/components/space-cn/#API) | - |
| tableProps | 表格列表的 Table 的配置，同 antd 的 [Table API](https://ant-design.gitee.io/components/table-cn/#API) | [TableProps](https://ant-design.gitee.io/components/table-cn/#API) | - |
| tableCardProps | 包裹表格列表的 Card 的配置，同 antd 的 [Card API](https://ant-design.gitee.io/components/card-cn/#API) | [CardProps](https://ant-design.gitee.io/components/card-cn/#API) | - |
| colProps | 定义每一列的布局,同 antd [ColProps](https://ant-design.gitee.io/components/grid-cn/#Col) | [ColProps](https://ant-design.gitee.io/components/grid-cn/#Col) | - |
| rowProps | 定义行的布局, 同 antd [RowProps](https://ant-design.gitee.io/components/grid-cn/#Row) | [RowProps](https://ant-design.gitee.io/components/grid-cn/#Row) | - |
| actionColProps | 操作栏的的 col 布局， 和 antd 的 Col API 相同，优先级高于 colProps,同 antd [ColProps](https://ant-design.gitee.io/components/grid-cn/#Col) | [ColProps](https://ant-design.gitee.io/components/grid-cn/#Col) | - |
