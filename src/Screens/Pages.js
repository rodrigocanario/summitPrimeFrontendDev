import React from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../Components/Header'
import { Error } from './Error'
import { Home } from './Home'
import { MeusOrcamentos} from './MeusOrcamentos'
import { Obrigado } from './Obrigado'

export const Pages = () => {
    const pages = useSelector(state => state.pages)
    return (
        <>
        <Header/>
        {(() => {
            switch (pages) {
                                case 'home':  return <Home />;
                                case 'obrigado': return <Obrigado />;
                                case 'meusOrcamentos': return <MeusOrcamentos/>;
                                default: return <Error/>;
                            }
        })()}
        </>
    )
}
