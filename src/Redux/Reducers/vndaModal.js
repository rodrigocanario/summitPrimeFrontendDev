const reducerVndaModal = (state = {show:false, pedido:{id:''}}, action) => {
    switch (action.type) {
        case 'SHOWVNDAMODAL':
            return {show:true, pedido:action.pedido}
        case 'HIDEVNDAMODAL':
            return {show: false}
        default:
            return state
    }
}
export default reducerVndaModal