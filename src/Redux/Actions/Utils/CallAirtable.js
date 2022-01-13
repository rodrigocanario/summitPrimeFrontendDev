var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keysF3r1wa1KybX8y" }).base(
  "appqHN4JFZxWxuR4R"
);

const callAirtable = (cnpj) => {
  return new Promise((resolve, reject) => {
    let str = cnpj.toString();
    let CNPJ =
      str.slice(0, 2) +
      "." +
      str.slice(2, 5) +
      "." +
      str.slice(5, 8) +
      "/" +
      str.slice(8, 12) +
      "-" +
      str.slice(12, 14);
    let pedidos = [];
    base("Pedidos")
      .select({
        filterByFormula: `({CNPJ} = '${CNPJ}')`,
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            pedidos.push(record.fields);
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            reject(err);
          }
          resolve(pedidos);
        }
      );
  });
};

export default callAirtable;
