import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import UserProfile from './pages/UserProfile';
import Dashboard from './pages/Dashboard';
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
            <Route path="/users/dashboard/profile" element={<UserProfile />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
