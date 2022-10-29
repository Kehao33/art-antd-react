### 更改日志记录

> 说明： 在 1.8.5 之前该 库 均不是稳定版本，因此在 1.0.0 版本之前均可以无破坏性升级到 1.8.5 版本，如果后边有破坏性的改变该 更改日志将会使用文字说明（会尽量避免破坏性的改变）

#### version 1.8.6

- 新增 MutModal 组件，这个组件可以帮我们自动 loading 保存按钮，避免我们重复性的对每个 modal 在进行表单新增或更新的时候进行 loading 处理,MutModal 的 children 只能是 Form 表单组件

#### version 1.8.7

- 将 MutModal 改成了 FormModal，即 表单弹框
- 升级 antd, 紧跟 antd 的升级，咱不掉队!
- useConfigListPage 新增一个 formaResult， 目的是为了解决 分页 和 渲染数据，避免请求的后端接口不是标准的渲染数据
