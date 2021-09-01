import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import { VndaTable } from './VndaTable/VndaTable'

export const VndaDashboard = () => {
    return (
        <Container >
        <Row style={{ height: "100vh" }} className=" text-center align-items-center justify-content-center">
            <Col>
            <Row>
                <Col>
                <h1>Pedidos Venda</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                <VndaTable/>
                </Col>
            </Row>
            </Col>
        </Row>
    </Container>
    )
}
