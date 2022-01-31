export const adminLogin = () => {
  return {
    type: "ADMINLOGIN",
  };
};
export const adminLogout = () => {
  return {
    type: "ADMINLOGOUT",
  };
};
//----------------------------- ^adminLogin^

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
//----------------------------- ^clientesGold^
export const changePage = (currentPage) => {
  return {
    type: "CHANGEPAGE",
    currentPage,
  };
};
export const changeOrcamentoAtivo = (orcamentoAtivo) => {
  return {
    type: "CHANGEORCAMENTOATIVO",
    orcamentoAtivo,
  };
};
export const addSocket = (socket) => {
  return {
    type: "ADDSOCKET",
    socket,
  };
};
export const toggleSidebar = (sidebar) => {
  return {
    type: "TOGGLESIDEBAR",
    sidebar,
  };
};
export const toggleLoading = (loading) => {
  return {
    type: "TOGGLELOADING",
    loading,
  };
};
export const toggleSaving = (saving) => {
  return {
    type: "TOGGLESAVING",
    saving,
  };
};
//----------------------------- ^config^

export const updateDatabank = (input) => {
  return {
    type: "UPDATEDATABANK",
    input,
  };
};
export const addOrcamento = (orcamento) => {
  return {
    type: "ADDORCAMENTO",
    orcamento,
  };
};
export const updateOrcamentoPrime = (indexOrcamento, orcamento) => {
  return {
    type: "UPDATEORCAMENTOPRIME",
    indexOrcamento,
    orcamento,
  };
};
export const deleteOrcamento = (indexOrcamento) => {
  return {
    type: "DELETEORCAMENTO",
    indexOrcamento,
  };
};
//----------------------------- ^databank^

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
//----------------------------- ^vndaPedidos^
export const setFiltros = (filtros) => {
  return {
    type: "SETFILTROS",
    filtros,
  };
};
export const setProdutosAtivos = (produtosAtivos) => {
  return {
    type: "SETPRODUTOSATIVOS",
    produtosAtivos,
  };
};
export const setOrdemAtiva = (value) => {
  return {
    type: "SETORDEMATIVA",
    value,
  };
};

//----------------------------- ^loja^

export const changeQuantidade = (str, index, indexOrcamento) => {
  return {
    type: "CHANGEQUANTIDADE",
    str,
    index,
    indexOrcamento,
  };
};

export const changeItens = (itens, indexOrcamento) => {
  return {
    type: "CHANGEITENS",
    itens,
    indexOrcamento,
  };
};

export const updateOrcamentos = (orcamentosArray) => {
  return {
    type: "UPDATEORCAMENTOS",
    orcamentosArray,
  };
};

export const updateOrcamentoSalvo = (indexOrcamento, orcamento) => {
  return {
    type: "UPDATEORCAMENTOSALVO",
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

export const toggleModal = (modal) => {
  let action = {
    type: "TOGGLEMODAL",
    modal,
  };
  return action;
};

export const setError = (key, value) => {
  return {
    type: "SETERROR",
    key,
    value,
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
