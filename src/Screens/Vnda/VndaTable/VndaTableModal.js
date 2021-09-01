
import React from 'react'
import {Col, Modal, Row} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { hideVndaModal } from '../../../Redux/Actions'
import { BsPersonBoundingBox} from 'react-icons/bs';
import {SiRedhat} from 'react-icons/si'


export const VndaTableModal = () => {
    const vndaModal = useSelector(state => state.vndaModal)
    const dispatch = useDispatch()
    let handleHide = ()=>{
        dispatch(hideVndaModal())
    }

    return (
        <Modal className='vndaModal' show={vndaModal.show} animation={true} onHide={handleHide} centered>
                <Modal.Header className=' vndaModalHeader align-items-cente justify-content-left'>
                    <Modal.Title>
                        PEDIDO {vndaModal.pedido['ID do Orçamento']}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='vndaModalBody'>
                    <Row>
                        <Col xs={6}>
                            <Row className='modalHeaderButtons'>
                                INFORMAÇÕES GERAIS
                            </Row>
                            <Row style={{padding:'0px 20px 10px 20px'}}>
                                <button className='buttonModal'><BsPersonBoundingBox/>  Info cliente</button>
                            </Row>
                            <Row style={{padding:'0px 20px 10px 20px'}}>
                                <button className='buttonModal'><SiRedhat/>  Info Agente</button>
                            </Row>
                            <Row style={{padding:'0px 20px 10px 20px'}}>
                                <button className='buttonModal'>$  Info Pedido</button>
                            </Row>
                        </Col>
                        <Col xs={6}>
                            Area 2
                        </Col>
                    </Row>
                    {/* <Tabs 
                        id="controlled-tab-example"
                        activeKey={tab}
                        onSelect={(k) => setTab(k)}
                        className="mb-3">
                        <Tab eventKey="Cliente" title="Cliente">
                           <div style={{textTransform: 'capitalize'}}> Nome: {vndaModal.pedido['Nome do cliente']}</div>
                            Telefone: {vndaModal.pedido['Telefone']}<br/>
                            Email: {vndaModal.pedido['Email']}<br/>
                            CNPJ: {vndaModal.pedido['CNPJ']}<br/>
                            Cidade/UF: {vndaModal.pedido['Cidade']+'/'+vndaModal.pedido['Estado']}
                        </Tab>
                        <Tab eventKey="Agente" title="Agente">
                        <div style={{textTransform: 'capitalize'}}> Nome: {vndaModal.pedido['Agentes']}</div>
                            Codigo: {vndaModal.pedido['Código do agente']}<br/>
                            Email: {vndaModal.pedido['Nome do cliente']}<br/>
                            {vndaModal.pedido['Link do agente']? `Link: ${vndaModal.pedido['Link do agente']}` : ''}
                            
                        </Tab>
                        <Tab eventKey="Pedido" title="Pedido">
                            ID: {vndaModal.pedido['ID do Orçamento']}<br/>
                            Data de criacao: {vndaModal.pedido['Data de criação']}<br/>
                            Produtos: <br/> 
                            <VndaTableModalProdutos/>
                        </Tab>
                    </Tabs> */}
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={handleHide}>
                        Salvar e Enviar Email
                    </Button>
                </Modal.Footer> */}
            </Modal>
    )
}
