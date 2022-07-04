import { React, useRef, useEffect, useState } from "react";
import styled from 'styled-components'
import { Layout, Menu } from 'antd';
import logo from '../assets/logo.png';
import dashboardLogo from '../assets/dashboardLogo.png';
import resultsLogo from '../assets/resultsLogo.png';
import analyticsLogo from '../assets/analyticsLogo.png';
import rankingLogo from '../assets/rankingLogo.png';
import '../App.css'

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


const DashboardLogo = (e) => {
    const marRight = e.size;
    return (
        <MenuLogo src={e.src} style={{marginRight: `${marRight}px`}} >
        </MenuLogo>
    )
}

// const ResultsLogo = () => {
//     return (
//         <MenuLogo src={ResultsLogo} >
//         </MenuLogo>
//     )
// }



export default function DashBoard() {
    const imgRef = useRef();
    const textRef = useRef();
    const [logoOffsetLeft, setLogoOffsetLeft] = useState(0);
    const [textOffsetLeft, setTextOffsetLeft] = useState(0);
    
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
        padding: '0',
    };


    return (
    <>
        <Layout>
            <Sider id="Dashboard_sider">
                <HeaderLogo id="Header_container">
                    <TopLogo src={logo} alt="logo" ref={imgRef}/>
                    <LogoText ref={textRef}>G'Tracker</LogoText>
                </HeaderLogo>
                <MainMenuContainer>
                <Menu style={{ 'width':'100%', 'position':'relative', 'display': 'block'}}>
                    <b style={{marginLeft:`${logoOffsetLeft}px`}}>Main Menu</b>
                    <Menu.Item icon={<DashboardLogo src={dashboardLogo} size={textOffsetLeft - logoOffsetLeft - 56 + 14} />} style={menuItemStyle} key="1">
                        Dashboard
                    </Menu.Item>
                    <Menu.Item icon={<DashboardLogo src={resultsLogo} size={textOffsetLeft - logoOffsetLeft - 56 + 14}/>} style={menuItemStyle} key="2">
                        Results
                    </Menu.Item>
                    <Menu.Item icon={<DashboardLogo src={analyticsLogo} size={textOffsetLeft - logoOffsetLeft - 56 + 14}/>} style={menuItemStyle} key="3">
                        Analytics
                    </Menu.Item>
                    <Menu.Item icon={<DashboardLogo src={rankingLogo} size={textOffsetLeft - logoOffsetLeft - 56 + 14}/>} style={menuItemStyle} key="4">
                        Ranking
                    </Menu.Item>
                </Menu>
                </MainMenuContainer>
            </Sider>
            <Layout>
                <Header>Header</Header>
                <Content>

                </Content>
            </Layout>
        </Layout>
    </>
  );
}