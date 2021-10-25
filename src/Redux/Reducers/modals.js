const reducerModals = (
  state = {
    criarOrcamento: { show: false, vnda: false },
    sidebar: { show: false },
    instrucoes: { show: false },
  },
  action
) => {
  switch (action.type) {
    case "SHOWVNDAMODAL":
      return { ...state, vnda: { show: true, value: action.value } };
    case "HIDEVNDAMODAL":
      return { ...state, vnda: { show: false } };
    case "SHOWSALVOSMODAL":
      return { ...state, salvos: { show: true } };
    case "HIDESALVOSMODAL":
      return { ...state, salvos: { show: false } };
    case "TOGGLESIDEBAR":
      return { ...state, sidebar: { show: action.show } };
    case "TOGGLEMODAL":
      let { modal, type, ...rest } = action;
      return { ...state, [modal]: { ...rest } };
    default:
      return state;
  }
};
export default reducerModals;
