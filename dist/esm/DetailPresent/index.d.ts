import { DescriptionsProps } from 'antd';
import { DescriptionsItemProps } from 'antd/lib/descriptions/Item';
import React from 'react';
export interface DetailPresentProps<D extends Record<string, any> = Record<string, any>> extends DescriptionsProps {
    detail: Record<keyof D, any>;
    keyMapLabel: Record<string, React.ReactNode>;
    keyMapItemProps?: Partial<Record<keyof D, Omit<DescriptionsItemProps, 'label' | 'children'>>>;
    placeholder?: React.ReactNode;
}
export declare const DetailPresent: <D extends Record<string, any> = Record<string, any>>({ detail, placeholder, keyMapLabel, keyMapItemProps, ...descriptionProps }: DetailPresentProps<D>) => JSX.Element;
