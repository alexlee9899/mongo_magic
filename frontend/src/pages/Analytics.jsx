import React from "react";
import { Layout } from 'antd';
import BarChart from '../components/BarChart/BarChart';

const { Content }  = Layout;

const Ranking = () => {

    return (
        <>
        {/* <Navbar page='Analytics'></Navbar> */}
            <Content style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BarChart></BarChart>
            </Content>
    </>
    )
}
export default Ranking;