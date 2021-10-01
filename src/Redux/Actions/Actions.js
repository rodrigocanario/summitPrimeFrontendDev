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
export const showVndaModal = (value) => {
  return {
    type: "SHOWVNDAMODAL",
    value,
  };
};
export const hideVndaModal = () => {
  return {
    type: "HIDEVNDAMODAL",
  };
};
export const showSalvosModal = () => {
  return {
    type: "SHOWSALVOSMODAL",
  };
};
export const hideSalvosModal = () => {
  return {
    type: "HIDESALVOSMODAL",
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
