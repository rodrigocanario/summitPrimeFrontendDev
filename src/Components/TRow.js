import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, trocarSKU } from '../Redux/Actions'
import { getProduto } from '../Utils/callBackend'
import { Quantity } from './Quantity'

export const TRow = (props) => {
    const dispatch = useDispatch()
    const Infos = useSelector(state => state.itens[props.index])
    const tabela = useSelector(state => state.login.tabela)

    const handleEnter = (e) => {
        switch (e.key) {
            case 'Enter':
                // let nextSibling = document.querySelector(
                //     `input[name=input-${props.index + 1}]`
                // )
                // if (nextSibling) {
                //     nextSibling.focus()
                // } else {
                //     (async () => {
                dispatch(addItem())
                //         nextSibling = document.querySelector(
                //             `input[name=input-${props.index + 1}]`
                //         )
                //         nextSibling.focus()
                //     })()
                // }
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
                    dispatch(trocarSKU(response, props.index))

                }
                )
        } else {
            dispatch(trocarSKU({
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
            <td id='td' >{props.index}.</td>
            <td id='td' >
                <input className='table-input' autoComplete="off" name={"input-" + props.index} defaultValue={Infos.sku} onChange={handleChange} onKeyDown={handleEnter} />
            </td>
            <td id='td' className='nome' >{Infos.nome}</td>
            <td id='td' >{Infos.caixaMaster}UN</td>
            <td id='td' >{((Infos.quantidade % Infos.caixaMaster) === 0 && Infos.quantidade > 0) ? '5%' : ''}</td>
            <td id='td' >R${Infos.valorReal}</td>
            <td id='td' ><Quantity index={props.index} /></td>
            <td id='td' >R${Infos.preco}</td>
            <td id='td' >{Infos.estoque > 0 ? "Disponível" : "Indisponível"}</td>
        </tr>
    )
}
