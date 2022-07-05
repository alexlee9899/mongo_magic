import { React, useRef, useEffect, useState } from "react";
import styled from 'styled-components'
import { Layout, Menu, Image, Space, Card } from 'antd';
import logo from '../assets/logo.png';
import dashboardLogo from '../assets/dashboardLogo.png';
import dashboardLogoSelected from '../assets/dashboardLogoSelected.png';
import resultsLogo from '../assets/resultsLogo.png';
import resultsLogoSelected from '../assets/resultsLogoSelected.png';
import analyticsLogo from '../assets/analyticsLogo.png';
import analyticsLogoSelected from '../assets/analyticsLogoSelected.png';
import rankingLogo from '../assets/rankingLogo.png';
import rankingLogoSelected from '../assets/rankingLogoSelected.png';
import dashBoardLines from '../assets/dashboardLines.png';
import profileLogo from '../assets/profileLogo.png';
import profileLogoSelected from '../assets/profileLogoSelected.png';
import settingsLogo from '../assets/settingsLogo.png';
import settingsLogoSelected from '../assets/settingsLogoSelected.png';
import '../App.css'
import { OmitProps } from "antd/lib/transfer/ListBody";

const {Header, Sider, Content, Footer}  = Layout;

const HeaderLogo = styled.div`
    position: relative;
    align-items: center;
    justify-content: center;
    display: flex;
    height: 120px;
    order: 1;
`;

const TopLogo = styled.img`
    position: relative;
    width: 56px;
    height: auto;
    align-items: center;
    min-width: 20px;
`
const LogoText = styled.b`
    position:relative;
    left: 5%;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 40px;
    letter-spacing: 0.04em;
    color: #126D62;
`
const DashBoardText = styled.b`
    position:relative;
    /* left: 5%; */
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 40px;
    letter-spacing: 0.04em;
    bottom: -2px;
    margin-left: 5px;
`

const MainMenuContainer = styled.div`
    background-color: white;
    position: relative;
    display: flex;
    justify-content: center;
`

const MenuLogo = styled.img`
    width: 28px;
    height: 28px;
    position: relative; 
`
const UserContainer = styled.div`
    display: flex;
`
const UserNameCompany = styled.div`

`

const DashboardLogo = (e) => {
    const marRight = e.size;
    // console.log(e);
    return (
        <MenuLogo src={e.src} style={{ marginRight: `${marRight}px` }} >
        </MenuLogo>
    )
}

