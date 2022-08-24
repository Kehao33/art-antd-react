---
nav:
  title: useRequest
  path: /hooks
---

## useRequest

请求 hooks

减去频繁的 setLoading, setData, setError 的操作, 请求 hooks

## 何时使用

常见的 React 项目网络请求场景, loading、error、lazy 请求，格式化返回的数据

## 代码演示

### 基本使用

<code src="../../src/demos/UseRequestDemo1.tsx"  title="简单的使用">

### Result

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| data | request 返回的数据 | `TData` \| `undefined` |
| error | request 抛出的异常 | `Error` \| `undefined` |
| loading | request 是否正在执行 | `boolean` |
| params | lazyService([1,2,3]),向 查询方法传递参数 | `Params` |
| lazyService | <ul><li> 手动触发 request 执行，可传参数</li><li>异常自动处理，通过 `onError` 反馈</li></ul> | `(params: Params) => void` |

### Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| lazy | <ul><li> 默认 `false`。 即在初始化时自动执行 service。</li><li>如果设置为 `true`，则需要手动调用 `lazyService` 触发执行。 </li></ul> | `boolean` | `false` |
| defaulParams | 首次默认执行时，传递给 request 的参数 | `Params` | - |
| onSuccess | request resolve 时触发 | `(data: TData, params: Params) => void` | - |
| onError | request reject 时触发 | `(e: Error, params: Params) => void` | - |
| formaResult | 对请求到的数据做 format 操作 | `formaResult?: (res: any) => Res` | - |
