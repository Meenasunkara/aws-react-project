// components/Protected.js
import { useAuthenticator, Heading } from '@aws-amplify/ui-react';
export function About() {
  const { route } = useAuthenticator((context) => [context.route]);

  const message =
    route === 'authenticated' ? 'About the IOT Dashboard' : 'Loading...';
  return <Heading level={1}>{message}</Heading>;
}