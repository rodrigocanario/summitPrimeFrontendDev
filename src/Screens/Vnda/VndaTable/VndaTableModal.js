import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export const VndaTableModal = () => {
    const vndaModal = useSelector(state => state.vndaModal)
    return (
        <Modal show={vndaModal.show} animation={true}  centered>
                <Modal.Header className='align-items-center justify-content-center'>
                    <Modal.Title>
                        Pedido {vndaModal.pedido.id.toUpperCase()}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="justify-content-evenly">
                        <Col xs={2}>
                            <Button variant="primary" >
                                Sim
                            </Button>
                        </Col>
                        <Col xs={2}>
                            <Button variant="secondary" >
                                Não
                            </Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
    )
}
