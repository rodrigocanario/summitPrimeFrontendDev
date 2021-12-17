const reducerPages = (
  state = { name: "home", loading: false, savingOrcamento: false, socket: {} },
  action
) => {
  switch (action.type) {
    case "SWITCH":
      return { ...state, name: action.page };

    case "LOADING":
      return { ...state, loading: action.loading };
    case "SAVINGORCAMENTO":
      return { ...state, savingOrcamento: action.savingOrcamento };

    case "ADDSOCKET":
      return { ...state, socket: action.socket };

    default:
      return state;
  }
};
export default reducerPages;
