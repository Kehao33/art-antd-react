import { Button, message, Space, Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React, { useRef } from 'react';
import { FormItemConfig, RenderType, useConfigListPage } from 'art-antd-react';
// 这里的请求和累心可以来自于你的项目
import { getData, MockData } from '../../../mock';

const Demo1 = () => {
  // 记录 useConfigListPage 抛出来的 queryList，在操作栏操作后好重新查询表格数据
  const managerRef = useRef<Record<string, any>>({});

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
          {['delete', '详情', '其他操作'].map((act) => (
            <Button
              key={act}
              type="link"
              onClick={() => {
                console.log(`you click add ${act}`);
                if ('delete' === act) {
                  message.success('删除成功，然后重新请求数据');
                  managerRef.current.queryList({ 请求的参数: 12 });
                }
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

  const { listContainer, queryList } = useConfigListPage({
    queryListService: getData,
    formItemsConfig,
    rowProps: { gutter: 8 },
    colProps: { span: 8 },
    tableProps: {
      columns,
      scroll: { x: true },
      rowKey: 'id',
      // 分页配置，不需要就不用配置，你懂的
      pagination: {
        onChange(page, pageSize) {
          console.log(`change pagination: pageNo = ${page}, pageSize = ${pageSize}`);
        },
      },
    },
  });

  managerRef.current = {
    queryList,
  };

  return listContainer; // 这便是渲染的列表页
};

export default Demo1;
