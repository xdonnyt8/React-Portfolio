import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "./style.css"


function MyProjects() {

    return (


        <Container >
            <br></br>
            <div className="projects">
                <Card>
                <h2>Project Demo</h2>
                <br></br>
                <strong><a href="#/datematch">Date Match Walkthrough</a></strong>
                {/* <Col>
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
                </Col> */}
                </Card>
            </div>
            <br></br>
            <br></br>

            <div className="projects justify-content-center">

                <Col className="projects2">
                <Card.Header><h2>Here are some of the projects I have worked on</h2></Card.Header>

                    <Card style={{ width: '100%' }}>
                        <Card.Title><strong>Password Generator</strong></Card.Title>

                        <Card.Img variant="top" src={require("../images/password.png")} />
                        <Card.Body>
                            <Card.Text>
                                A simple password generator where user can choose the strength of the password generated.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/xdonnyt8/passwordGenerator">Github Repo</Button>
                            <Button variant="danger" href="https://xdonnyt8.github.io/passwordGenerator/">Live Demo</Button>
                        </Card.Body>
                    </Card>

                    <br></br>

                    <Card style={{ width: '100%' }}>
                    <Card.Title><strong>Fitness Guru</strong></Card.Title>

                        <Card.Img variant="top" src={require("../images/fitness.png")} />
                        <Card.Body>
                            <Card.Text>
                                A simple fitness app that get excerises from an API and let the user choice what exercises that want to see and do.
                            </Card.Text>
                            <Button variant="danger" href="https://github.com/xdonnyt8/Project1">Github Repo</Button>
                            <Button variant="primary" href="https://xdonnyt8.github.io/Project1/">Live Demo</Button>

                        </Card.Body>
                    </Card>

                    <br></br>


                    <Card style={{ width: '100%' }}>
                        <Card.Title><strong>Workout Tracker</strong></Card.Title>
                        <Card.Img variant="top" src={require("../images/tracker.png")} />
                        <Card.Body>
                            <Card.Text>
                                An app that allow you to add an exercise to a workout and able to update those exercises.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/xdonnyt8/workoutTracker">Github Repo</Button>
                        </Card.Body>
                    </Card>

                    <br></br>

                    <Card style={{ width: '100%' }}>
                        <Card.Title><strong>Employee Directory</strong></Card.Title>
                        <Card.Img variant="top" src={require("../images/directory.png")} />
                        <Card.Body>
                            <Card.Text>
                                A react app that takes in an api of random people and allow you to search for their name and sort by alphabetical order or age.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/xdonnyt8/Employee-Directory">Github Repo</Button>
                        </Card.Body>
                    </Card>




                    <br></br>


                    <Card stystyle={{ width: '100%' }}>
                        <Card.Title><strong>Note Taker</strong></Card.Title>

                        <Card.Img variant="top" src={require("../images/note.png")} />
                        <Card.Body>
                            <Card.Text>
                                This is an App that allow user to take notes by using POST, GET, and DELETE and linking the frontend to the backend using express.
                            </Card.Text>
                            <Button variant="primary" href="https://github.com/xdonnyt8/NoteTaker">Github Repo</Button>
                        </Card.Body>
                    </Card>
                </Col>




            </div>

        </Container>
    )
}


export default MyProjects