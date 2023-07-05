import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Devices() {
  return (
    <Container>
      <Row className="px-4 myp-5">
        <Col>
          <h1>Device Details</h1>
        </Col>
      </Row>
      <Row>
        <Col className="px-2 my-2">
          <Card style={{ width: '12rem' }}>
            <Card.Img src="/img/iot.jpg" variant="top" />
            <Card.Body>
              <Card.Title>Device1</Card.Title>
              <Card.Text className="text-center">
                <strong>Location:</strong> Sample Location<br />
                <strong>Type:</strong> Sample Device Type<br />
                <strong>Humidity:</strong> Sample Humidity<br />
                <strong>Light Status:</strong> Sample Light Status<br />
                <strong>Temperature:</strong> Sample Room Temperature
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Devices;
