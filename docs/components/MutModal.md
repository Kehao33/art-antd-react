---
nav:
  title: MutModal
  path: /components
---

## MutModal 列表模板

基于 ant deisgn Modal 进行二次封装的组件，意在解决表单 modal 重复的进行 confirm loading 的情况

## 何时使用

中后台常见的列表页面操作

## 代码演示

 ### 基本使用

<code src="../demos/MutModalDemo1.tsx"  title="简单的使用,展示可能会报错，请直接copy代码在您的项目中食用"> 

## API
说明，MutModal 是基于 ant design 的 Modal 进行二次封装的，所以除了如下 API 外，antd design 的 [Modal API](https://ant-design.gitee.io/components/modal-cn/#API) 均可以透传给 MutModal


| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|serviceFn| 表单的交互方法 | RequestService<Value, Res> | - |
|formatSubmitValue| 表单提交前对入参的格式化方法 |(formValue: Value) => unknown | - |
|onSuccess| serviceFn 交互成功后的操作 | RonSuccess?: (data?: Res) => void; | - |
|onError| serviceFn 交互失败后的操作 |(e?: Error) => void | - |
|onCancel| modal 对应的 onCancel 方法 |() => void | - |
|form| moda 对应的表单实例 |FormInstance | - |
