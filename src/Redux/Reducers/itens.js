let defaultState
if (localStorage.getItem('produtos')) {
    defaultState = JSON.parse(localStorage.getItem('produtos'))
} else {
    defaultState = [{ sku: '', nome: '', valor: 0, valorReal: 0, quantidade: 0, preco: 0, multiplo: 0, caixaMaster: 0, estoque: '' }]
}

const reducerItens = (state = defaultState, action) => {
    switch (action.type) {
        case 'TROCARINFO':
            const info = action.payload
            return state.map((item, index) => {
                if (index === action.index) {
                    let preco = parseFloat(info.valor)
                    return {
                        ...item,
                        sku: info.sku, nome: info.nome, valor: preco.toFixed(2), valorReal: preco.toFixed(2), multiplo: info.multiplo, quantidade: 0, caixaMaster: info.caixaMaster, estoque: info.estoque
                    }
                }
                return item
            })
        case 'INCREMENT':
            return state.map((item, index) => {
                if (index === action.index) {
                    let caixaMaster = state[action.index].caixaMaster
                    let quantidade = state[action.index].quantidade + state[action.index].multiplo
                    let valor = state[action.index].valor
                    if (quantidade % caixaMaster === 0) {
                        valor = valor * 0.95
                    }

                    return {
                        ...item,
                        quantidade,
                        valorReal: valor
                    }
                }
                return item
            })
        case 'DECREMENT':
            return state.map((item, index) => {
                let quantidade = state[action.index].quantidade - state[action.index].multiplo
                if (index === action.index && quantidade >= 0) {
                    let caixaMaster = state[action.index].caixaMaster
                    let valor = state[action.index].valor
                    if (quantidade % caixaMaster === 0 && quantidade > 0) {
                        valor = valor * 0.95
                    }

                    return {
                        ...item,
                        quantidade,
                        valorReal: valor
                    }
                }
                return item
            })
        case 'TOTALPRODUTO':
            return state.map((item, index) => {
                let preco = (Math.round((state[action.index].quantidade * state[action.index].valorReal) * 100)) / 100

                if (index === action.index) {
                    return {
                        ...item,
                        preco: preco.toFixed(2)
                    }
                }
                return item;
            })
        case 'ADDITEM':
            return [...state, { sku: '', nome: '', valor: 0, quantidade: 0, preco: 0, multiplo: 0 }]
        default:
            return state
    }
}

export default reducerItens