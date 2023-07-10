import { useAuthenticator } from '@aws-amplify/ui-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
export function Home() {
  const { route } = useAuthenticator((context) => [context.route]);

  const message =
    route === 'authenticated' ? '' : 'Loading...';

  return (
    <Container>
      <Row className="px-4 my-5">
        <Col xs={4} sm={6}>
          <Image src="" />
        </Col>
        <Col sm={6}>
          <h1 className="font-weight-light">IOT Dashboard Home page</h1>
          <p className="mt-4">{message}</p>
          <Link to="/devices">
          <DropdownButton id="dropdown-item-button" title="View Devices">
          <Dropdown.Menu>
          <p> <Dropdown.Item as="button">Device1</Dropdown.Item></p>
          <p> <Dropdown.Item as="button">Device2</Dropdown.Item> </p> 
          <p> <Dropdown.Item as="button">Device3</Dropdown.Item> </p> 
          </Dropdown.Menu> 
        </DropdownButton>
        </Link>
       </Col>
      </Row>
    </Container>
  );
}

export default Home;
