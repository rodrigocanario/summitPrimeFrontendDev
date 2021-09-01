import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, trocarItem} from '../Redux/Actions'
import { getProduto } from '../Utils/callBackend'
import { Quantity } from './Quantity'

export const TRow = (props) => {
    const dispatch = useDispatch()
    const Infos = useSelector(state => state.orcamento.itens[props.index])
    const tabela = useSelector(state => state.login.tabela)
    const desconto = useSelector(state => state.login.desconto)

    const handleEnter = (e) => {
        switch (e.key) {
            case 'Enter':
                let nextSibling = document.querySelector(
                    `input[name=input-${props.index + 1}]`
                )
                if (nextSibling) {
                    nextSibling.focus()
                } else {
                    (async () => {
                await dispatch(addItem())
                        nextSibling = document.querySelector(
                            `input[name=input-${props.index + 1}]`
                        )
                        nextSibling.focus()
                    })()
                }
                break;
            case 'ArrowRight':
                let SiblingRight = document.querySelector(
                    `input[name=input-quantity-${props.index}]`
                )
                SiblingRight.focus()
                break;
            case 'ArrowUp':
                let SiblingUp = document.querySelector(
                    `input[name=input-${props.index - 1}]`
                )
                if (SiblingUp) {
                    SiblingUp.focus()
                }
                break;
            case 'ArrowDown':
                let SiblingDown = document.querySelector(
                    `input[name=input-${props.index + 1}]`
                )
                if (SiblingDown) {
                    SiblingDown.focus()
                }
                break;
            default:
                break;
        }
    }

    const handleChange = (e) => {
        if (e.target.value) {
            getProduto({
                sku: e.target.value,
                tabela: tabela
            })
                .then((response) => {
                    dispatch(trocarItem(response, props.index, desconto))

                }
                )
        } else {
            dispatch(trocarItem({
                "valor": '',
                "uf": "",
                "nome": "",
                "sku": 0,
                "multiplo": 0
            }, props.index))
        }
    }

    return (
        <tr>
            <td id='td' className='tdIndex' >{props.index+1}.</td>
            <td id='td' className='tdSku'>
                <input className='table-input' autoComplete="off" name={"input-" + props.index} defaultValue={Infos.sku} onChange={handleChange} onKeyDown={handleEnter} />
            </td>
            <td id='td' className='nome' >{Infos.nome}</td>
            <td id='td' className='tdCaixaMaster'>{Infos.caixaMaster}UN</td>
            <td id='td' className='tdDescontoCaixaMaster'>{((Infos.quantidade % Infos.caixaMaster) === 0 && Infos.quantidade > 0) ? '5%' : ''}</td>
            <td id='td' className='tdValor'>R${Infos.valorReal}</td>
            <td id='td' className='tdQuantidade'><Quantity index={props.index} /></td>
            <td id='td' className='tdPreco'>R${Infos.preco}</td>
            <td id='td' className='tdEstoque'>{Infos.estoque > 0 ? "Disponível" : "Indisponível"}</td>
        </tr>
    )
}
