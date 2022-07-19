import React from "react";
import ProfileContent from '../component/ProfileContent';
import NavBar from '../component/Navbar';
import HeaderBar from '../component/HeaderBar';
import { Layout } from 'antd';

const Profile= () => {
    return (
        <>
            <NavBar page='Profile' />
            <Layout>
                <HeaderBar page='Profile'/>
                <ProfileContent />
            </Layout>
        </>
    );
}

export default Profile;