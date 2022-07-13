import React from "react";
import { Layout } from 'antd';
import HeaderBar from '../component/HeaderBar'
import Navbar from '../component/Navbar'

const { Content }  = Layout;
export default function Results() {
    return (
        <>
        <Navbar  page='Results'></Navbar>
        <Layout>
            <HeaderBar page='Results'>
            </HeaderBar>
            <Content>
            </Content>
        </Layout>
    </>
    );
}