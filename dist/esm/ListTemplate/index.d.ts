/// <reference types="react" />
import { CardProps, SpaceProps, TableProps } from 'antd';
import { FormGeneratorProps } from '../FormGenerator';
export interface ListTemplateProps<TableRecord = any> {
    spaceProps?: SpaceProps;
    tableProps: TableProps<TableRecord>;
    tableCardProps?: CardProps;
    searchBarProps?: FormGeneratorProps;
    searchCardProps?: CardProps;
}
export declare const ListTemplate: <T extends Record<string, unknown> = Record<string, unknown>>({ tableProps, searchBarProps, searchCardProps, tableCardProps, spaceProps, }: ListTemplateProps<T>) => JSX.Element;
