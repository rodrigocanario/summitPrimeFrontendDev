const reducerVndaModal = (state = {show:false, pedido:{id:''}}, action) => {
    switch (action.type) {
        case 'SHOWVNDAMODAL':
            return {show:true, pedido:
                {...action.pedido, 'Nome do cliente': action.pedido['Nome do cliente'].toLowerCase()}}
        case 'HIDEVNDAMODAL':
            return {...state, show: false}
        default:
            return state
    }
}
export default reducerVndaModal