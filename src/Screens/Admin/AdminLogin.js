import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, Row, Spinner } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { adminLogin } from '../../Redux/Actions'
const callBackend = require('../../Utils/callBackend')

export const AdminLogin = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({ user: '', senha: '' })
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const changeForm = (e) => {
        let { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const submitForm = (e) => {
        e.preventDefault()
        setLoading(true)
        callBackend.adminLogin(form)
            .then((response) => {
                console.log(response);
                if (response && response.token) {
                    dispatch(adminLogin())
                    setLoading(false)
                } else {
                    setError(true)
                    setLoading(false)
                }
            })
    }

    return (
        <Container >
            <Row style={{ height: "100vh" }} className="align-items-center justify-content-center">
                <Col>
                    <Row className="align-items-center justify-content-center">
                        <Col>
                            <Row className="align-items-start justify-content-center">
                                <Col xs={6}>
                                    <Row className="align-items-center justify-content-center">

                                        <Image src='logo.png' id='summit-img' alt='summit-logo' fluid />


                                        <h1 className='text-nowrap' id='summit-titulo'>Summit Prime </h1>
                                        <p>Admin</p>

                                    </Row>

                                </Col>

                            </Row>
                        </Col>
                    </Row>
                    <Row className="align-items-center justify-content-center">
                        <Col xs={12} id="login-background" sm="auto" className="text-center">
                            <Row>
                                <h1 id='login-titulo'>Faça seu login</h1>
                            </Row>
                            <Row>
                                <Form onSubmit={submitForm}>
                                    <Row>
                                        <input className='login-input' name='user' placeholder='Usuário' onChange={changeForm} value={form.user} />
                                    </Row>
                                    <Row>
                                        <input className='login-input' name='senha' placeholder='Senha' onChange={changeForm} value={form.senha} type='password' />
                                    </Row>
                                    <Row>
                                        {error === true ? <p style={{ color: 'red' }}>Usuário ou Senha Inválido</p> : <p style={{ color: 'transparent' }}>.</p>}
                                    </Row>
                                    <Row style={{ minHeight: '83px' }} className="align-items-center justify-content-center">
                                        {loading === true ? <Spinner animation='border' style={{ color: 'white' }} /> : <Button id='login-button' type='submit' variant='outline-dark' size="sm">Login</Button>}
                                    </Row>
                                </Form>
                            </Row>
                            <Row>

                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
