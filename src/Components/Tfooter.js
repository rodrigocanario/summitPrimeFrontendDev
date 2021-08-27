import React from 'react'
import { useSelector } from 'react-redux'
import { BotaoAdd } from './BotaoAdd'
import { BotaoNext } from './BotaoNext'

export const Tfooter = () => {
    const itens = useSelector((state) => state.itens)
    var Total = 0
    return (
        <tfoot>
            <tr id='tr'>
                <td id='td-footer' className='align-middle'></td>
                <td id='td-footer' className='align-middle'></td>
                <td id='td-footer' className='align-middle'><BotaoNext /></td>
                <td id='td-footer' className='align-middle'></td>
                <td id='td-footer' className='align-middle'>VALOR TOTAL:</td>
                <td id='td-footer' className='align-middle'>R${itens.forEach(element => {
                    Total = Total + parseFloat(element.preco)
                })
                }{(Math.round(Total * 100) / 100).toFixed(2)}</td>
            </tr>
        </tfoot>
    )
}
