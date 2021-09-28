const reducerPages = (
  state = { name: "home", loading: false, savingOrcamento: false },
  action
) => {
  switch (action.type) {
    case "SWITCH":
      return { ...state, name: action.page };

    case "LOADING":
      return { ...state, loading: action.loading };
    case "SAVINGORCAMENTO":
      return { ...state, savingOrcamento: action.savingOrcamento };

    default:
      return state;
  }
};
export default reducerPages;
