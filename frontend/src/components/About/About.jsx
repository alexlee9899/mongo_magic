import React from 'react';
import './About.css'
import logo from '../../assets/LogoBlue.png';
import {useNavigate} from "react-router-dom";
import photo from '../../assets/default.png';
import yjj from '../../assets/yjj.jpg';
import kw from '../../assets/kw.jpg';
import jjl from '../../assets/jll.jpg'
import wyf from '../../assets/wyf.jpg';
import lige from '../../assets/lige.jpg';

const About = () => {
  const navigate = useNavigate();

  const turnToLogin = () => {
    navigate('/login');
  }

  const turnToRegister = () => {
    navigate('/signup');
  }

  const turnToDashboard = () => {
    navigate('/users/dashboard');
  }

  const logout = () => {
    localStorage.removeItem('userToken');
    navigate('/');
  }

  const turnToAbout = () => {
    navigate('/about')
  }

  const turnToHome = () => {
    navigate('/')
  }

  const turnToHelp = () => {
    navigate('/help')
  }

  return (
    <div className='aboutContainer'>
      <div className='Navbar'>
        <div className='logo-title'>
          <img className='LogoImage' src={logo} alt="logo"/>
          <div className='title'>G'Tracker </div>
        </div>
        <span className='Link'>
          <a className='Atag' onClick={turnToHome}>Home</a>
          <a className='Atag'>Ranking</a>
          <a className='Atag' onClick={turnToHelp}>Help</a>
          <a className='Atag' onClick={turnToAbout}>About</a>
          {
            localStorage.getItem('userToken') ?
              <div style={{margin:'1rem', lineHeight:'0'}}>
                <a className='Atag' onClick={turnToDashboard}>Dashboard</a>
                <a className='Atag' onClick={logout}>Logout</a>
              </div>
              :
              <div style={{margin:'1rem', lineHeight:'0'}}>
                <a className='Atag' onClick={turnToLogin}>Login</a>
                <a className='Atag' onClick={turnToRegister}>Sign up</a>
              </div>
          }
        </span>
      </div>
      <h1 className='title'>Meet our team</h1>
      <p className='description'>We’re a passionate, action driven and unstoppable team on a mission to develop a cloud-based sustainability assessment platform for industry organisations.</p>
      <div className='memberLeft'>
        <img className='memberPhoto' src={photo}/>
        <div className='memberInfo'>
          <p className='memberName'>Jinyang Liu</p>
          <p className='memberDesc'>Front-end developer</p>
        </div>
      </div>
      <div className='memberRight'>
        <div className='memberInfo'>
          <p className='memberName'>Kai Wang</p>
          <p className='memberDesc'>Front-end developer</p>
        </div>
        <img className='memberPhoto' src={kw}/>
      </div>
      <div className='memberLeft'>
        <img className='memberPhoto' src={yjj}/>
        <div className='memberInfo'>
          <p className='memberName'>Junjing Yu</p>
          <p className='memberDesc'>Front-end developer</p>
        </div>
      </div>
      <div className='memberRight'>
        <div className='memberInfo'>
          <p className='memberName'>Yu Liang</p>
          <p className='memberDesc'>Backend developer</p>
        </div>
        <img className='memberPhoto' src={wyf}/>
      </div>
      <div className='memberLeft'>
        <img className='memberPhoto' src={lige}/>
        <div className='memberInfo'>
          <p className='memberName'>Yanlin Li</p>
          <p className='memberDesc'>Backend developer</p>
        </div>
      </div>
      <div className='memberRight'>
        <div className='memberInfo'>
          <p className='memberName'>Junlin Lu</p>
          <p className='memberDesc'>Backend developer</p>
        </div>
        <img className='memberPhoto' src={jjl}/>
      </div>
    </div>
  )
}

export default About;
