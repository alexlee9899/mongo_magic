import React from "react";
import SettingsContent from '../component/SettingsContent';
import NavBar from '../component/Navbar';
import HeaderBar from '../component/HeaderBar';
import { Layout } from 'antd';

const Settings = () => {
    return (
        <>
            <NavBar page='Settings' />
            <Layout>
                <HeaderBar page='Settings'/>
                <SettingsContent />
            </Layout>
        </>
    );
}

export default Settings;