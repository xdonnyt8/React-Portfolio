import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import "./style.css"

function ContactMe() {

    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')


    const handleOnClick = e => {
        e.preventDefault();
        window.open(`mailto:mr.dontran@gmail.com?subject=${subject}&body=${name}: ${message}`)
    }
    return (
        <Container>

            <Row>
                <Col>
                <Card>
                    <Card.Body>
                    <Card.Title><h3>My links</h3></Card.Title>
                    <Card.Link href="https://github.com/xdonnyt8">GitHub</Card.Link>
                    <Card.Link href="https://www.linkedin.com/in/don-tran-073652b9/">Linkedin</Card.Link>
                    <Card.Link href="https://www.facebook.com/PineappleS2">Facebook</Card.Link>
                    <Card.Title><h3>Phone</h3></Card.Title>
                    <Card.Text>703-507-3002 <br></br>
                        (please leave me a message if I couldn't pick up your call)</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card id="contact">
                <Form >
                    <Card.Body>
                    <h4>You can send me an email using this form!</h4>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} defaultValue="" type="text" onChange={e => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Subject:</Form.Label>
                        <Form.Control value={subject} defaultValue="" type="email" onChange={e => setSubject(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Message:</Form.Label>
                        <Form.Control value={message} defaultValue="" as="textarea" row="5" onChange={e => setMessage(e.target.value)} />
                    </Form.Group>
                    <Button type="submit" onClick={handleOnClick}>Submit</Button>
                    </Card.Body>
                </Form>
                </Card>
                </Col>
            </Row>


        </Container>

    )
}


export default ContactMe