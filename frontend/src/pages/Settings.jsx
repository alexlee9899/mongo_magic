import React from "react";
import { Layout } from 'antd';
import HeaderBar from '../components/HeaderBar'

const Settings = () => {
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

export default Settings;