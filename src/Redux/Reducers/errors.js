const reducerErrors = (
  state = { login: false, pedidoMinimo: false },
  action
) => {
  console.log(action.key);
  console.log(action.value);
  switch (action.type) {
    case "SETERROR":
      return { ...state, [action.key]: action.value };

    default:
      return state;
  }
};
export default reducerErrors;
