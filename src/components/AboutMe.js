import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Card, Image, ProgressBar } from 'react-bootstrap';
import ReactBootstrapSlider from 'react-bootstrap-slider';


function AboutMe() {

  return (
    <Container>
      <Col>
        <Card className="text-center">
          <Card.Header><h3>Don Tran</h3></Card.Header>
          <Card.Body>
            <Card.Text>
              I am an aspiring web developer who recent graduated from The George Washing University's boot camp on Full Stack Web Development.
      <br></br>
            </Card.Text>
          </Card.Body>
          <Image roundedCircle className="d-block mx-auto "
            src={require("../images/DSC03937.jpg")} width="200" />
        </Card>
        <br></br>
        <Card className="text-center">
          <Card.Header><h3>Skills</h3></Card.Header>

          <Card.Body className="text-center">

            <Card.Text >
              <Row className="justify-content-center">
                <Col>
                  JavaScript
                  <br></br>
                <ReactBootstrapSlider disabled="disabled" value="8"/>
                </Col>
                <Col>
                  HTML5
                  <br></br>
                <ReactBootstrapSlider disabled="disabled" value="6"/>
                </Col>
                <Col>
                  CSS
                  <br></br>
                <ReactBootstrapSlider disabled="disabled" value="5"/>
                </Col>
              </Row>
              <Row className="justify-content-center">
                  <Col>
                    Bootstrap
                    <br></br>
                <ReactBootstrapSlider disabled="disabled" value="7"/>
                  </Col>
                  <Col>
                    React.js
                    <br></br>
                <ReactBootstrapSlider disabled="disabled" value="7"/>
                  </Col>
                  <Col>
                    Express.js
                    <br></br>
                <ReactBootstrapSlider disabled="disabled" value="10"/>
                  </Col>
              </Row>
              <Row className="justify-content-center">
              <Col>
              MySQL
              <br></br>
                <ReactBootstrapSlider disabled="disabled" value="5"/>
                  </Col>
                  <Col>
                  MongoDB
                  <br></br>
                <ReactBootstrapSlider disabled="disabled" value="3"/>
                  </Col>
                  <Col>
                  Node.js
                  <br></br>
                <ReactBootstrapSlider disabled="disabled" value="7"/>
                  </Col>
              </Row>

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