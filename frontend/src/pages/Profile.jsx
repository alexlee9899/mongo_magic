import React, { useContext } from "react";
import { useEffect } from "react";
import { EditOutlined } from "@ant-design/icons";
import { message, Layout, Upload, Button, Input, Spin } from 'antd';
import HeaderBar from '../components/HeaderBar'
import uploadAvatar from '../assets/uploadAvatar.png';
import { ProfileContext } from '../App';
import { fileToDataUrl } from "../utils/functions";
import { updateProfile } from "../utils/requests";
import LoadingIcon from "../components/LoadingIcon";
import LoginChecker from "../components/LoginChecker";
import { getProfile } from "../utils/requests";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;
const { Dragger } = Upload;

message.config({
    maxCount: 1,
})

function Profile() {
    const [user, setUser] = React.useState(null);
    const [imgUrl, setImgUrl] = React.useState(null);
    const prof = useContext(ProfileContext);
    const [change, setChange] = React.useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (prof.providerProfile.profile) {
            setUser(prof.providerProfile.profile);
            setImgUrl(prof.providerProfile.profile.photo);
        }
    }, [prof]);

    let contentStyle = {
        padding: '24px',
        background: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgb(241,241,241)',
        height: '100vh',
    };

    let avatarStyle = {
        borderRadius: '100%',
        maxWidth: '100%',
        maxHeight: '100%',
    };

    let uploadStyle = {
        borderRadius: '4px',
        background: '#4d7393',
        color: '#fff',
        width: '15vw',
        margin: '50px'
    };


    const props = {
        name: 'file',
        maxCount: 1,
        onChange(info) {
            if ((info.file.type === 'image/jpeg' || info.file.type === 'image/png') && info.file.status !== 'removed') {
                fileToDataUrl(info.file.originFileObj)
                    .then(response => {
                        setImgUrl(response);
                        // setImgReady(false);
                        setUser({ ...user, photo: response });
                        setChange({ ...change, photo: response });
                        info.file.status = 'done';
                    });
            }
        },
        onRemove(info) {
            // setImgReady(false);
            setImgUrl({});
        },
        style: avatarStyle,
        showUploadList: false,
        customRequest: () => { },
        accept: "image/png, image/jpeg"
    };

    const update = (data) => {
        if (data?.email === user.email) {
            delete data.email;
        }
        updateProfile(data)
            .then(res => {
                if (res.ok) {
                    if (data?.email) {
                        message.success('Email Updated, Please Login Again');
                        navigate('/login');
                    } else {
                        message.success('Profile updated successfully');
                    }
                    prof.providerProfile.setProfile({ ...prof.providerProfile.profile, ...data });
                }
                else {
                    message.error('Error updating profile');
                }
            });
    };


    return (
        <>
            {/* <LoginChecker></LoginChecker> */}
            <Layout>
                <HeaderBar page='Profile'>
                </HeaderBar>
                {(prof.providerProfile.profile) ? (
                    <Content style={contentStyle}>
                        <div>
                            <Dragger {...props}>
                                <div style={{ backgroundColor: 'white', borderRadius: '100%', width: '300px', height: '300px' }}>
                                    <img alt='avatar' style={{ borderRadius: '100%', width: '300px', height: '300px' }} src={imgUrl ? imgUrl : uploadAvatar}></img>
                                </div>
                            </Dragger>
                            <br>
                            </br>
                            <br>
                            </br>
                            {/* <EditOutlined />Click or drop an image(.JPG or .PNG) */}
                        </div>
                        <div style={{ width: '40vw', marginTop: '100px' }}>
                            <h3> Name</h3>
                            <Input size="large" maxLength='20' style={{ width: '40vw' }} defaultValue={prof.providerProfile.profile.fullname} onChange={(e) => setChange({ fullname: e.target.value })} />
                        </div>
                        <div style={{ width: '40vw', marginTop: '20px' }}>
                            <h3> Email (required)</h3>
                            <Input size="large" maxLength='40' style={{ width: '40vw' }} defaultValue={prof.providerProfile.profile.email} onChange={(e) => setChange({ email: e.target.value })} />
                        </div>
                        <div style={{ width: '40vw', marginTop: '20px' }}>
                            <h3> Organisation Name</h3>
                            <Input size="large" maxLength='50' style={{ width: '40vw' }} defaultValue={prof.providerProfile.profile.org} onChange={(e) => setChange({ org: e.target.value })} />
                        </div>
                        <Button style={uploadStyle} onClick={() => (update(change))}>Update My Profile</Button>
                        <div style={{ height: '40px', width: '40px' }}><br></br></div>
                    </Content>
                ) : (<Layout style={{ display: 'flex', justifyContent: 'center' }}><LoadingIcon></LoadingIcon></Layout>)}
            </Layout>
        </>
    );
}

export default Profile;