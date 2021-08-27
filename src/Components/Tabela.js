import React from 'react'
import { useSelector } from 'react-redux'
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
              {
                props.headers.map((element, index) => {
                  return <th id='th' key={index}>{element}</th>
                })}
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
            <td> <BotaoAdd /> </td>
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
