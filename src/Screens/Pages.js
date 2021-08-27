import React from 'react'
import { useSelector } from 'react-redux'
import { Home } from './Home'
import { Obrigado } from './Obrigado'

export const Pages = () => {
    const pages = useSelector(state => state.pages)
    return (
        pages === 0 ? <Home /> : <Obrigado />
    )
}
