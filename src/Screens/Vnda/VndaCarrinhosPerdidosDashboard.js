import React, { useState } from 'react'
import { Button, Col, Container, ProgressBar, Row } from 'react-bootstrap'
import { getCarrinhoPerdido } from '../../Utils/callBackend'
const XLSX = require('xlsx')

export const VndaCarrinhosPerdidosDashboard = () => {
    let data = []
    let max = 1571
    let buscar = async()=>{
        for (let i = 1; i < max; i++) {
            setCarregando(Math.floor(i/max))
            await getCarrinhoPerdido(i).then((r)=>{
                if(r.data && r.data.items && r.data.items[0]){
                    let id = r.data.id
                    let carrinhos = r.data.items
                    let date = r.data.updated_at
                    for (let j = 0; j < carrinhos.length; j++) {
                        data.push({
                            ID : id,
                            'Data de Criaçao': date,
                            SKU: carrinhos[j].product_reference,
                            'Nome do Item': carrinhos[j].product_name
                        })
                    }
                }
            })
        }
        console.log(data);
    }
const fazerLista = async()=>{
await buscar()
const ws = XLSX.utils.json_to_sheet(data)
const wb = XLSX.utils.book_new()
XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
XLSX.writeFile(wb, 'CarrinhosPerdidos.xlsx')
}
    const [carregando, setCarregando] = useState(0)
    const handleClick = ()=>{
        fazerLista()
    }
    return (
        <>
    <h1 style={{
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    marginTop: '5rem',
    fontSize: '4rem'
    }}>Carrinhos Perdidos</h1>                  
    <Container >
        <Row style={{ height: "100vh" }} className="text-center align-items-center justify-content-center">
                {carregando === 0 ? 
                (<Row className="align-items-center justify-content-center">
                    <Col xs={6}>
                    <Button 
                    onClick={handleClick}
                    style={{padding: '2.5rem 3rem',
                            fontSize: '3.25rem',
                            borderRadius: '.3rem'}} 
                    variant="outline-light" 
                    >Gerar Excel</Button>
                    </Col>
                </Row>)
                : 
                (<Row className="align-items-center justify-content-center">
                    <Col xs={3}>
                    <ProgressBar now={carregando} />
                    </Col>
                </Row> )}
                
                
        </Row>
    </Container>
    </>
    )
}
