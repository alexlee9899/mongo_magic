import React from "react";
import { useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { message, Layout } from 'antd';
import Dashboard from "./Dashboard";
import {getProfile} from '../utils/requests';
import HeaderBar from '../component/HeaderBar'
import Navbar from '../component/Navbar'

const { Content }  = Layout;

message.config({
    maxCount: 1,
})

export default function Profile() {
    const [searchParams] = useSearchParams();
    const userId = searchParams.get("id");
    const [user, setUser] = React.useState(null);

    useEffect(() => {
        if (localStorage.getItem('userToken') !== null) {
            getProfile().then(data => {
                setUser(data);
            }
            );
        }
    }, [])

    console.log(user);

    return (
        <>
        <Navbar  page='Profile'></Navbar>
        <Layout>
            <HeaderBar page='Profile'>
            </HeaderBar>
            <Content>

            </Content>
        </Layout>
    </>
    )
}

