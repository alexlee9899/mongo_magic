import React from "react";
import { Layout, Input } from 'antd';
import HeaderBar from '../component/HeaderBar'
import PostCodeInput from "../component/PostCodeInput";

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