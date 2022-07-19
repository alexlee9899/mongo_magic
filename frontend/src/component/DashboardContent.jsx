import { React } from "react";
import { Layout } from 'antd';
import '../App.css';
import { checkToken } from '../utils/functions';
import TextEffect from './TextEffect';
import { useContext } from 'react';
import { ProfileContext } from "../App";
import HeaderBar from './HeaderBar'
import LoadingIcon from "./LoadingIcon";

const { Content } = Layout;

const DashboardContent = (props) => {
    const profile = useContext(ProfileContext);
    // console.log((profile?.providerProfile?.profile?.email == undefined));

    return (
        <>  
                <Content style={{ minWidth:'500px',display:'flex', alignItems:'center', justifyContent:'center' }}>
                    {(profile?.providerProfile?.profile?.email == undefined) ? (<LoadingIcon></LoadingIcon>) :
                    (<><h1></h1>
                    <TextEffect textColor='#4D7393' /></>)}
                </Content>
        </>
    );

}
export default DashboardContent;