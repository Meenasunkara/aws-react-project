import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';

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
  return (
    
    <Authenticator >
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
