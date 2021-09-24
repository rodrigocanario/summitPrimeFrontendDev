export const ChangeValores = (index, indexOrcamento) => {
  return (dispatch, getState) => {
    let orcamento = getState().orcamentos.salvos[indexOrcamento];
    orcamento.total = 1;
    orcamento.subTotal = 2;
    console.log(orcamento);
  };
};
