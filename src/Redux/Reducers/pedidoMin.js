const reducerPedMin = (state = { UF: '', valor: 0 }, action) => {
    switch (action.type) {
        case 'PEDIDOMIN':

            return { ...state, UF: action.UF, valor: action.valor }

        default:
            return state
    }
}
export default reducerPedMin