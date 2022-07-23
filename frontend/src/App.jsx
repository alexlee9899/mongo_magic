import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Outlet} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AdminSignupPage from './pages/adminSignupPage'
import AdminSignIn from './pages/adminLoginPage';
import Dashboard from './pages/Dashboard';
import Results from './pages/Results';
import Analytics from './pages/Analytics';
import Ranking from './pages/Ranking';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
// import Newquiz from './pages/Newquiz';
import { Layout } from 'antd';
import NavBar from './components/Navbar';
import ImageOne from './components/ImageOne';
import HeaderBar from './components/HeaderBar';
import AssessmentPage from './pages/AssessmentPage/AssessmentPage';
import TestPage from './pages/TestPage';

export const ProfileContext = React.createContext();

function App() {
  const [profile, setProfile] = React.useState(null);
  const providerProfile = React.useMemo(() => ({ profile, setProfile}), [profile, setProfile]);

  React.useEffect(() => {
    // getProfile().then(res => {
    //   if (res.ok) {
    //     res.json().then(
    //       data => {
    //         setProfile(data);
    //       }
    //     )
    //   }
    //   else {
    //     res.json().then(
    //       data => {
    //         if (data.msg === 'Token has expired'){
    //           localStorage.removeItem('userToken');
    //           setProfile(null);
    //         }
    //       }
    //     )
    //   }
    // })
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <Layout style={{ minHeight: '100%', width:'100%', overflow:'auto' }}>
        <>
        <Router>
          <ProfileContext.Provider value={{ providerProfile }}>
            {/* { (useRegex(window.location.pathname))  ? (<NavBar page='Dashboard'></NavBar>) : (<></>)} */}
            <Routes >
              <Route path='/' element={<HomePage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/adminlogin" element={<AdminSignIn />} />
              <Route path="/adminsignup" element={<AdminSignupPage />} />
              <Route path="/assessment" element={<AssessmentPage/>}/>
              <Route path="/test" element={<TestPage />} />
              <Route path='/users/' element={<><NavBar page='Dashboard'></NavBar><Outlet/></>}>
                <Route path="dashboard" element={<Layout><HeaderBar page='Dashboard'></HeaderBar><Dashboard /></Layout>} />
                <Route path="results"  element={<><Layout><HeaderBar page='Results'></HeaderBar><Results /></Layout></>} />
                <Route path="analytics" element={<><Layout><HeaderBar page='Analytics'></HeaderBar><Analytics /></Layout></>} />
                <Route path="ranking" element={<><Layout><HeaderBar page='Ranking'></HeaderBar><Ranking /></Layout></>} />
                <Route path="profile" element={<><Layout><HeaderBar page='Profile'></HeaderBar><Profile /></Layout></>} />
                <Route path="settings" element={<><Layout><HeaderBar page='Settings'></HeaderBar><Settings /></Layout></>} />
              </Route>
              <Route path="*" element={<NotFound />} />
              {/* <Route path="/newquiz" element={<Newquiz />} /> */}
            </Routes>
          </ProfileContext.Provider>
        </Router>
        </>
      </Layout>
    </div>
  );
}

export default App;
