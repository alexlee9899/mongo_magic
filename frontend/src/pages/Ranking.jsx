import React from "react";
import { Layout } from 'antd';
import HeaderBar from '../component/HeaderBar'
import Navbar from '../component/Navbar'

const {Header, Sider, Content}  = Layout;

export default function Ranking() {
    return (
        <>
        <Navbar page='Ranking'></Navbar>
        <Layout>
            <HeaderBar page='Ranking'>
            </HeaderBar>
            <Content>
            </Content>
        </Layout>
    </>
    );
}