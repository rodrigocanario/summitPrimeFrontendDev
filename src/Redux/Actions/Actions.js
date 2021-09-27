export const changeQuantidade = (str, index, indexOrcamento) => {
  return {
    type: "CHANGEQUANTIDADE",
    str,
    index,
    indexOrcamento,
  };
};

export const trocarItem = (infos, index, indexOrcamento, desconto) => {
  return {
    type: "TROCARITEM",
    infos,
    index,
    indexOrcamento,
    desconto,
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
export const pagamentoAntecipado = (indexOrcamento) => {
  return {
    type: "PAGAMENTOANTECIPADO",
    indexOrcamento,
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
export const showVndaModal = (pedido) => {
  return {
    type: "SHOWVNDAMODAL",
    pedido,
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

export const loading = (loading) => {
  return {
    type: "LOADING",
    loading,
  };
};
