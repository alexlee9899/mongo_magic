import React from "react";
import { useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { message, Layout } from 'antd';
import Dashboard from "./Dashboard";
import {getProfile} from '../utils/requests';
import HeaderBar from '../component/HeaderBar'
import Navbar from '../component/Navbar'

const {Header, Sider, Content}  = Layout;

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
        /**
         * Render user profile if there is a valid token
         */
        // (user !== null) ?
        // (<div>
        //     <h1>User Profile</h1>
        //     <p>Name: {user.fullname}</p>
        //     <p>Email: {user.email}</p>
        //     <p>Org: {user.org}</p>
        //     <p>Photo</p>
        // </div>)
        // :
        // (   
        //     (localStorage.getItem('userToken') !== null) ?
        //     (<div>
        //         <h1>Loading...</h1>
        //     </div>):
        //     (<div>
        //         <h1>Login First</h1>
        //         </div>)
        // )
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

