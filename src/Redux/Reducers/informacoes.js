const reducerInformacoes = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, ...action.infos };

    case "LOGOUT":
      localStorage.removeItem("token");
      window.location.reload();
      return {};
    default:
      return state;
  }
};
export default reducerInformacoes;
