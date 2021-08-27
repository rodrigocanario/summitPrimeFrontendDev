import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Obrigado = () => {
    return (
        <Container >
            <Row className="justify-content-center align-items-center">
                <Col sm="auto" className="text-center">
                    <Row>
                        <h1>Muito Obrigado!</h1>
                        <p> Um analista de suporte entrará em contato em breve.</p>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
