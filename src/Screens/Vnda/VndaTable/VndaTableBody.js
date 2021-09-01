import React from 'react'
import { useSelector } from 'react-redux'
import { VndaTableRow } from './VndaTableRow'

export const VndaTableBody = () => {
    const pedidos = useSelector(state => state.vndaPedidos)
    return (
        <div id='table-body'>
        <table border="0">
          <tbody >
              {pedidos.map((pedido, index)=>{
                  return <VndaTableRow key={index} index={index} />

              })}
          </tbody>
        </table>
      </div>
    )
}
