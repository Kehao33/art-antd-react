# art-antd-react

### 基于 [Ant Design](https://ant-design.gitee.io/components/overview-cn/) 开发的组件，旨在为了更快更高效更快乐的做一个前端开发艺术家

### Description

当前可供用的组件

- FormItemsBuilder 表单项构建器，快速生成表单项
- FormGenerator 表单生成器，在表单项构建构造器的基础上封装了 提交，重置，折叠等功能
- DetailPresent 详情呈现，快速的展示出想展示的信息
- antd 的所有组件均可从 本组件中导出

#### 放眼未来

- 列表配置页 hooks (支持搜索，table 展示，自动 loading)
- 表单弹框 hooks （提交时 loading，提交后请求数据,成功则关闭 modal，否则弹框仍然打开）

#### 官网 & 仓库地址

Gitee：

- [art-antd-react gitee 官网](https://quankehao.gitee.io/art-antd-react) 【国内的访问此链接较快】

- [art-antd-react repository 地址](https://gitee.com/quankehao/art-antd-react/pages)

github:

- [art-antd-react gitee 官网](https://kehao33.github.io/docs-dist/)

- [art-antd-react GitHub repository 地址](https://github.com/Kehao33/art-antd-react)

### Getting Started

```shell
npm i art-antd-react
# or
yarn add art-antd-react
# yet
pnpm i art-antd-react
```

```typescript
// xxx other import
import { FormItemsBuilder } from 'art-antd-react';

const Demo1 = () => {
  const [form] = Form.useForm();

  const mockOptions = [
    {
      label: 'mock1',
      value: 'mock1',
    },
    {
      label: 'mock2',
      value: 'mock2',
    },
    {
      label: 'mock3',
      value: 'mock3',
    },
  ];

  const formItemsConfig: FormItemConfig[] = [
    {
      renderType: RenderType.Input,
      formItemProps: {
        name: 'name',
        label: '姓名',
      },
      formItemChildProps: {
        placeholder: '请输入名字',
      } as InputProps,
    },
    {
      renderType: RenderType.Select,
      formItemProps: {
        name: 'hobby',
        label: '爱好',
      },
      formItemChildProps: {
        placeholder: '请选择',
        options: mockOptions,
      } as SelectProps,
    },
    {
      renderType: RenderType.InputNumber,
      formItemProps: {
        name: 'number',
        label: '年龄',
      },
      formItemChildProps: {
        placeholder: '请输入数字',
        // 类名 style 等都可以直接写成 key-value 的形式
        style: { width: '100%' },
        // 当需要提示或者静态检查时推荐使用 ts 的 as 断言
      } as InputNumberProps,
    },
  ];
  return (
    <Form
      form={form}
      onFinish={(value: Record<string, unknown>) => {
        console.log('demo1 values: ', value);
      }}
    >
      <Row gutter={18}>
        {/* FormItemsBuilder 自带 Col 布局 */}
        <FormItemsBuilder colProps={{ span: 6 }} formItemsConfig={formItemsConfig} />
        <Col span={6}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Demo1;
```

### 说明

由于 github 的静态页面布置 需要放在 docs 部署才能生效（或者 root 下放一个 index.(md|html) 文件，因此在 yarn docs:build 后需要将 docs-dist 的文件拷贝到 docs/ 文件夹中(这个后边再看看咋搞)
