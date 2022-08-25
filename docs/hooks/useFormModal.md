---
nav:
  title: useFormModal
  path: /hooks
---

## useFormModal

配置化表单弹框

将 antd 的表单 和 弹框 进行封装，提交的时候自动 loading 完成之后 交由使用者决定是否关闭弹框通过配置化即可解决表单 modal 的情况。

## 何时使用

当 modal 中有表单项操作的时候，提交后自动添加 loading 功能，不用重复的写 Modal 和 Form 表单项

## 代码演示

### 基本使用

<code src="../demos/UseFormModalDemo1.tsx"  title="简单的使用,可能会报错，但是在您的项目中食用">

### Result hook 返回结果

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| formModal | 表单弹框的元素 | React.ReactElement | - |
| formInstance | 当前表单的实例，可以用来重置表单等功能，同 antd 的 Form 的实例 | FormInstance | - |

### Options

说明： 该 hooks 的入参类型继承于 ant design 的 [ModalProps](https://ant-design.gitee.io/components/modal-cn/) 故所有 Modal 的 api 均可透传给 该 hooks 的参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| form | modal 框中的 form 表单实例，可选 |  | formItemsConfig | 搜索表单项的配置 | [FormItemsConfig API](/components/form-items-builder#formitemconfig-api)[] | - |
| colProps | 定义每一列的布局,同 antd [ColProps](https://ant-design.gitee.io/components/grid-cn/#Col) | [ColProps](https://ant-design.gitee.io/components/grid-cn/#Col) | - |
| rowProps | 定义行的布局, 同 antd [RowProps](https://ant-design.gitee.io/components/grid-cn/#Row) | [RowProps](https://ant-design.gitee.io/components/grid-cn/#Row) | - |
| formItemsConfig | modal 框中表单项配置 | ` FormItemConfig[]` | - |
| formatSubmitValue | 表单提交需要对表单数据进行格式化后放入 serviceFn 请求中，如果没有传递则不对表单数据进行格式化 | `(formValue: Value) => unknown` | - |
| serviceFn | 表单提交需要调用的函数，会默认将当前表单的数据作为入参放入该方法中 | ` RequestService<Value, Res>` | - |
| onSuccess | 提交表单成功后需要调用的方法，如果不传递则 默认 提示 `操作成功` | `onSuccess?: (data?: Res) => void;` | - |
| onError | 提交表单报错后需要调用的方法，如果不传递则 默认 提示 `操作失败` | `onSuccess?: (data?: Res) => void;` | - |
| onCancel | 点击取消后需要执行的行为 | `onCancel?: () => void;` | - |
