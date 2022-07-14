import { React } from "react";
import { Layout } from 'antd';
import '../App.css';
import { checkToken } from '../utils/functions';

import HeaderBar from '../component/HeaderBar'
const { Content } = Layout;

export default function DashBoard(props) {
    checkToken();
    return (
        <>
            {/* <Navbar page='Dashboard'></Navbar> */}
            <Layout>
                <HeaderBar page='Dashboard'>
                </HeaderBar>
                <Content>
                    dashboard content
                </Content>
            </Layout>
        </>
    );

}