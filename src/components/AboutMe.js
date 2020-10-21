import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Card, Image } from 'react-bootstrap';


function AboutMe() {

    return(
        <Container>
        <Col>
        <Card className="text-center">
        <Card.Header>About Me</Card.Header>

        <Image roundedCircle className="d-block mx-auto "
 src={require("../images/DSC03937.jpg") } width="200" />

  <Card.Body>
    <Card.Title>Don Tran</Card.Title>
    <Card.Text>
      I am an aspiring full stack developer
    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted"></Card.Footer>
</Card>
    </Col>
    </Container>


    )
}


export default AboutMe