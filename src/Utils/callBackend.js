const axios = require('axios')

export const callBackend = async (endpoint, token, data) => {
    let url = 'https://67omt0pnwh.execute-api.us-east-1.amazonaws.com/dev/telexpress'
    let method = 'post'
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    let resposta
    url = url + endpoint
    await axios({
        url,
        method,
        headers,
        data
    }).then((response) => {
        resposta = response.data
    }).catch((err) => {
        resposta = err
    })
    return resposta
}


export const login = async (data) => {
    let resposta
    await callBackend('/login', '', data)
        .then((resp) => {
            resposta = resp
            if (resp && resp.token) {
                localStorage.setItem('token', resp.token)
            }
        })
    return resposta
}

export const adminLogin = async (data) => {
    let resposta
    console.log(data);
    await callBackend('/adminLogin', '', data)
        .then((resp) => {
            resposta = resp
            console.log(resp.token);
            if (resp && resp.token) {
                localStorage.setItem('adminToken', resp.token)
            }
        })
    return resposta
}


export const pedidoMin = async (UF) => {
    let resposta
    let token = localStorage.getItem('token')
    let data = { "UF": UF }
    if (token) {
        await callBackend('/pedidoMinimo', token, data)
            .then((resp) => {
                resposta = resp
            })
        return resposta
    }
}

export const isAuth = async () => {
    let resposta
    let token = localStorage.getItem('token')
    if (token) {
        await callBackend('/isAuth', token)
            .then((resp) => {
                resposta = resp
            })
        return resposta
    }
    return false
}

export const isAdmin = async () => {
    let resposta
    let token = localStorage.getItem('adminToken')
    if (token) {
        await callBackend('/isAdmin', token)
            .then((resp) => {
                resposta = resp
            })
        return resposta
    }
    return false
}


export const getProduto = async (data) => {
    let resposta
    let token = localStorage.getItem('token')
    if (token) {
        await callBackend('/getProduto', token, data)
            .then((resp) => {
                resposta = resp
            })
        return resposta
    }
    return console.log('Token Invalido')
}

export const enviarPedido = (data) => {
    let token = localStorage.getItem('token')
    if (token) {
        callBackend('/sendEmail', token, data)
    }
}

export const fazerCadastro = (data) => {
    let token = localStorage.getItem('adminToken')
    if (token) {
        data.cnpj = parseInt(data.cnpj)
        data.previsaoEntrega = parseInt(data.previsaoEntrega)
        console.log(data);
        callBackend('/register', token, data)
            .then((resp) => {
                console.log(resp);
            })
    }
}

export const getCarrinhoPerdido = async (id) => {
    let resposta
    let token = localStorage.getItem('adminToken')
    let data = {id}
    if (token) {
        await callBackend('/getCarrinhoPerdido', token, data)
            .then((resp) => {
                resposta = resp
            })
        return resposta
    }
    return false
}