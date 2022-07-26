import React from "react";
import backend_url from "../config/api";


// Temperary login page for dev purpose
// disregard any change to this when merging to master
import logo from '../assets/LogoBlue.png';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import styled from 'styled-components'
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { asyncLocalStorage } from '../utils/functions'

const Newinput = styled.input`
  border:0;
  background: #F6F6F6;
  border-radius: 12px;
  width: 408px;
  height: 62px;
  margin:20px;
  text-indent: 15px;
`


const Newform = styled.form`
  width: 504px;
  // min-height: 50vh;
  background: #FFFFFF;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  padding:30px;
  margin-top: 30px;
  margin-bottom: 30px;
`

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  // height:100vh;

  justify-content: center;
  align-items:center;
`
const Labelbox = styled.div`
  display: flex;
  flex-direction: column;
  // margin: 30px
`

const Label = styled.label`
  margin: 0 20px 0;
  font-weight:700;
  font-size:large;
  :after {
    content: '* ';
    color: red;
}
`

const Head = styled.h1`
  font-weight: 700;
  font-size: 40px;
  line-height: 150%;
`

const Head2 = styled.h2`
  font-weight: 400;
  font-size: 20px;
  color: #94959B;
  line-height: 150%;
`

const Logoimg = styled.img`
  width: 56px;
  height:56px;
  margin: 10px;
  margin-left: 5rem;
`
const Navbar = styled.div`
  font-weight: 600;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: #4D7393;

`

const Atag = styled.a`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */
  text-align: center;
  color: #183B56;
  margin: 0 2rem 0;
`
const Bluetag = styled.a`
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  color: ##3865F3;
`

const Span = styled.span`
  float: right;
  right: 10%;
  top: 1rem;
  position:relative;
`

const theme = createTheme({
  palette: {
    primary:{
      main: '#4D7393',
    }
  },
});


const AdminSignIn = () => {
  const navigate = useNavigate();
  const Api = (path, method, authToken, body, callback) => {
    const init = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: authToken,
      },
      body: method === 'GET' ? undefined : JSON.stringify(body),
    };

    fetch(`${backend_url}/${path}`, init)
      .then(response => response.json())
      .then(body => {
        if (body.error) {
          console.log(body.error);
          // message.error(body.error);
        } else {
          callback(body);
          return body;
        }
      });
};
  const transRegis = (event) => {
    navigate(`/signup`); 
  }
  const transLogin = (event) => {
    navigate(`/login`); 
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const msg = {
      email: data.get('email'),
      password: data.get('password'),
      user_type: "0",
    }
    console.log(msg);
    Api('users/login', 'POST', undefined, msg, (body) => {
      console.log(body);
      if (body.token){
        asyncLocalStorage.setItem('userToken', body.token).then(() =>
        navigate(`/users/dashboard`)
      )
      } else {
        alert(body.message);
      }
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar><Logoimg src={logo} alt="logo" />G'Tracker <Span><Atag>Home</Atag><Atag>Rankings</Atag><Atag>Help</Atag><Atag>About</Atag></Span> </Navbar>
    <Flexbox>
      
      <Head>
        Admin Login
      </Head>
      <Head2>Don’t have an account? <Bluetag onClick={transRegis}>Register</Bluetag></Head2>
      <Head2><Bluetag onClick={transLogin}>Switch to User Login</Bluetag></Head2>
      <Newform onSubmit={handleSubmit}>
        <Labelbox>
          <Label htmlFor="email">Email</Label>
          <Newinput type="email" placeholder="Email" id="email" name="email" required></Newinput>
        </Labelbox>
        <Labelbox>
          <Label htmlFor="password">Password</Label>
          <Newinput type="password" placeholder="Password" id="password" name="password" required></Newinput>
        </Labelbox>
        <Labelbox>
        <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={
                <Typography sx={{ fontSize: 16 ,fontWeight:'bold'}}>
                  Remember me
                </Typography>
              } sx={{marginBottom: '10px'}}
            />
        </Labelbox>
        <Button color='primary' variant="contained" type="submit" sx={{width:'408px', height:'62px', borderRadius: '12px', fontSize: '15px', fontWeight:'bold', textTransform: 'none',}}>Login</Button>
      </Newform>
    </Flexbox>
    </ThemeProvider>
  );
}

export default AdminSignIn;