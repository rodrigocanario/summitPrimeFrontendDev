let defaultState = {
  salvos: [],
  vnda: [],
  atual: false,
};

const reducerOrcamentos = (state = defaultState, action) => {
  switch (action.type) {
    case "UPDATEORCAMENTOS":
      return { ...state, ...action.input };
    default:
      return state;
  }
};

export default reducerOrcamentos;
