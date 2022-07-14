import { React } from "react";
import { Layout } from 'antd';
import '../App.css';

import HeaderBar from '../component/HeaderBar'
const { Content } = Layout;

export default function DashBoard(props) {

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