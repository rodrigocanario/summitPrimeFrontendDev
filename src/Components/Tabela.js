import React from 'react'
import { BotaoAdd } from './BotaoAdd'
import { Tfooter } from './Tfooter'
import { TRow } from './TRow'

export const Tabela = (props) => {
  return (
    <section>
      <div id='table-header'>
        <table border="0">
          <thead >
            <tr>
            <th id='th' className='tdIndex'>ITEM</th>
            <th id='th' className='tdSku'>REFERÊNCIA</th>
            <th id='th' >NOME</th>
            <th id='th' className='tdCaixaMaster'>MÚLTIPLO CAIXA MASTER</th>
            <th id='th' className='tdDescontoCaixaMaster'>DESCONTO CAIXA MASTER</th>
            <th id='th' className='tdValor'>VALOR UNITÁRIO</th>
            <th id='th' className='tdQuantidade'>QUANTIDADE</th>
            <th id='th' className='tdPreco'>VALOR</th>
            <th id='th' className='tdEstoque'>ESTOQUE</th>
            </tr>
          </thead>
        </table>
      </div>
      <div id='table-body'>
        <table border="0">
          <tbody >
            {
              props.rows.map((element, index) => {
                return <TRow key={index} index={index} />
              })}
              <tr>
                <td> <BotaoAdd /> </td> 
              </tr>
          </tbody>

        </table>
      </div>
      {props.tfooter ? <div id='table-footer'><table border="0"><Tfooter /></table></div> : ''}
      {/* <div id='table-footer'>
        <table border="0">
          <Tfooter />

        </table>
      </div> */}

    </section>
  )
}
