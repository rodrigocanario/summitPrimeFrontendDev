export const changeQuantidade = (str, index, indexOrcamento) => {
  return {
    type: "CHANGEQUANTIDADE",
    str,
    index,
    indexOrcamento,
  };
};

export const trocarItem = (infos, index, indexOrcamento) => {
  return {
    type: "TROCARITEM",
    infos,
    index,
    indexOrcamento,
  };
};

export const addItem = (indexOrcamento) => {
  return {
    type: "ADDITEM",
    indexOrcamento,
  };
};
export const deleteItem = (index, indexOrcamento) => {
  return {
    type: "DELETEITEM",
    indexOrcamento,
    index,
  };
};
export const updateOrcamentos = (input) => {
  return {
    type: "UPDATEORCAMENTOS",
    input,
  };
};

export const updatePrecos = (indexOrcamento, orcamento) => {
  return {
    type: "UPDATEPRECOS",
    indexOrcamento,
    orcamento,
  };
};
export const pagamentoAntecipado = (indexOrcamento, isAntecipado) => {
  return {
    type: "PAGAMENTOANTECIPADO",
    indexOrcamento,
    isAntecipado,
  };
};
export const loading = (loading) => {
  return {
    type: "LOADING",
    loading,
  };
};
export const savingOrcamento = (savingOrcamento) => {
  return {
    type: "SAVINGORCAMENTO",
    savingOrcamento,
  };
};

export const toggleModal = (modal, show, vnda) => {
  let action = {
    type: "TOGGLEMODAL",
    modal,
    show,
  };
  if (vnda) {
    action.vnda = vnda;
  }
  return action;
};

export const setError = (key, value) => {
  return {
    type: "SETERROR",
    key,
    value,
  };
};
export const updateClientesGoldHeaders = (header, headerValue) => {
  return {
    type: "UPDATEHEADERS",
    header,
    headerValue,
  };
};
export const updateClientesGoldData = (data) => {
  return {
    type: "UPDATEDATA",
    data,
  };
};
export const updateClientesGoldDataCrua = (dataCrua) => {
  return {
    type: "UPDATEDATACRUA",
    dataCrua,
  };
};
export const addSocket = (socket) => {
  return {
    type: "ADDSOCKET",
    socket,
  };
};
// --------------------------
export const calcularTotal = (index) => {
  return {
    type: "TOTALPRODUTO",
    index: index,
  };
};

export const login = (infos) => {
  return {
    type: "LOGIN",
    infos,
  };
};
export const adminLogin = () => {
  return {
    type: "ADMINLOGIN",
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const adminLogout = () => {
  return {
    type: "ADMINLOGOUT",
  };
};

export const changePage = (page) => {
  return {
    type: "SWITCH",
    page,
  };
};
export const updateVndaPedidos = (pedido) => {
  return {
    type: "UPDATEVNDAPEDIDOS",
    pedido,
  };
};
export const clearVndaPedidos = () => {
  return {
    type: "CLEARVNDAPEDIDOS",
  };
};
export const addOrcamentos = (orcamentos) => {
  return {
    type: "PAGAMENTOANTECIPADO",
    orcamentos,
  };
};
export const novoOrcamento = (itens) => {
  return {
    type: "NOVOORCAMENTO",
    itens,
  };
};
