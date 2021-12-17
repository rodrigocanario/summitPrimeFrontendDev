const axios = require("axios");

const callBackend = (socket, endpoint, token, data) => {
  return new Promise((resolve, reject) => {
    // let url =
    //   "https://67omt0pnwh.execute-api.us-east-1.amazonaws.com/dev/telexpress";
    // let method = "post";
    // let headers = {
    //   "Content-Type": "application/json",
    //   // "Access-Control-Allow-Origin": "*",
    //   Authorization: `Bearer ${token}`,
    // };
    // url = url + endpoint;
    // axios({
    //   url,
    //   method,
    //   headers,
    //   data,
    // })
    //   .then((response) => {
    //     resolve(response.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     if (err.response && err.response.status === 401) {
    //       window.location.reload();
    //     }
    //     reject(err);
    //   });
    try {
      socket.emit(endpoint, { token, data }, (a) => {
        console.log(a);
        resolve(a);
      });
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};

export default callBackend;
