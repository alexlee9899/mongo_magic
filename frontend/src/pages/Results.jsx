import React from "react";
import { Layout } from 'antd';
import HeaderBar from '../component/HeaderBar'

const { Content }  = Layout;
export default function Results() {
    return (
        <>
        {/* <Navbar  page='Results'></Navbar> */}
        <Layout>
            <HeaderBar page='Results'>
            </HeaderBar>
            <Content>
            result content
            </Content>
        </Layout>
    </>
    );
}