import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import Results from './pages/Results';
import Analytics from './pages/Analytics';
import Ranking from './pages/Ranking';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import { Layout } from 'antd';

function App() {
  return (
    <div style={{ height: '100%' }}>
      <Layout style={{ height: '100%' }}>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/users/dashboard" element={<Dashboard />} />
            <Route path="/users/results" element={<Results />} />
            <Route path="/users/analytics" element={<Analytics />} />
            <Route path="/users/ranking" element={<Ranking />} />
            <Route path="/users/profile" element={<Profile />} />
            <Route path="/users/settings" element={<Settings />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
