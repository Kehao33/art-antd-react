import { Button, message, Space, Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';
import { FormItemConfig, ListTemplate, useRequest, RenderType } from 'art-antd-react';
import { getData, MockData } from '../../mock';

const Demo1 = () => {
  const columns: ColumnsType<MockData> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
    },
    {
      title: 'Hobby',
      dataIndex: 'hobby',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'BestFirend',
      dataIndex: 'bestFirend',
      render: (bestFirend) => {
        return <Tag color="success">{bestFirend?.name || '-'}</Tag>;
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          {['删除', '详情', '其他操作'].map((act) => (
            <Button
              key={act}
              type="link"
              onClick={() => {
                console.log(`you click add ${act}`);
              }}
            >
              {act}
            </Button>
          ))}
        </Space>
      ),
    },
  ];

  // 更多 搜索表单配置 请看 FormItemsBuilder 的 API
  const formItemsConfig: FormItemConfig[] = Array(11)
    .fill({})
    .map((_, index) => ({
      renderType: RenderType.Input,
      formItemProps: {
        name: `label${index}`,
        label: `label${index}`,
      },
      formItemChildProps: {
        placeholder: `please input label${index}`,
      },
    }))
    .map(({ formItemChildProps, ...rest }) => ({
      ...rest,
      formItemChildProps: {
        style: { width: '100%' },
        ...formItemChildProps,
      },
    }));

  const { data: dataSource, loading } = useRequest(getData, {
    onError(e) {
      message.error(e?.message || '请求出错');
    },
  });

  return (
    <ListTemplate
      // ListTemplate 的 属性继承于 Space 所以 size 就是 来自于继承的 SpaceProps
      size={16}
      // table 的配置
      tableProps={{
        loading,
        dataSource,
        columns,
        scroll: { x: true },
        rowKey: 'id',
        // 分页配置，不需要就不用配置，你懂的
        pagination: {
          onChange(page, pageSize) {
            console.log(`change pagination: pageNo = ${page}, pageSize = ${pageSize}`);
          },
        },
      }}
      // 包裹 Table 的 Card 的配置
      tableCardProps={{
        title: '列表数据',
        extra: (
          <Button
            type="primary"
            onClick={() => {
              console.log('you click add btn');
            }}
          >
            Add
          </Button>
        ),
      }}
      // 搜索表单的配置项（这里其实就是 FormGenerator 的配置
      searchBarProps={{
        formItemsConfig,
        rowProps: { gutter: 8 },
        colProps: { span: 8 },
        showSubmit: true, // 默认展示的
        showRest: true, // 默认展示的
        onFinish: (v) => {
          console.log('点击了提交', v);
        },
        onReset: () => {
          console.log('出发了重置');
        },
      }}
      // 包裹 搜索表单的 配置
      searchCardProps={{
        // 任意的 cardProps 属性配置
        style: { marginBottom: 2 },
      }}
    />
  );
};

export default Demo1;
