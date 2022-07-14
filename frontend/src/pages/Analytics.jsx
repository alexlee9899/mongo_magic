import React from "react";
import { Layout } from 'antd';
import HeaderBar from '../component/HeaderBar'

const { Content }  = Layout;

export default function Ranking() {
    return (
        <>
        {/* <Navbar page='Analytics'></Navbar> */}
        <Layout>
            <HeaderBar page='Analytics'>
            </HeaderBar>
            <Content>
            </Content>
        </Layout>
    </>
    );
}