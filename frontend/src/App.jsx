import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import Results from './pages/Results';
import Analytics from './pages/Analytics';
import Ranking from './pages/Ranking';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import { Layout } from 'antd';
import { getProfile } from './utils/requests';
import NavBar from './component/Navbar';
import { useReactPath } from './utils/hooks';

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
      <Layout style={{ minHeight: '100%' }}>
        <Router>
          <ProfileContext.Provider value={{ providerProfile }}>
            {/* { (useRegex(window.location.pathname))  ? (<NavBar page='Dashboard'></NavBar>) : (<></>)} */}
            <Routes >
              <Route path='/' element={<HomePage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/users/dashboard" element={<><NavBar page='Dashboard' /><Dashboard /></>} />
              <Route path="/users/results" element={<><NavBar page='Results' /><Results /></>} />
              <Route path="/users/analytics" element={<><NavBar page='Analytics' /><Analytics /></>} />
              <Route path="/users/ranking" element={<><NavBar page='Ranking' /><Ranking /></>} />
              <Route path="/users/profile" element={<><NavBar page='Profile' /><Profile /></>} />
              <Route path="/users/settings" element={<><NavBar page='Settings' /><Settings /></>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ProfileContext.Provider>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
