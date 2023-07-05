// components/ProtectSecond.js
import { useAuthenticator, Heading } from '@aws-amplify/ui-react';


export function Contact() {
  const { route } = useAuthenticator((context) => [context.route]);

  const message =
    route === 'authenticated' ? '' : 'Loading...';
  return <Heading level={1}>{message}</Heading>;
}