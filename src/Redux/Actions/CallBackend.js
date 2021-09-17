const axios = require("axios");

const callBackend = async (endpoint, token, data) => {
  let url =
    "https://67omt0pnwh.execute-api.us-east-1.amazonaws.com/dev/telexpress";
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

export default callBackend;
