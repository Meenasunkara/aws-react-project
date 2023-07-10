import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Authenticator, Image,View, useTheme } from '@aws-amplify/ui-react';

import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Login } from './components/Login';
import { RequireAuth } from './RequireAuth';
import { Admin } from './components/Admin';
import { User } from './components/User';
import Devices from './components/Devices';



import './App.css';


function App() {
  const components = {
    Header() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large} >
         <Image
  src={require('./iot1.jpg')}
  alt="Image"
  style={{
    width: '200px',
    height: 'auto',
    mixBlendMode: 'multiply',
  }}
/>
          <h1 style={{ color: '#801066', fontWeight: 'bold' }}>IOT Dashboard</h1>
        </View>
      );
    }
  };

  return (
    
    <Authenticator hideSignUp={true} components={components}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/Home"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="/devices" element={<RequireAuth><Devices /></RequireAuth>} />
            <Route
              path="/about"
              element={
                <RequireAuth>
                  <About />
                </RequireAuth>
              }
            />
            <Route
              path="/contact"
              element={
                <RequireAuth>
                  <Contact />
                </RequireAuth>
              }
            />
            

            <Route
              path="/admin"
              element={
                <RequireAuth roles={['admin']}>
                  <Admin />
                </RequireAuth>
              }
            />
            <Route
              path="/user"
              element={
                <RequireAuth roles={['user']}>
                  <User />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </Authenticator>
  );
}

export default App;
