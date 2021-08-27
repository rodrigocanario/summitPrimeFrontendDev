import React, { useState } from 'react'
import { Col, Container, Form, Row, Spinner, Button } from 'react-bootstrap'
import InputMask from 'react-input-mask'
import { fazerCadastro } from '../../Utils/callBackend'

export const AdminDashboard = () => {
    const [form, setForm] = useState({ cnpj: '', senha: '', previsaoEntrega: '', tabela: '' })
    const [loading, setLoading] = useState(false)
    const changeForm = (e) => {
        let { name, value } = e.target
        if (name !== 'tabela') {
            value = value.replace(/[^0-9]/g, '')
        }
        setForm({ ...form, [name]: value })
    }
    const submitForm = (e) => {
        e.preventDefault()
        setLoading(true)
        fazerCadastro(form)
        window.location.reload()

    }
    return (
        <Container >
            <Row style={{ height: "100vh" }} className="align-items-center justify-content-center">
                <Col>
                    <Row className="align-items-center justify-content-center">
                        <Col xs={12} id="login-background" sm="auto" className="text-center">
                            <Row>
                                <h1 id='login-titulo'>Cadastro Cliente</h1>
                            </Row>
                            <Row>
                                <Form onSubmit={submitForm}>
                                    <Row>

                                        <Col>
                                            <Row>
                                                <label style={{ color: 'white' }} >Cnpj</label>
                                                <InputMask mask='99.999.999/9999-99' className='login-input' name='cnpj' placeholder='CNPJ' onChange={changeForm} value={form.cnpj} />
                                            </Row>
                                            <Row>
                                                <label style={{ color: 'white' }}>Senha</label>
                                                <input className='login-input' name='senha' placeholder='Senha' onChange={changeForm} value={form.senha} />
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <label style={{ color: 'white' }}>Previsão de entrega</label>
                                                <input className='login-input' name='previsaoEntrega' placeholder='Previsão de Entrega' onChange={changeForm} value={form.previsaoEntrega} type='number' />
                                            </Row>
                                            <Row>
                                                <label style={{ color: 'white' }}>Tabela</label>
                                                <select className='login-input' name='tabela' onChange={changeForm}>
                                                    <option style={{ color: 'black' }} value='padrao'>Padrão</option>
                                                    <option style={{ color: 'black' }} value='naoOptante'>Não optante</option>
                                                    <option style={{ color: 'black' }} value='optante'>Optante</option>
                                                    <option style={{ color: 'black' }} value='suframa'>Suframa</option>

                                                </select>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row style={{ minHeight: '83px' }} className="align-items-center justify-content-center">
                                        {loading === true ? <Spinner animation='border' style={{ color: 'white' }} /> : <Button id='login-button' type='submit' variant='outline-dark' size="sm">Cadastrar</Button>}
                                    </Row>
                                </Form>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
