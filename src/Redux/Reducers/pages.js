const reducerPages = (state = { name: "home", loading: false }, action) => {
  switch (action.type) {
    case "SWITCH":
      return { ...state, name: action.page };

    case "LOADING":
      return { ...state, loading: action.loading };

    default:
      return state;
  }
};
export default reducerPages;
