import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { VndaTable } from './VndaTable/VndaTable'

export const VndaDashboard = () => {
    return (
        <Container >
        <Row style={{ height: "100vh" }} className="align-items-center justify-content-center">
            <Col>
                <VndaTable/>
            </Col>
        </Row>
    </Container>
    )
}
