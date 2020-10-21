import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


function MyProjects() {

    return (

        <Container>
            <br></br>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require("../images/date.png")} />
                        <Card.Body>
                            <Card.Title>Date Match</Card.Title>
                            <Card.Text>
                            This is a dating site to help connect people. A user will post a date that they wish to take someone on. Other users can browse through the posted dates and notify the poster if they are interested in the date. Users can see the profiles of those who have expressed interest in their date posts. Welcome and enjoy! 
                            </Card.Text>
                            <Button variant="primary" href="https://mighty-coast-42770.herokuapp.com/">Live Demo</Button>
                            <Button variant="danger" href="https://github.com/xdonnyt8/DateMatch">Github Repo</Button>

                        </Card.Body>
                    </Card>
                </Col>
            
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require("../images/tracker.png")} />
                        <Card.Body>
                            <Card.Title>Workout Tracker</Card.Title>
                            <Card.Text>
                            An app that allow you to add an exercise to a workout and able to update those exercises.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/xdonnyt8/workoutTracker">Github Repo</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require("../images/directory.png")} />
                        <Card.Body>
                            <Card.Title>Employee Directory</Card.Title>
                            <Card.Text>
                                A react app that takes in an api of random people and allow you to search for their name and sort by alphabetical order or age.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/xdonnyt8/Employee-Directory">Github Repo</Button>
                        </Card.Body>
                    </Card>
                </Col>
            
            </Row>

            <br></br>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require("../images/note.png")} />
                        <Card.Body>
                            <Card.Title>Note Taker</Card.Title>
                            <Card.Text>
                            This is an App that allow user to take notes by using POST, GET, and DELETE and linking the frontend to the backend using express.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/xdonnyt8/NoteTaker">Github Repo</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require("../images/fitness.png")} />
                        <Card.Body>
                            <Card.Title>Fitness Guru</Card.Title>
                            <Card.Text>
                                A simple fitness app that get excerises from an API and let the user choice what exercises that want to see and do.
                            </Card.Text>
                            <Button variant="danger" href="https://github.com/xdonnyt8/Project1">Github Repo</Button>
                            <Button variant="primary" href="https://xdonnyt8.github.io/Project1/">Live Demo</Button>

                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require("../images/password.png")} />
                        <Card.Body>
                            <Card.Title>Password Generator</Card.Title>
                            <Card.Text>
                                A simple password generator where user can choose the strength of the password generated.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/xdonnyt8/passwordGenerator">Github Repo</Button>
                            <Button variant="danger" href="https://xdonnyt8.github.io/passwordGenerator/">Live Demo</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}


export default MyProjects