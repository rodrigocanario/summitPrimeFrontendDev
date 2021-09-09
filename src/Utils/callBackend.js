const axios = require("axios");
var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keysF3r1wa1KybX8y" }).base(
  "appqHN4JFZxWxuR4R"
);

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
      throw err;
    });
  return resposta;
};

export const login = async (data) => {
  let resposta;
  await callBackend("/telexpress/login", "", data)
    .then((resp) => {
      resposta = resp;
      if (resp && resp.token) {
        localStorage.setItem("token", resp.token);
      }
    })
    .catch((e) => {
      throw e;
    });
  return resposta;
};

export const getUserInfos = async (input) => {
  let result;
  let token = localStorage.getItem("token");
  if (token) {
    let orcamentos = [];
    await isAuth(token).then(async (response) => {
      await pedidoMin(response.UF).then(async (resp) => {
        let { Estado, ...rest } = resp;
        let cnpj = response.cnpj.toString();
        let meio = { ...cnpj };
        cnpj =
          meio[0] +
          meio[1] +
          "." +
          meio[2] +
          meio[3] +
          meio[4] +
          "." +
          meio[5] +
          meio[6] +
          meio[7] +
          "/" +
          meio[8] +
          meio[9] +
          meio[10] +
          meio[11] +
          "-" +
          meio[12] +
          meio[13];
        let p = new Promise((resolve, reject) => {
          base("Pedidos")
            .select({
              view: "Lista de pedidos geral",
              filterByFormula: `({CNPJ} = '${cnpj}')`,
            })
            .eachPage(
              function page(records, fetchNextPage) {
                records.forEach(function (record) {
                  orcamentos.push(record.fields);
                });
                fetchNextPage();
              },
              function done(err) {
                if (err) {
                  reject(err);
                  return;
                }
                resolve({ ...response, ...rest, orcamentos });
              }
            );
        });
        await p.then((r) => {
          result = r;
        });
      });
    });
    return result;
  } else if (typeof input === "object" && input !== null) {
    let orcamentos = [];
    await login(input)
      .then(async (response) => {
        if (response && response.token) {
          let { token, ...resto } = response;
          await pedidoMin(response.UF).then(async (resp) => {
            let { Estado, ...rest } = resp;
            let cnpj = input.cnpj.toString();
            let meio = { ...cnpj };
            cnpj =
              meio[0] +
              meio[1] +
              "." +
              meio[2] +
              meio[3] +
              meio[4] +
              "." +
              meio[5] +
              meio[6] +
              meio[7] +
              "/" +
              meio[8] +
              meio[9] +
              meio[10] +
              meio[11] +
              "-" +
              meio[12] +
              meio[13];
            let p = new Promise((resolve, reject) => {
              base("Pedidos")
                .select({
                  view: "Lista de pedidos geral",
                  filterByFormula: `({CNPJ} = '${cnpj}')`,
                })
                .eachPage(
                  function page(records, fetchNextPage) {
                    records.forEach(function (record) {
                      orcamentos.push(record.fields);
                    });
                    fetchNextPage();
                  },
                  function done(err) {
                    if (err) {
                      reject(err);
                      return;
                    }
                    resolve({ ...resto, ...rest, orcamentos });
                  }
                );
            });
            await p.then((r) => {
              result = r;
            });
          });
        }
      })
      .catch((e) => {
        throw e;
      });
    return result;
  }
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

export const pedidoMin = async (UF) => {
  let resposta;
  let token = localStorage.getItem("token");
  let data = { UF: UF };
  if (token) {
    await callBackend("/telexpress/pedidoMinimo", token, data).then((resp) => {
      resposta = resp;
    });
    return resposta;
  }
};

export const isAuth = async (token) => {
  let resposta;
  if (token) {
    await callBackend("/telexpress/isAuth", token).then((resp) => {
      resposta = resp;
    });
    return resposta;
  }
  return false;
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
    await callBackend("/vnda/getVndaTable", token, data).then(
      (r) => (response = r)
    );
    return response;
  }
  return;
};
