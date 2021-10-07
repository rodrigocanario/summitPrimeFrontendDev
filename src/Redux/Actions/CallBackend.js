const axios = require("axios");

const callBackend = (endpoint, token, data) => {
  return new Promise((resolve, reject) => {
    let url =
      "https://67omt0pnwh.execute-api.us-east-1.amazonaws.com/dev/telexpress";
    let method = "post";
    let headers = {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${token}`,
    };
    url = url + endpoint;
    axios({
      url,
      method,
      headers,
      data,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export default callBackend;
