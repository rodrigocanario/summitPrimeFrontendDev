const callBackend = (socket, endpoint, token, data) => {
  return new Promise((resolve, reject) => {
    try {
      console.log(endpoint);
      socket.emit(endpoint, { token, data }, (a) => {
        console.log(a);
        if (a.error) {
          reject(a);
        }
        resolve(a);
      });
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};

export default callBackend;
