export const increment = (index, multiplo) => {
    return {
        type: 'INCREMENT',
        index,
    }
}
export const decrement = (index, multiplo) => {
    return {
        type: 'DECREMENT',
        index,
    }
}

export const trocarSKU = (infos, index) => {
    return {
        type: 'TROCARINFO',
        payload: infos,
        index: index
    }

}

export const calcularTotal = (index) => {
    return {
        type: 'TOTALPRODUTO',
        index: index
    }

}

export const addItem = () => {
    return {
        type: 'ADDITEM'
    }

}

export const login = (cnpj, razaoSocial, UF, tabela, previsao) => {
    return {
        type: 'LOGIN',
        cnpj,
        razaoSocial,
        UF,
        tabela,
        previsao

    }
}
export const adminLogin = () => {
    return {
        type: 'ADMINLOGIN',
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
    }
}

export const adminLogout = () => {
    return {
        type: 'ADMINLOGOUT',
    }
}

export const pedidoMin = (UF, valor) => {
    return {
        type: 'PEDIDOMIN',
        UF,
        valor

    }
}
export const nextPage = () => {
    return {
        type: 'NEXT',
    }
}
export const updateVndaPedidos = (pedido) => {
    return {
        type: 'UPDATEVNDAPEDIDOS',
        pedido
    }
}
export const clearVndaPedidos = () => {
    return {
        type: 'CLEARVNDAPEDIDOS',
    }
}
export const showVndaModal = (pedido) => {
    return {
        type: 'SHOWVNDAMODAL',
        pedido
    }
}
export const hideVndaModal = () => {
    return {
        type: 'HIDEVNDAMODAL',
    }
}