import React from "react";
import { Layout } from 'antd';
import HeaderBar from '../component/HeaderBar'

export default function Settings() {
    return (
        <>
        {/* <Navbar  page='Settings'></Navbar> */}
        <Layout>
            <HeaderBar page='Settings'>
            </HeaderBar>
        </Layout>
    </>
    );
}