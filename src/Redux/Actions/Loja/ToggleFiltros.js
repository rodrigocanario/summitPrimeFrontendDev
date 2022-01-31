import { setFiltros, setOrdemAtiva, setProdutosAtivos } from "../Actions";

export const ToggleFiltros = (values) => {
  return async (dispatch, getState) => {
    let produtos = getState().databank.produtos;
    let filtros = getState().loja.filtros;
    let { mlce, categorias, isChecked, ordem } = values;
    if (mlce && categorias) {
      filtros[mlce.toLowerCase()][categorias].checked = isChecked;
    }

    let allChecked = [];

    let mlceKeys = Object.keys(filtros);
    for (let i = 0; i < mlceKeys.length; i++) {
      const mlceKey = filtros[mlceKeys[i]];
      let categoriasKeys = Object.keys(mlceKey);
      for (let j = 0; j < categoriasKeys.length; j++) {
        const categoriasKey = mlceKey[categoriasKeys[j]];

        if (categoriasKey.checked) {
          let toPush = [mlceKeys[i], categoriasKeys[j]];
          allChecked.push(toPush);
        }
      }
    }

    let produtosAtivos = [];
    for (let i = 0; i < produtos.length; i++) {
      const produto = produtos[i];
      let flag = 1;
      for (let j = 0; j < allChecked.length; j++) {
        const checked = allChecked[j];
        if (produto.tags[checked[0]] != checked[1]) {
          flag = 0;
        }
      }
      if (flag === 1) {
        produtosAtivos.push(produto);
      }
    }

    let tags = {};
    for (let a = 0; a < mlceKeys.length; a++) {
      const mlceKey = mlceKeys[a];
      const mcle = filtros[mlceKey];
      tags[mlceKey] = {};
      let categoriasKeys = Object.keys(mcle);
      for (let b = 0; b < categoriasKeys.length; b++) {
        const categoriasKey = categoriasKeys[b];
        tags[mlceKey][categoriasKey] = {
          checked: false,
          ativo: false,
          quantidade: 0,
        };
        if (filtros[mlceKey][categoriasKey].checked === true) {
          tags[mlceKey][categoriasKey].checked = true;
        }
        for (let i = 0; i < produtosAtivos.length; i++) {
          const produtoAtivo = produtosAtivos[i];
          if (produtoAtivo.tags[mlceKey] == categoriasKey) {
            tags[mlceKey][categoriasKey] = {
              ...tags[mlceKey][categoriasKey],
              ativo: true,
              quantidade: tags[mlceKey][categoriasKey].quantidade + 1,
            };
          }
        }
      }
    }
    if (!ordem) {
      let ordens = getState().loja.ordens;
      ordem = ordens.find((ordem) => {
        return ordem.active === true;
      });
      ordem = ordem.value;
    }

    switch (ordem) {
      case "nomeAZ":
        produtosAtivos.sort((x, y) => {
          let a = x.nomeVnda;
          let b = y.nomeVnda;

          return a === b ? 0 : a > b ? 1 : -1;
        });
        break;
      case "nomeZA":
        produtosAtivos.sort((x, y) => {
          let a = x.nomeVnda;
          let b = y.nomeVnda;

          return a === b ? 0 : a < b ? 1 : -1;
        });
        break;
      case "precoCrescente":
        produtosAtivos.sort((x, y) => {
          let a = x.valor;
          let b = y.valor;

          return a === b ? 0 : a > b ? 1 : -1;
        });
        break;
      case "precoDecresente":
        produtosAtivos.sort((x, y) => {
          let a = x.valor;
          let b = y.valor;

          return a === b ? 0 : a < b ? 1 : -1;
        });

        break;
      case "start":
        ordem = "nomeAZ";
        produtosAtivos.sort((x, y) => {
          let a = x.nomeVnda;
          let b = y.nomeVnda;

          return a === b ? 0 : a > b ? 1 : -1;
        });
        let produtosMega = produtosAtivos.filter((produto) => {
          return produto.tags.linha === "Tris Mega";
        });
        let produtosNaoMega = produtosAtivos.filter((produto) => {
          return produto.tags.linha !== "Tris Mega";
        });

        produtosAtivos = [...produtosMega, ...produtosNaoMega];
        break;
      default:
        break;
    }

    dispatch(setProdutosAtivos(produtosAtivos));
    dispatch(setOrdemAtiva(ordem));
    dispatch(setFiltros(tags));
  };
};
