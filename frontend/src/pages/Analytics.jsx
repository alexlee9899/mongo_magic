import React from "react";
import { Layout } from 'antd';
import HeaderBar from '../component/HeaderBar'
import Navbar from '../component/Navbar'

const {Header, Sider, Content}  = Layout;

export default function Ranking() {
    return (
        <>
        <Navbar page='Analytics'></Navbar>
        <Layout>
            <HeaderBar page='Analytics'>
            </HeaderBar>
            <Content>
            </Content>
        </Layout>
    </>
    );
}