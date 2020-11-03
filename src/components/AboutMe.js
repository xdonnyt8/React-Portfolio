import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Card, Image } from 'react-bootstrap';


function AboutMe() {

  return (
    <Container>
      <Col>
        <Card className="text-center">
          <Card.Header><h3>Don Tran</h3></Card.Header>
          <Card.Body>
            <Card.Text>
              I am an aspiring full stack web developer based in Springfield, Virginia.
      <br></br>
            </Card.Text>
          </Card.Body>
          <Image roundedCircle className="d-block mx-auto "
            src={require("../images/DSC03937.jpg")} width="200" />
        </Card>
        <br></br>
        <Card className="text-center">
          <Card.Header><h3>Education</h3></Card.Header>

          <Card.Body>
            <Card.Title>Certification in Full Stack Web Development</Card.Title>
            <Card.Text>
              The George Washington University (May 2020-Oct 2020)
            </Card.Text>
            <Card.Title>Bachelor of Science in Chemistry</Card.Title>
            <Card.Text>
              Virginia Commonwealth University (Aug 2012 - Dec 2016)
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
        <br></br>
        <Card className="text-center">
          <Card.Header>You can access my resume with the following link below</Card.Header>
          <Card.Body>
            <Card.Title><a href="https://docs.google.com/document/d/1bNANkgBIDBECZv37bLtcr6DAAScD5wVohPrfDxLHnxs/edit?usp=sharing">Don Tran's Resume</a></Card.Title>
            <Card.Text>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>

        

      </Col>
    </Container>


  )
}


export default AboutMe