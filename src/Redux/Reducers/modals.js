const reducerModals = (
  state = {
    salvos: { show: false },
    vnda: { show: false, value: "" },
    sidebar: { show: false },
    atual: { show: false },
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
      return { ...state, [action.modal]: { show: action.show } };
    default:
      return state;
  }
};
export default reducerModals;