export default function DashBoard() {
    const imgRef = useRef();
    const textRef = useRef();
    const [logoOffsetLeft, setLogoOffsetLeft] = useState(0);
    const [textOffsetLeft, setTextOffsetLeft] = useState(0);
    const [itemSelected, setItemSelected] = useState(null);
    
    useEffect(() => {
        window.addEventListener("resize", getPosition);
        getPosition();
    }, []);

    const getPosition = () => {
        setLogoOffsetLeft(imgRef.current.offsetLeft);
        setTextOffsetLeft(textRef.current.offsetLeft);
    }

    let menuItemStyle = {
        marginTop: '20px',
        marginLeft: logoOffsetLeft + 14,
        padding: '0 15px',
    };

    let menuItemLast = {
        marginTop: '20px',
        marginLeft: logoOffsetLeft + 14,
        padding: '0 15px',
        marginBottom: '40px',
    }

    const itemSelect = (e) =>{
        setItemSelected(e.key);
}
    

    return (
    <>
        <Layout>
            <Sider id="Dashboard_sider">
                <HeaderLogo id="Header_container">
                    <TopLogo src={logo} alt="logo" ref={imgRef}/>
                    <LogoText ref={textRef}>G'Tracker</LogoText>
                </HeaderLogo>
                {/* <b style={{ marginLeft:`${logoOffsetLeft}px`, fontWeight: '700', fontSize:'16px' }}>Main Menu</b> */}
                <MainMenuContainer>
                    <Menu id = "menu" defaultSelectedKeys={'1'} onSelect={(e) => itemSelect(e)} style={{left:'-40px', width:'100%', position:'relative', display: 'block', marginBottom: '20px', padding: '5px 25px'}}>
                    <Menu.Item style={{ marginLeft:`${logoOffsetLeft}px`, fontWeight: 'bolder', pointerEvents: 'none'}} key="200"  >
                            <b style={{ fontWeight: '700', fontSize:'16px'}}>Main Menu</b>
                    </Menu.Item>
                        <Menu.Item icon={<DashboardLogo id='1' src={(itemSelected == '1') ? (dashboardLogoSelected): (dashboardLogo) } size={textOffsetLeft - logoOffsetLeft - 56 + 14} />} style={menuItemStyle} key="1">
                            Dashboard
                        </Menu.Item>
                        <Menu.Item icon={<DashboardLogo id='2' src={(itemSelected == '2') ? (resultsLogoSelected): (resultsLogo) } size={textOffsetLeft - logoOffsetLeft - 56 + 14}/>} style={menuItemStyle} key="2">
                            Results
                        </Menu.Item>
                        <Menu.Item icon={<DashboardLogo id='3' src={(itemSelected == '3') ? (analyticsLogoSelected): (analyticsLogo) } size={textOffsetLeft - logoOffsetLeft - 56 + 14}/>} style={menuItemStyle} key="3">
                            Analytics
                        </Menu.Item>
                        <Menu.Item icon={<DashboardLogo id='4' src={(itemSelected == '4') ? (rankingLogoSelected): (rankingLogo) } size={textOffsetLeft - logoOffsetLeft - 56 + 14}/>} style={menuItemLast} key="4">
                            Ranking
                        </Menu.Item>
                {/* <li style={{ marginLeft:`${logoOffsetLeft + 10}px`, fontWeight: '700'}}>Others</li> */}
                        <Menu.Item style={{ marginLeft:`${logoOffsetLeft}px`, fontWeight: 'bolder', pointerEvents: 'none'}} key="100">
                            <b style={{ fontWeight: '700', fontSize:'16px'}}>Others</b>
                        </Menu.Item>
                        <Menu.Item icon={<DashboardLogo id='5' src={(itemSelected == '5') ? (profileLogoSelected): (profileLogo) } size={textOffsetLeft - logoOffsetLeft - 56 + 14} />} style={menuItemStyle} key="5">
                            Profile
                        </Menu.Item>
                        <Menu.Item icon={<DashboardLogo id='6' src={(itemSelected == '6') ? (settingsLogoSelected): (settingsLogo) } size={textOffsetLeft - logoOffsetLeft - 56 + 14}/>} style={menuItemStyle} key="6">
                            Settings
                        </Menu.Item>
                    </Menu>
                </MainMenuContainer>
            </Sider>
            <Layout>
                <Header style={{ backgroundColor:'#FBFBFB', display:'flex', justifyContent:'space-between' }}>
                    <div>
                        <MenuLogo src={dashBoardLines} style={{ marginRight:'20px' }}>
                        </MenuLogo> 
                        <DashBoardText>Dashboard</DashBoardText>
                    </div>
                    <UserContainer>
                    <Image
                        style={{marginRight:'30px'}}
                        width={30}
                        height={30}
                        src="error"
                        fallback="data:image/png;base64,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"
                    /> 
                        <UserNameCompany>
                            <Space direction="vertical" size='small' style={{marginLeft:'10px', diaplay:'flex', position:'relative', textAlign:'center'}}>
                                <p style={{position:'relative', top:'-10px', lineHeight:'10px', fontWeight:'bold' }}>name</p>
                                <p style={{position:'relative', top:'-20px', lineHeight:'10px' }}>company</p>
                            </Space>
                        </UserNameCompany>
                    </UserContainer>
                </Header>
                <Content>
                </Content>
            </Layout>
        </Layout>
    </>
  );
}