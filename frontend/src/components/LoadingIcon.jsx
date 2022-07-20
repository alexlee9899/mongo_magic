import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import themeColor from '../config/theme';

const loadingIcon = <LoadingOutlined style={{ fontSize: 60, color:`${themeColor}` }} spin />;

const LoadingIcon = () => {
  return (
    <Spin size="large" indicator={ loadingIcon } />
  )
}
export default LoadingIcon;