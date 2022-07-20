import React from "react";
import { Layout, Input } from 'antd';
import HeaderBar from '../components/HeaderBar'
import PostCodeInput from "../components/PostCodeInput";

const { Content }  = Layout;

const Ranking = () => {
    return (
        <>
        {/* <Navbar page='Analytics'></Navbar> */}
            <Content style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <PostCodeInput></PostCodeInput>
            </Content>
    </>
    )
}
export default Ranking;