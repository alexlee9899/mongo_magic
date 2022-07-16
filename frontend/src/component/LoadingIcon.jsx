import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const loadingIcon = <LoadingOutlined style={{ fontSize: 60, color:'#126D62' }} spin />;

export default function LoadingIcon() {
  return (
    <Spin size="large" indicator={ loadingIcon } />
  )
}
