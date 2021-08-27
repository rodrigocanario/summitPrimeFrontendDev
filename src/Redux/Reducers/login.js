const reducerLogin = (state = { cnpj: 0, razaoSocial: '', isLogged: false, UF: '', tabela: '' }, action) => {
    switch (action.type) {
        case 'LOGIN':

            return { ...state, isLogged: true, cnpj: action.cnpj, razaoSocial: action.razaoSocial, UF: action.UF, tabela: action.tabela, previsao: action.previsao }
        case 'LOGOUT':
            localStorage.removeItem('token')

            return { ...state, cnpj: 0, razaoSocial: '', isLogged: false, UF: '', tabela: '', previsao: 0 }
        default:
            return state
    }
}
export default reducerLogin