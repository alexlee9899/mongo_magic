import React from 'react';
import { Parallax } from 'react-parallax';
import styled from 'styled-components';
import logo from '../assets/LogoBlue.png';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#89c5d1',
    }
  },
});

const Logoimg = styled.img`
  width: 56px;
  height:56px;
`
const Navbar = styled.div`
  font-weight: 600;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: auto;
  justify-content: space-between;
  padding-top: 1.5rem;
`

const Atag = styled.a`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */
  text-align: center;
  color: #ffffff;
  margin: 0 2rem 0;
`

const Span = styled.span`
  right: 10%;
  top: 1rem;
  margin-left: 1rem;
`
const ImageOne = () => {
  const navigate = useNavigate();

  const turnToLogin = () => {
    navigate('/login');
  }

  const turnToRegister = () => {
    navigate('/signup');
  }

  const handleClick = () => {
    if (localStorage.getItem('token')) {
      navigate('/test');
    }
    else {
      turnToLogin();
    }
  }


  return <Parallax className='image' blur={0} bgImage={require('./image/banner1.jpg')} strength={800} bgImageStyle={{minHeight:"100vh"}}>
  <Navbar>
      <div className='logo-title'>
        <Logoimg src={logo} alt="logo" />
        <div className='title'>G'Tracker </div>
      </div>
      <Span>
        <Atag>Home</Atag>
        <Atag>Ranking</Atag>
        <Atag>Help</Atag>
        <Atag>About</Atag>
        <Atag onClick={turnToLogin}>Login</Atag>
        <Atag onClick={turnToRegister}>Sign up</Atag>
      </Span> 
    </Navbar>
     <div className='content'>
        <span className="img-txt">Taking the leading position in sustainability</span>
        <ThemeProvider theme={theme}>
          <Button onClick={handleClick} style={{minWidth: '150px', borderRadius:'32px', minHeight: '70px', color:'#ffffff', fontSize:'x-large', fontWeight:'bolder'}} variant="contained" color="primary">Get Started</Button>
        </ThemeProvider>
      </div>
  </Parallax>
}

export default ImageOne;