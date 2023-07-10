// components/Protected.js
import React, { useState } from 'react';
import { useAuthenticator, Heading, Button } from '@aws-amplify/ui-react';

export function About() {
  const { route } = useAuthenticator((context) => [context.route]);
  const [showTeamDetails, setShowTeamDetails] = useState(false);
  const [showCompanyDetails, setShowCompanyDetails] = useState(false);

  const message =
    route === 'authenticated' ? (
      <>
        <Heading level={1}>About</Heading>
        <Button onClick={() => setShowTeamDetails(true)}>Our Team</Button>
        {showTeamDetails && (
          <div>
            <p>Team details</p>
            {/* Include the content for the team details */}
          </div>
        )}
        <Button onClick={() => setShowCompanyDetails(true)}>Company</Button>
        {showCompanyDetails && (
          <div>
            <p>Company details</p>
            {/* Include the content for the company details */}
          </div>
        )}
      </>
    ) : (
      'Loading...'
    );

  return <>{message}</>;
}
