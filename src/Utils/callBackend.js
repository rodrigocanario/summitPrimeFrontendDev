const axios = require("axios");

export const callBackend = async (endpoint, token, data) => {
  let url = "https://67omt0pnwh.execute-api.us-east-1.amazonaws.com/dev";
  let method = "post";
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  let resposta;
  url = url + endpoint;
  await axios({
    url,
    method,
    headers,
    data,
  })
    .then((response) => {
      resposta = response.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
  return resposta;
};

export const adminLogin = async (data) => {
  let resposta;
  await callBackend("/telexpress/adminLogin", "", data).then((resp) => {
    resposta = resp;
    if (resp && resp.token) {
      localStorage.setItem("adminToken", resp.token);
    }
  });
  return resposta;
};

export const isAdmin = async () => {
  let resposta;
  let token = localStorage.getItem("adminToken");
  if (token) {
    await callBackend("/telexpress/isAdmin", token).then((resp) => {
      resposta = resp;
    });
    return resposta;
  }
  return false;
};

export const getProduto = async (data) => {
  let resposta;
  let token = localStorage.getItem("token");
  if (token) {
    await callBackend("/telexpress/getProduto", token, data).then((resp) => {
      resposta = resp;
    });
    return resposta;
  }
  return console.log("Token Invalido");
};

export const enviarPedido = (data) => {
  let token = localStorage.getItem("token");
  if (token) {
    callBackend("/telexpress/sendEmail", token, data);
  }
};

export const fazerCadastro = (data) => {
  let token = localStorage.getItem("adminToken");
  if (token) {
    data.cnpj = parseInt(data.cnpj);
    data.previsaoEntrega = parseInt(data.previsaoEntrega);
    callBackend("/telexpress/register", token, data);
  }
};

export const getCarrinhoPerdido = async (id) => {
  let resposta;
  let token = localStorage.getItem("adminToken");
  let data = { id };
  if (token) {
    await callBackend("/telexpress/getCarrinhoPerdido", token, data).then(
      (resp) => {
        resposta = resp;
      }
    );
    return resposta;
  }
  return false;
};
export const getVndaPedidos = async () => {
  let data, response;
  let token = localStorage.getItem("adminToken");
  if (token) {
    await callBackend("/telexpress/getVndaTable", token, data).then(
      (r) => (response = r)
    );
    return response;
  }
  return;
};
export const updateVndaPedidos = async (data) => {
  let token = localStorage.getItem("adminToken");
  if (data) {
    console.log(data);
    await callBackend("/telexpress/postPedidosVnda", token, data).catch((e) => {
      console.log(e);
    });
  } else {
    console.log("errou");
  }
};

export const putOrcamento = async (orcamento, cnpj) => {
  let token = localStorage.getItem("token");
  if (orcamento.id) {
    let data = { orcamento: { ...orcamento, cnpj: `${cnpj}` } };
    await callBackend("/telexpress/putOrcamento", token, data).catch((e) => {
      console.log(e);
    });
  } else {
    console.log("sem ID");
  }
};
