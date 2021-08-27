import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { showVndaModal } from '../../../Redux/Actions'

export const VndaTableRow = (props) => {
    const dispatch = useDispatch()
    const pedido = useSelector(state => state.vndaPedidos[props.index])
    const openVndaTableModal = ()=>{
        dispatch(showVndaModal(pedido))
    }
    return (
    <tr>
        <td id='td'><button class='buttonVndaTableRow' onClick={openVndaTableModal}>{pedido['Nome do cliente'] }</button></td>
        <td id='td'>{pedido['CNPJ'] }</td>
        <td id='td'>{pedido['Agentes'] }</td>
        <td id='td'><Button value={`button`}>Enviar</Button></td>
    </tr>
    )
}
