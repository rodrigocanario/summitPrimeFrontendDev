const reducerModals = (
  state = {
    salvos: { show: false },
    vnda: { show: false, value: "" },
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
    default:
      return state;
  }
};
export default reducerModals;
