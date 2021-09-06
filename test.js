const axios = require("axios");
const csv2json = require("csvjson-csv2json");
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVRiI6IlJTIiwicHJldmlzYW9FbnRyZWdhIjo3LCJyYXphb1NvY2lhbCI6IlNVTU1JVCBDT01FUkNJTyBJTVBPUlRBQ0FPIEUgRVhQT1JUQUNBTyBMVERBIiwiY25waiI6NzM4Mjc5ODIwMDAxNjMsInRhYmVsYSI6InBhZHJhbyIsImRlc2NvbnRvIjoiMjYiLCJjcmVkaXRvQXByb3ZhZG8iOjEwMDAsImlhdCI6MTYzMDU2MDUxMywiZXhwIjoxNjMwNjQ2OTEzfQ.topw5DpN2zZxrCYSYuzN7nq77kWpbHhcxg51CS5YRew";
let csv =
  '"Produtos","Quantidade","Referência","Nome do cliente","Email","Telefone","CNPJ","Estado","Cidade","Agentes","Código do agente","Link do agente"\n"Hidrocor Ponta Grossa Mega Hidro Color - 6 Cores - Tris","6","633725","tatiana suarez","ettati@gmail.com","(51) 98417-7884","73.827.982/0001-63","RS","Porto Alegre","Site","Site",""\n"Hidrocor Ponta Fina Mega Hidro Color - Tons Cosmos Glitter - 6 Cores - Tris","6","607108","tatiana suarez","ettati@gmail.com","(51) 98417-7884","73.827.982/0001-63","RS","Porto Alegre","Site","Site",""\n"Lápis De Cor Mega Soft Color - Tons Metálicos - 10 Cores - Tris","6","616636","tatiana suarez","ettati@gmail.com","(51) 98417-7884","73.827.982/0001-63","RS","Porto Alegre","Site","Site",""\n"Hidrocor Ponta Fina Classic Plus - 12 Cores - Tris","12","657714","tatiana suarez","ettati@gmail.com","(51) 98417-7884","73.827.982/0001-63","RS","Porto Alegre","Site","Site",""\n"Óleo Pastel Mega Pastel Color - Conjunto C/12 Cores - Tris","5","686684","tatiana suarez","ettati@gmail.com","(51) 98417-7884","73.827.982/0001-63","RS","Porto Alegre","Site","Site",""\n';

let json = csv2json(csv);

let final = [];

const callBackend = async (endpoint, token, data) => {
  let url =
    "https://67omt0pnwh.execute-api.us-east-1.amazonaws.com/dev/telexpress";
  let method = "post";
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  let resposta;
  url = url + endpoint;
  await axios({
    url,
    method,
    headers,
    data,
  })
    .then((response) => {
      resposta = response.data;
    })
    .catch((err) => {
      resposta = err;
    });
  return resposta;
};

json.forEach(async (element) => {
  let { Referência: sku, Quantidade: quantidade } = element;
  let data = { sku, tabela: "padrao" };
  await callBackend("/getProduto", token, data).then((resp) => {
    let valorReal = resp.valor;
    if (quantidade % resp.caixaMaster === 0) {
      valorReal = (resp.valor * 0.95).toFixed(2);
    }
    let preco = valorReal * quantidade;
    final.push({ ...resp, quantidade, valorReal, preco });
  });
  console.log(final);
});

// let final =[
//     {
//       sku: "",
//       nome: "",
//       valor: 0,
//       valorReal: 0,
//       quantidade: 0,
//       preco: 0,
//       multiplo: 0,
//       caixaMaster: 0,
//       estoque: "",
//     },
//   ],
