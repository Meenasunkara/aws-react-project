import { useLocation, Navigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

export function RequireAuth({ children }) {
  const location = useLocation();
  const { user } = useAuthenticator((context) => [context.user]);

  if (!user || !user.signInUserSession) {
    // User is not logged in, redirect to login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check user role
  const roles = user.signInUserSession.idToken.payload['cognito:groups'] || [];
  const isAdmin = roles.includes('admin');

  if (isAdmin) {
    // Render the admin dashboard or component
    return (
      <>
      
        <h1>Welcome, Admin!</h1>
        {/* Add additional admin-specific content here */}
        {children}
      </>
    );
  } else {
    // Render the user dashboard or component
    return (
      <>
        <h1>Welcome, User!</h1>
        {/* Add additional user-specific content here */}
        {children}
      </>
    );
  }
}
