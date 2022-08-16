import { Descriptions, DescriptionsProps } from 'antd';
import { DescriptionsItemProps } from 'antd/lib/descriptions/Item';

import React, { useMemo } from 'react';

export interface DetailPresentProps<D extends Record<string, any> = Record<string, any>>
  extends DescriptionsProps {
  // 要展示的详情对象
  detail: Record<keyof D, any>;
  // 指定详情的 key 展示的 label 描述
  keyMapLabel: Record<string, React.ReactNode>;
  // 详情 key 的单独 布局，参考 https://ant-design.gitee.io/components/descriptions-cn/#DescriptionItem
  keyMapItemProps?: Partial<Record<keyof D, Omit<DescriptionsItemProps, 'label' | 'children'>>>;
  // 当对应的 detail 的 key 的对应的 value 为空的时候的占位符
  placeholder?: React.ReactNode;
}

export const DetailPresent = <D extends Record<string, any> = Record<string, any>>({
  detail,
  placeholder,
  keyMapLabel,
  keyMapItemProps,
  ...descriptionProps
}: DetailPresentProps<D>) => {
  const keys = useMemo(() => {
    return Object.keys(keyMapLabel || {}).filter(
      (key) => detail && Object.prototype.hasOwnProperty.call(detail, key),
    );
  }, []);
  return (
    <Descriptions {...descriptionProps}>
      {keys.map((key) => {
        const itemConfig = { ...(keyMapItemProps?.[key] || {}), label: keyMapLabel[key] };

        return (
          keyMapLabel[key] && (
            <Descriptions.Item key={key} {...itemConfig}>
              <>{detail[key] ?? placeholder}</>
            </Descriptions.Item>
          )
        );
      })}
    </Descriptions>
  );
};
