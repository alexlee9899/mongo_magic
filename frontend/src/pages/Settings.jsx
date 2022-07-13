import React from "react";
import Dashboard from "./Dashboard";
import { Layout } from 'antd';
import HeaderBar from '../component/HeaderBar'
import Navbar from '../component/Navbar'

const {Header, Sider, Content}  = Layout;

export default function Settings() {
    return (
        <>
        <Navbar  page='Settings'></Navbar>
        <Layout>
            <HeaderBar page='Settings'>
            </HeaderBar>
        </Layout>
    </>
    );
}