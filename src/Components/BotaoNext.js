import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react'
import { Fragment } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { nextPage } from '../Redux/Actions'
import { enviarPedido } from '../Utils/callBackend'

export const BotaoNext = () => {
    const dispatch = useDispatch()
    const cnpj = useSelector(state => state.login.cnpj)
    const produtos = useSelector(state => state.itens)
    const [showModal, setShowModal] = useState(false)

    const handleOpen = () => setShowModal(true)
    const handleClose = () => setShowModal(false)


    const handleNext = () => {
        let produtosArr = []
        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].quantidade > 0) {
                produtosArr.push({
                    "Numero do Item": i + 1,
                    "Referencia": produtos[i].sku,
                    "Descricao": produtos[i].nome,
                    "Multiplo de Venda": produtos[i].multiplo,
                    "Quantidade": produtos[i].quantidade,
                    "Valor Unitario": produtos[i].valor,
                    "Valor Total": produtos[i].quantidade * produtos[i].valor
                })
            }
        }
        let data = {
            cnpj,
            produtos: produtosArr
        }
        enviarPedido(data)
        dispatch(nextPage())
    }
    return (
        <Fragment>
            <Modal show={showModal} animation={true} onHide={handleClose} centered>
                <Modal.Header className='align-items-center justify-content-center'>
                    <Modal.Title>
                        Enviar Orçamento?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="justify-content-evenly">
                        <Col xs={2}>
                            <Button variant="primary" onClick={handleNext}>
                                Sim
                            </Button>
                        </Col>
                        <Col xs={2}>
                            <Button variant="secondary" onClick={handleClose}>
                                Não
                            </Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
            <Button variant="outline-light" onClick={handleOpen} >Enviar Orçamento</Button>
        </Fragment>
    )
}
