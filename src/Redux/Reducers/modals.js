const reducerModals = (
  state = {
    salvos: { show: false },
    vnda: { show: false, pedido: { id: "" } },
  },
  action
) => {
  switch (action.type) {
    case "SHOWVNDAMODAL":
      return {
        ...state,
        vnda: {
          show: true,
          pedido: {
            ...action.pedido,
            "Nome do cliente": action.pedido["Nome do cliente"].toLowerCase(),
          },
        },
      };
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
