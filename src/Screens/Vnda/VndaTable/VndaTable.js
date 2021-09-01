import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { updateVndaPedidos } from '../../../Redux/Actions';
import { VndaTableBody } from './VndaTableBody'
import { VndaTableHeader } from './VndaTableHeader'
import { VndaTableModal } from './VndaTableModal';
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keysF3r1wa1KybX8y'}).base('appqHN4JFZxWxuR4R');

export const VndaTable = () => {
  const dispatch = useDispatch()
  const headers = ['ID','Nome do Cliente','CNPJ','Agente']
  useEffect(() => {
    base('Pedidos').select({
      maxRecords: 3,
      view: "Lista de pedidos geral"
  }).eachPage(function page(records, fetchNextPage) {
      records.forEach((record)=>{
        let pedido = {...record.fields, id:record.id}
         dispatch(updateVndaPedidos(pedido))
      })
      // fetchNextPage();
  
  }, function done(err) {
      if (err) { console.error(err); return; }
  });
  
  }, [dispatch])
    return (
        <section>
          <VndaTableHeader headers={headers}/>
            <VndaTableBody/>
          <VndaTableModal/>
        </section>
    )
}
