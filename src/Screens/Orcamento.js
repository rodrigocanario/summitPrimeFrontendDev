import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, pedidoMin } from '../Redux/Actions';
import { Login } from '../Screens/Login';
import { Pages } from '../Screens/Pages';
import { isAuth, pedidoMin as pedMin } from '../Utils/callBackend';

export const Orcamento = () => {
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state => state.login.isAuth)
    const Infos = useSelector(state => state.itens)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        isAuth()
            .then((response) => {
                if (response.isAuth) {
                    dispatch(login(response))
                    pedMin(response.UF)
                        .then(response => {
                            dispatch(pedidoMin(response.Estado, response.valor))
                            setLoading(false)
                        })
                }
                else {
                    setLoading(false)
                }
            })
            .catch(() => {
                dispatch(logout())
                window.location.reload()
            })
    }, [dispatch])

    useEffect(() => {
        localStorage.setItem('produtos', JSON.stringify(Infos))


    }, [Infos])
    return (
        loading === true ? "" : (isAuthenticated === true ? <Pages /> : <Login />)

    )
}
