// components/Layout.js
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator, Button, Heading, View } from '@aws-amplify/ui-react';

export function Layout() {
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  const navigate = useNavigate();

  function logOut() {
    signOut();
    navigate('/login');
  }
  return (
    <>
      <nav>
        <Button onClick={() => navigate('/Home')} style={{ backgroundColor: 'white ', color: 'purple' }} >Home</Button>
        <Button onClick={() => navigate('/About')} style={{ backgroundColor: 'white ', color: 'purple' }}> About </Button>
        <Button onClick={() => navigate('/Contact')} style={{ backgroundColor: 'white ', color: 'purple' }}> Contact</Button>
         
        
        {route !== 'authenticated' ? (
          <Button onClick={() => navigate('/login')}>Login</Button>
        ) : (
          <Button onClick={() => logOut()}style={{ backgroundColor: 'white ', color: 'purple' }}>Logout</Button>
        )}
      </nav>
      <Heading level={1}>IOT App</Heading>
      <View>
        {route === 'authenticated' ? 'You are logged in!' : 'Please Login!'}
      </View>

      <Outlet />
    </>
  );
}