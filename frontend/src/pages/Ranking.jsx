import React from "react";
import { Layout } from 'antd';
import HeaderBar from '../component/HeaderBar';

const { Content}  = Layout;

const Ranking= () => {
    return (
        <>
        {/* <Navbar page='Ranking'></Navbar> */}
        <Layout>
            <HeaderBar page='Ranking'>
            </HeaderBar>
            <Content>
            </Content>
        </Layout>
    </>
    );
}
export default Ranking;