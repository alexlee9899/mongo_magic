import { React } from "react";
import { Layout } from 'antd';
import '../App.css';
import { checkToken } from '../utils/functions';
import TextEffect from '../components/TextEffect';
import { useContext } from 'react';
import { ProfileContext } from "../App";
import HeaderBar from '../components/HeaderBar'

const { Content } = Layout;

const Dashboard = (props) => {
    const profile = useContext(ProfileContext);

    return (
        <>
            {/* <Navbar page='Dashboard'></Navbar> */}
            <Layout>
                <HeaderBar page='Dashboard'>
                </HeaderBar>
                <Content style={{ minWidth:'500px',display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <h1></h1>
                    <TextEffect textColor='#4D7393' />
                </Content>
            </Layout>
        </>
    );

}
export default Dashboard;