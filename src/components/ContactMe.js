import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';


function ContactMe() {

    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')


    const handleOnClick = e => {
        e.preventDefault();
        window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`)
    }
    return (
        <Container>

            <Row>
                <Col>
                <Card>
                    <Card.Body>
                    <Card.Title><h1>Contact Me @</h1></Card.Title>
                    <Card.Link href="https://github.com/xdonnyt8">GitHub</Card.Link>
                    <Card.Link href="https://www.linkedin.com/in/don-tran-073652b9/">Linkedin</Card.Link>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Form>
                    <h4>You can send me a message using this form!</h4>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} defaultValue="" type="text" onChange={e => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control value={email} defaultValue="" type="email" onChange={e => setEmail(e.target.value)} />
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
                </Form>
                </Col>
            </Row>


        </Container>

    )
}


export default ContactMe