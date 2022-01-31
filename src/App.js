import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Controller } from "./SummitPrime/Config/Controller";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Controller />} exact />
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
