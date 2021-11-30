import { changePage, loading, updateClientesGoldData } from "./Actions";
import callBackend from "./CallBackend";

export const CalculateClientesGold = () => {
  return async (dispatch, getState) => {
    try {
      let data = [];
      let dataCrua = getState().clientesGold.dataCrua;
      for (let i = 1; i < dataCrua.length; i++) {
        const element = dataCrua[i];

        data.push({
          date: parseFloat(element[0]),
          pagador: parseFloat(element[1]),
          material: parseFloat(element[2]),
          valor: parseFloat(element[3]),
        });
      }
      let headers = getState().clientesGold.headers;
      let { skuMes, valorAno, skuAno, valorMes, vezesAno } = headers;
      let pedidos = {};
      for (let i = 0; i < data.length; i++) {
        const pedido = data[i];
        if (pedido.date !== 0) {
          pedido.valor = parseFloat(pedido.valor.toFixed(2));
          if (!pedidos[pedido.date]) {
            pedidos[pedido.date] = {};
          }
          if (!pedidos[pedido.date][pedido.pagador]) {
            pedidos[pedido.date][pedido.pagador] = [];
          }
          let indx = pedidos[pedido.date][pedido.pagador].findIndex(
            (element) => {
              return element.sku === pedido.material;
            }
          );
          if (indx !== -1) {
            pedidos[pedido.date][pedido.pagador][indx].valor += pedido.valor;
          } else {
            pedidos[pedido.date][pedido.pagador].push({
              sku: pedido.material,
              valor: parseFloat(pedido.valor.toFixed(2)),
            });
          }
        }
      }

      let mesesKeys = Object.keys(pedidos);
      let dataToSend = {};

      for (let i = 0; i < mesesKeys.length; i++) {
        const mesAtual = mesesKeys[i];
        dataToSend[mesAtual] = {
          valorAno: {},
          valorMes: {},
          skuAno: {},
          skuMes: {},
          vezesAno: {},
          golds: [],
        };

        let clientesPorAno = {};
        for (let j = i; j > -1 && i - j <= 12; j--) {
          let mesKey = mesesKeys[j];
          let mes = pedidos[mesKey];

          let clientesKeys = Object.keys(mes);
          for (let k = 0; k < clientesKeys.length; k++) {
            let clienteKey = clientesKeys[k];
            let cliente = mes[clienteKey];
            if (pedidos["2006"]["69539"][0].valor !== 22.63) {
              console.log("ERRO CRASSO");
              process.exit();
            }
            if (j === i) {
              // ------------------------------------skuMes-----------------------------
              if (cliente.length > skuMes) {
                if (!dataToSend[mesKey]["skuMes"][clienteKey]) {
                  dataToSend[mesKey]["skuMes"][clienteKey] = [];
                }
                dataToSend[mesKey]["skuMes"][clienteKey].push(...cliente);
              }
              // --------------------------------------valorMes----------------------------
              let valorDoMes = 0;
              for (let l = 0; l < cliente.length; l++) {
                const products = cliente[l];
                valorDoMes += products.valor;
              }
              if (valorDoMes > valorMes) {
                if (!dataToSend[mesKey]["valorMes"][clienteKey]) {
                  dataToSend[mesKey]["valorMes"][clienteKey] = [];
                }
                dataToSend[mesKey]["valorMes"][clienteKey].push(...cliente);
              }
            } else {
              // ---------------------------------------clientesPorAno----------------------------
              if (!clientesPorAno[clienteKey]) {
                clientesPorAno[clienteKey] = {
                  itens: [],
                  vezesNoAno: 0,
                };
              }
              clientesPorAno[clienteKey]["vezesNoAno"] += 1;
              for (let l = 0; l < cliente.length; l++) {
                const itemm = cliente[l];
                let indexclientesPorAno = clientesPorAno[clienteKey][
                  "itens"
                ].findIndex((element) => {
                  return element.sku === itemm.sku;
                });
                if (indexclientesPorAno === -1) {
                  clientesPorAno[clienteKey]["itens"].push({ ...itemm });
                } else {
                  clientesPorAno[clienteKey]["itens"][l].valor += parseFloat(
                    itemm.valor.toFixed(2)
                  );
                }
              }
            }
          }
          let clientesPorAnoKeys = Object.keys(clientesPorAno);
          for (let l = 0; l < clientesPorAnoKeys.length; l++) {
            const clientesPorAnoKey = clientesPorAnoKeys[l];
            const clientePorAno = clientesPorAno[clientesPorAnoKey];
            // ---------------------------------------SkuAno----------------------------
            if (clientePorAno["itens"].length > skuAno) {
              if (!dataToSend[mesAtual]["skuAno"][clientesPorAnoKey]) {
                dataToSend[mesAtual]["skuAno"][clientesPorAnoKey] = [];
              }
              dataToSend[mesAtual]["skuAno"][clientesPorAnoKey].push(
                ...clientePorAno["itens"]
              );
            }
            // ---------------------------------------valorAno----------------------------
            let valorDoAno = 0;
            for (let m = 0; m < clientePorAno["itens"].length; m++) {
              const products = clientePorAno["itens"][m];
              valorDoAno += products.valor;
            }
            if (valorDoAno > valorAno) {
              if (!dataToSend[mesAtual]["valorAno"][clientesPorAnoKey]) {
                dataToSend[mesAtual]["valorAno"][clientesPorAnoKey] = [];
              }
              dataToSend[mesAtual]["valorAno"][clientesPorAnoKey].push(
                ...clientePorAno["itens"]
              );
            }
            // ---------------------------------------vezesAno----------------------------
            if (clientePorAno["vezesNoAno"] >= vezesAno) {
              if (!dataToSend[mesAtual]["vezesAno"][clientesPorAnoKey]) {
                dataToSend[mesAtual]["vezesAno"][clientesPorAnoKey] = [];
              }
              dataToSend[mesAtual]["vezesAno"][clientesPorAnoKey].push(
                ...clientePorAno["itens"]
              );
            }
          }
        }

        let dataToSendKeys = Object.keys(dataToSend[mesAtual]);

        for (let m = 0; m < dataToSendKeys.length - 1; m++) {
          const dataToSendKey = dataToSendKeys[m];

          const dataToSendClienteKeys = Object.keys(
            dataToSend[mesAtual][dataToSendKey]
          );
          for (let n = 0; n < dataToSendClienteKeys.length; n++) {
            const dataToSendClienteKey = dataToSendClienteKeys[n];
            const dataToSendCliente =
              dataToSend[mesAtual][dataToSendKey][dataToSendClienteKey];

            let dataToSendClienteIndex = dataToSend[mesAtual][
              "golds"
            ].findIndex((element) => {
              return element.codigo === dataToSendClienteKey;
            });

            // console.log(dataToSendClienteIndex);

            if (!dataToSendClienteIndex === -1) {
              dataToSend[mesAtual]["golds"]["itens"].push(...dataToSendCliente);
            } else {
              dataToSend[mesAtual]["golds"].push({
                codigo: dataToSendClienteKey,
                itens: dataToSendCliente,
                isFaturado: false,
              });
              let dataToSendClienteIndexx = dataToSend[mesAtual][
                "golds"
              ].findIndex((element) => {
                return element.codigo === dataToSendClienteKey;
              });
              if (pedidos[mesAtual][dataToSendClienteKey]) {
                dataToSend[mesAtual]["golds"][dataToSendClienteIndexx][
                  "isFaturado"
                ] = true;
              }
            }
          }
        }
      }
      await dispatch(updateClientesGoldData(dataToSend));
    } catch (e) {
      console.log("erro no callBackend");
      dispatch(loading(false));
      return Promise.resolve();
    }
  };
};
