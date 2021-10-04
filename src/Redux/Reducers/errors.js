const reducerErrors = (
  state = { login: false, pedidoMinimo: false },
  action
) => {
  switch (action.type) {
    case "SETERROR":
      return { ...state, [action.key]: action.value };

    default:
      return state;
  }
};
export default reducerErrors;
