import { FormComponentProps } from 'antd/lib/form';
import * as React from 'react';
import * as router from 'react-router';
import { Dispatch } from 'redux';

/**
 * 通用组件属性接口
 */
export interface IComponentProps extends router.RouteComponentProps {
  children?: React.ReactNode;
  dispatch?: Dispatch<any>;
}

/**
 * Form组件属性接口
 */
export interface IFormComponentProps extends IComponentProps, FormComponentProps {}
