const reducerVndaPedidos = (state = [], action) => {
    switch (action.type) {
        case 'UPDATEVNDAPEDIDOS':
            return [...state, action.pedido]
        case 'CLEARVNDAPEDIDOS':
            localStorage.removeItem('token')

            return state = []
        default:
            return state
    }
}
export default reducerVndaPedidos