import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";
import logo from '../../assets/LogoBlue.png';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../../utils/requests";
import { asyncLocalStorage } from '../../utils/functions';
import { message } from 'antd';
import { Newinput, Newform, Flexbox, Labelbox, Label, Head, Head2, Logoimg, Navbar, Atag, Bluetag, Span } from "./Quizcss";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4D7393',
    }
  },
});

export default function Newquiz() {
  const navigate = useNavigate();
  let useremail = useRef('');
  let userpwd = useRef('');

  const transRegis = (event) => {
    navigate(`/signup`);
  }
  const transLogin = (event) => {
    navigate(`/adminlogin`);
  }
  const transHome = (event) => {
    navigate(`/`);
  }
  const transAbout = (event) => {
    navigate('/about');
  }
  const transHelp = (event) => {
    navigate(`/help`);
  }

  const recaptchaRef = React.useRef();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await recaptchaRef.current.executeAsync();
    console.log(token);
    recaptchaRef.current.reset();
    const msg = {
      email: useremail.current.value,
      password: userpwd.current.value,
      user_type: "1",
      reCaptcha_Token: token,
    };
    console.log(msg);
    await loginRequest(msg).then(res => {
        if (!res.ok) {
          res.json().then(body => {
            message.error({
              content: body.message,
              duration: 1.2,
              style: {
                marginTop: '20vh',
              }
            });
          })
        } else {
          res.json().then(body => {
            asyncLocalStorage.setItem('userToken', body.token).then(() =>
              navigate(`/users/dashboard`)
            )
          })
        }
      })
  };
  return (
    <ThemeProvider theme={theme}>
      <Navbar><Logoimg src={logo} alt="logo" />G'Tracker <Span>
        <Atag onClick={transHome}>Home</Atag>
        <Atag>Rankings</Atag>
        <Atag onClick={transHelp}>Help</Atag>
        <Atag onClick={transAbout}>About</Atag>
      </Span>
      </Navbar>
      <Flexbox>
        <Head>
          Login
        </Head>
        <Head2>Don’t have an account? <Bluetag onClick={transRegis}>Register</Bluetag></Head2>
        <Head2><Bluetag onClick={transLogin}>Switch to User Login</Bluetag></Head2>
        <Newform onSubmit={handleSubmit}>
          <Labelbox className="form-group">
            <Label htmlFor="email" required="required">
              Email address
            </Label>
            <Newinput
              type="email"
              ref={useremail}
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
            />
          </Labelbox>
          <Labelbox className="form-group">
            <Label htmlFor="password">Name</Label>
            <Newinput
              type="password"
              className="form-control"
              id="password"
              ref={userpwd}
              placeholder="Enter your password"
              required="required"
              name="password"
            />
          </Labelbox>
          <Labelbox>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={
                <Typography sx={{ fontSize: 16, fontWeight: 'bold' }}>
                  Remember me
                </Typography>
              } sx={{ marginBottom: '10px' }}
            />
          </Labelbox>
          <Labelbox>
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey="6LebkCshAAAAAHk4a207_vIbTrP2xEPrAeINxV6z"
            />
          </Labelbox>
          <Button color='primary' variant="contained" type="submit" sx={{ width: '408px', height: '62px', borderRadius: '12px', fontSize: '15px', fontWeight: 'bold', textTransform: 'none', }}>Login</Button>
        </Newform>
      </Flexbox>
    </ThemeProvider>
  );
}