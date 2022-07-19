import React from "react";
import DashboardContent from '../component/DashboardContent';
import NavBar from '../component/Navbar';
import HeaderBar from '../component/HeaderBar';
import { Layout } from 'antd';

const Dashboard = () => {
    return (
        <>
            <NavBar page='Dashboard' />
            <Layout>
                <HeaderBar page='Dashboard'/>
                <DashboardContent />
            </Layout>
        </>
    );
}

export default Dashboard;