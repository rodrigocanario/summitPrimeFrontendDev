import { setFiltros } from "../Actions";
import { ToggleFiltros } from "./ToggleFiltros";

export const SetFiltros = (bool) => {
  return async (dispatch, getState) => {
    let produtos = getState().databank.produtos;
    let tags = {};

    for (let i = 0; i < produtos.length; i++) {
      const produto = produtos[i];
      let tagKeys = Object.keys(produto.tags);
      for (let j = 0; j < tagKeys.length; j++) {
        const tagKey = tagKeys[j];
        let valor = produto.tags[tagKey];
        let quantidade = 1;

        if (tags[tagKey] && tags[tagKey][valor]) {
          quantidade += tags[tagKey][valor].quantidade;
          tags[tagKey][valor].quantidade = quantidade;
        } else {
          tags[tagKey] = {
            ...tags[tagKey],
            [valor]: { checked: false, ativo: true, quantidade },
          };
        }
      }
    }
    dispatch(setFiltros(tags));
    if (bool) {
      dispatch(ToggleFiltros({ ordem: "start" }));
    }
  };
};
