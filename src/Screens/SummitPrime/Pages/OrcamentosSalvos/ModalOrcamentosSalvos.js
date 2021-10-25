// import React, { useState } from "react";
// import { Button, Modal } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { hideSalvosModal } from "../../../../Redux/Actions/Actions";
// import { criarOrcamento } from "../../../../Redux/Actions/CriarOrcamento";

// export const ModalOrcamentosSalvos = () => {
//   const [titulo, setTitulo] = useState("Orçamento sem nome");
//   const informacoes = useSelector((state) => state.informacoes);
//   const modals = useSelector((state) => state.modals);
//   const dispatch = useDispatch();
//   const handleCriar = () => {
//     dispatch(criarOrcamento(titulo, true));
//   };
//   const focusInput = () => {
//     document.getElementById("inputOrcamentosSalvos").focus();
//     document.getElementById("inputOrcamentosSalvos").select();
//   };

//   return (
//     <Modal
//       onHide={() => dispatch(hideSalvosModal())}
//       onEntered={focusInput}
//       className=""
//       animation={true}
//       centered
//     >
//       <Modal.Body className="vndaModalBody" style={{ color: "black" }}>
//         <h1 style={{ color: "black", fontSize: "30px" }}>Novo Orçamento:</h1>
//         <input
//           id="inputOrcamentosSalvos"
//           defaultValue={titulo}
//           onChange={(e) => setTitulo(e.target.value)}
//           style={{ margin: "10px", marginLeft: "0px", width: "100%" }}
//         />
//         <br />
//         <div style={{ textAlign: "end" }}>
//           <button
//             style={{ border: "none", backgroundColor: "transparent" }}
//             onClick={() => dispatch(hideSalvosModal())}
//           >
//             Cancelar
//           </button>
//           <Button onClick={handleCriar}>Criar</Button>
//         </div>
//       </Modal.Body>
//     </Modal>
//   );
// };
