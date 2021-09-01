import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { BotaoNext } from './BotaoNext'

export const Tfooter = () => {
    const itens = useSelector((state) => state.orcamento.itens)
    const [subtotal, setSubtotal] = useState(0)
    const [total, setTotal] = useState(0)
    let pagamentoAntecipado = true
    useEffect(() => {
        let subtot = 0
        itens.forEach(element => {
            subtot= subtot + parseFloat(element.preco)
        })
        setSubtotal(subtot.toFixed(2))
            if(pagamentoAntecipado){
                setTotal((subtotal*0.95).toFixed(2))
            }else{
                setTotal(subtotal)

            }

    }, [itens])
    var Total = 0
    return (
        <tfoot>
            <tr id='tr'>
                <td id='td-footer' className='align-middle'></td>
                <td id='td-footer' className='align-middle'></td>
                <td id='td-footer' className='align-middle'><BotaoNext /></td>
                <td id='td-footer' className='align-middle'></td>
                <td id='td-footer' className='align-middle'>VALOR SUBTOTAL:</td>
                <td id='td-footer' className='align-middle'>R${subtotal}</td>
            </tr>
            
            <tr id='tr'>
                <td id='td-footer' className='align-middle'></td>
                <td id='td-footer' className='align-middle'></td>
                <td id='td-footer' className='align-middle'></td>
                <td id='td-footer' className='align-middle'></td>
                <td id='td-footer' className='align-middle'>
                <input type="checkbox" id="pagamentoAntecipado" name="pagamentoAntecipado"/>
                <label htmlFor="pagamentoAntecipado">PAGAMENTO ANTECIPADO</label>
                </td>
                <td id='td-footer' className='align-middle'>(-R${(subtotal*0.05).toFixed(2)})</td>
            </tr>
            <tr id='tr'>
                <td id='td-footer' className='align-middle'></td>
                <td id='td-footer' className='align-middle'></td>
                <td id='td-footer' className='align-middle'></td>
                <td id='td-footer' className='align-middle'></td>
                <td id='td-footer' className='align-middle'>VALOR TOTAL:</td>
                <td id='td-footer' className='align-middle'>R${total}</td>
            </tr>
        </tfoot>
    )
}
