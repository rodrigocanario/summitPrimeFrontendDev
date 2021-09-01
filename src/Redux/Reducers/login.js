const reducerLogin = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, ...action.infos }

        case 'LOGOUT':
            localStorage.removeItem('orcamento')
            localStorage.removeItem('token')

            return { }
        default:
            return state
    }
}
export default reducerLogin