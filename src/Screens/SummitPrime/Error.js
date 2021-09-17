import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Error = () => {
    return (
        <Container >
        <Row  style={{ height: "100%", minHeight: '100vh' }} className="justify-content-center align-items-center">
            <Col sm="auto" className="text-center">
                <Row>
                <h1>Pagina Nao Existe</h1>
                </Row>
            </Col>
        </Row>
    </Container>
    )
}
