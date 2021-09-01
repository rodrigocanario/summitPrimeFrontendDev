import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
const csv2json = require('csvjson-csv2json')

export const VndaTableModalProdutos = () => {
    const [produtos, setProdutos] = useState([])
    const csv = useSelector(state => state.vndaModal.pedido['CSV'])
    useEffect(() => {
        if(csv){
            let json = csv2json(csv);
            console.log(json);
            setProdutos(json)

        }
    }, [csv])
    return (
        <Table size="sm">
        <thead>
          <tr>
            <th>Referencia</th>
            <th>Produtos</th>
            <th>Quantitade</th>
          </tr>
        </thead>
        <tbody>
            {produtos.map((produto, index)=>{
                return (
                    <tr key={index}>
                        <td>{produto['Referência']}</td>
                        <td> {produto['Produtos']} </td>
                        <td>{produto['Quantidade']}</td>
                    </tr>
                )
            })}
        </tbody>
      </Table>
    )
}
