import React from 'react'
import {  Container, Row, Col } from 'react-bootstrap';


function Footer(){

    return(
        <footer>
            <div>
            <Row className="justify-content-md-center">
                <ul className="Links">
                    <ul>
                    <a href="https://github.com/xdonnyt8"><img src={require("../images/github.png")} height="20"></img></a>
                    <a href="https://www.linkedin.com/in/don-tran-073652b9/"><img src={require("../images/linkedin.png")} height="20"></img></a>
                    </ul>
                </ul>
            </Row>

            </div>
        </footer>
    )
}


export default Footer