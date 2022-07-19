import React from "react";
import AnalyticsContent from '../component/AnalyticsContent';
import NavBar from '../component/Navbar';
import HeaderBar from '../component/HeaderBar';
import { Layout } from 'antd';

const Analytics = () => {
    return (
        <>
            <NavBar page='Analytics' />
            <Layout>
                <HeaderBar page='Analytics'/>
                <AnalyticsContent />
            </Layout>
        </>
    );
}

export default Analytics;