import React, { useState } from 'react'
import { Button, Col, Container, ProgressBar, Row } from 'react-bootstrap'
import { getCarrinhoPerdido } from '../../Utils/callBackend'
const XLSX = require('xlsx')

export const VndaCarrinhosPerdidosDashboard = () => {
    let data = []
    const [max, setMax] = useState(0)
    const [min, setMin] = useState(0)

    let buscar = async()=>{
        for (let i = min; i <= max; i++) {
            setCarregando(Math.floor(((i-min)/(max-min))*100))
            await getCarrinhoPerdido(i).then((r)=>{
                if(r && r.items && r.items[0]){
                    let id = r.id
                    let carrinhos = r.items
                    let date = r.updated_at
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
            .catch(()=>{})
        }
        setCarregando(100)
        // console.log(data);
    }
const fazerLista = async()=>{
    await buscar()
    console.log(data);
    const ws = XLSX.utils.json_to_sheet(data)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
    XLSX.writeFile(wb, 'CarrinhosPerdidos.xlsx')
}
    const [carregando, setCarregando] = useState('')
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
            <Row className="text-center align-items-center justify-content-center">
            <Col xs={2}>
                <h2>Min.</h2>
            <input className='input1' defaultValue={min} onChange={(e)=>{setMin(e.target.value)}}/>
            </Col>
            <Col xs={2}>
                <h2>Max.</h2>
            <input className='input1' defaultValue={max} onChange={(e)=>{setMax(e.target.value)}}/>
            </Col>
                {carregando === '' ? 
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
                (<Row className="text-center align-items-center justify-content-center">
                    <Col xs={4}>
                        <h1>{carregando}%</h1>
                    <ProgressBar animated now={carregando} />
                    </Col>
                </Row> )}
            </Row>
        </Row>
    </Container>
    </>
    )
}
