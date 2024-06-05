import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer () {
  return (
    <footer className="mt-5 fixed-bottom">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 Galaxy</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
