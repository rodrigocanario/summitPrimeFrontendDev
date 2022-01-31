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
export const getCarrinhoPerdido = async (id) => {
  let resposta;
  let token = localStorage.getItem("token");
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
