import React, { useContext } from "react";
import { useEffect } from "react";
import { message, Layout, Upload, Button, Input } from 'antd';
import HeaderBar from '../component/HeaderBar'
import uploadAvatar from '../assets/uploadAvatar.png';
import { ProfileContext } from '../App';
import { fileToDataUrl } from "../utils/functions";
import { updateProfile } from "../utils/requests";

const { Content } = Layout;
const { Dragger } = Upload;

message.config({
    maxCount: 1,
})

export default function Profile() {
    // const [searchParams] = useSearchParams();
    // const userId = searchParams.get("id");
    const [user, setUser] = React.useState(null);
    // const [imgReady, setImgReady] = React.useState(false);
    const [imgUrl, setImgUrl] = React.useState(null);
    const prof = useContext(ProfileContext);

    // const saveImage = () => {
    //     if (imgUrl) {
    //         setUser({ ...user, photo: imgUrl });
    //     }
    // }


    useEffect(() => {
        if (prof.providerProfile.profile) {
            setUser(prof.providerProfile.profile);
        }
    }, [prof])


    let contentStyle = {
        padding: '24px',
        background: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgb(241,241,241)',
    }

    let avatarStyle = {
        borderRadius: '100%',
        maxWidth:'100%', 
        maxHeight:'100%',
    }

    let uploadStyle = {
        borderRadius: '4px',
        background: '#126D62',
        color: '#fff',
        width: '15vw',
        marginTop:'50px'
    }

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
    }

    const update = (data) =>{
        updateProfile(data)
            .then(res => {
                if (res.ok) {
                    message.success('Profile updated successfully');
                }
                else {
                    message.error('Error updating profile');
                }
            })
    }
    return (
        <>
            {(prof.providerProfile.profile) ? (
            <Layout>
                <HeaderBar page='Profile'>
                </HeaderBar>
                <Content style={contentStyle}>
                    <div>
                    <Dragger {...props}>
                        <div style={{backgroundColor:'white', borderRadius:'100%', width:'300px', height:'300px'}}>
                            <img alt='avatar' style={{borderRadius:'100%', width:'300px', height:'300px'}} src={imgUrl ? imgUrl : uploadAvatar}></img>
                        </div>
                    </Dragger>
                    </div>
                    <div style={{width:'40vw', marginTop:'100px'}}>
                    <h3> Name</h3>
                    <Input size="large" maxLength='20' style={{width:'40vw'}} defaultValue={prof.providerProfile.profile.fullname} onChange={(e) => setUser({ ...user, fullname: e.target.value })} />
                    </div>
                    <div style={{width:'40vw', marginTop:'20px'}}>
                    <h3> Email(required)</h3>
                    <Input size="large" maxLength='40' style={{width:'40vw'}} defaultValue={prof.providerProfile.profile.email} onChange={(e) => setUser({ ...user, email: e.target.value })}/>
                    </div>
                    <div style={{width:'40vw', marginTop:'20px'}}>
                    <h3> Organisation Name</h3>
                    <Input size="large" maxLength='50' style={{width:'40vw'}} defaultValue={prof.providerProfile.profile.org} onChange={(e) => setUser({ ...user, org: e.target.value })}/>
                    </div>
                    <Button style={uploadStyle} onClick={() => (update(user))}>Update My Profile</Button>
                </Content>
            </Layout>) : (<></>)
            }
        </>
    )
}

