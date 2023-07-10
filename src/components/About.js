import React, { useState } from 'react';
import { useAuthenticator, Heading, Button } from '@aws-amplify/ui-react';

export function About() {
  const { route } = useAuthenticator((context) => [context.route]);
  const [showTeamDetails, setShowTeamDetails] = useState(false);
  const [showCompanyDetails, setShowCompanyDetails] = useState(false);

  const toggleTeamDetails = () => {
    setShowTeamDetails(!showTeamDetails);
  };

  const toggleCompanyDetails = () => {
    setShowCompanyDetails(!showCompanyDetails);
  };

  const message =
    route === 'authenticated' ? (
      <>
        <Heading level={1}>About</Heading>
        <Button onClick={toggleTeamDetails} style={{ backgroundColor: 'white ', color: 'purple' }}>
          {showTeamDetails ? 'Our Team' : 'Our Team'}
        </Button>
        {showTeamDetails && (
          <div>
            <p>Team details</p>
            <strong>Project Manager:</strong> Arun Gunjari

            <strong>Development Team:</strong>
            <ul style={{ listStyleType: 'none' }}>
              <li>Ambika</li>
              <li>Arun N</li>
              <li>Meenakshi Sunkara</li>
              <li>Ophi</li>
              <li>Prathima</li>
              <li>Pratibha</li>
              <li>Sowmya</li>
              <li>Shravani</li>
              <li>Sowjanya</li>
            </ul>
          </div>
        )}
        <Button onClick={toggleCompanyDetails} style={{ backgroundColor: 'white ', color: 'purple' }}>
          {showCompanyDetails ? 'Company' : ' Company'}
        </Button>
        {showCompanyDetails && (
          <div>
            <p >WE ARE THE CONVERGENCE POINT OF APP DEVELOPMENT FOR IOT (INTERNET OF THINGS)</p>
            
With machines and internet making a permanent base in our routine lifestyle,
 it is not surprising that app development for IoT is a need of the hour. 
 In the Internet of Thingsa.k.a IoT physical devices and internet have joined forces to make our life much easier.
 With IoT coming to life, our way of interacting with the machines and devices is changing forever.

The belief of connecting humans with machines using the most effective processes is something that has driven MeganSoft to plunge into app development for IoT devices.

To be true to our motto of being your partners from alpha to ultimate we don't want to leave any chance of equipping you with the best of technologies,
whether it is for home automation or office automation, the goal is to take a new approach for the phrase “Going Digital”.
          </div>
        )}
      </>
    ) : (
      'Loading...'
    );

  return <>{message}</>;
}
