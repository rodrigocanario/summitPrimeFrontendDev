import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { FooterHome } from '../Components/FooterHome'
import { Tabela } from '../Components/Tabela'

export const Home = () => {
    const login = useSelector(state => state.login)
    const rows = useSelector((state) => state.itens)
    const headers = ['Item', 'Referência', 'Nome', 'Múltiplo Caixa Master', 'Desconto Caixa Master', 'Valor Unitário', 'Quantidade', 'Valor', 'Estoque']


    return (
        <Container >
            <Row style={{ height: "100%", minHeight: '100vh' }} className="justify-content-center">
                <Col sm="auto" className="text-center">
                    <Row>
                        <h1>Bem Vindo à <span style={{ fontFamily: 'fontSummit' }}>Summit Prime</span> <br /> {login.razaoSocial}!</h1>
                        <p>*Pesquise nossos produtos na  <a target='_blank' rel='noreferrer' href='https://summit.com.br'>Plataforma Catalogo</a></p>
                    </Row>
                    <Row>
                        <Tabela headers={headers} rows={rows} tfooter={true} />
                    </Row>
                </Col>
            </Row>
            <FooterHome />
        </Container>
    )
}
