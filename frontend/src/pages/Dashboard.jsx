import { React } from "react";
import { Layout } from 'antd';
import '../App.css';
import { checkToken } from '../utils/functions';
import TextEffect from '../component/TextEffect';
import { useContext } from 'react';
import { ProfileContext } from "../App";
import HeaderBar from '../component/HeaderBar'
import LoadingIcon from "../component/LoadingIcon";
import themeColor from '../config/theme';

const { Content } = Layout;

const Dashboard = (props) => {
    const profile = useContext(ProfileContext);
    // console.log((profile?.providerProfile?.profile?.email == undefined));

    return (
        <>  
                <Content style={{ minWidth:'500px',display:'flex', alignItems:'center', justifyContent:'center' }}>
                    {(profile?.providerProfile?.profile?.email == undefined) ? (<LoadingIcon></LoadingIcon>) :
                    (<>
                    <TextEffect textColor={themeColor} /></>
                    )}
                </Content>
        </>
    );

}
export default Dashboard;