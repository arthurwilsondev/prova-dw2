import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./components/index.css";
import { Teste } from "./components/teste";

const testes = [
  {
    tipo: "sucesso",
    nome: "Open Telemetry",
    tempoExecusao: "20s",
  },
  {
    tipo: "neutro",
    nome: "Testes",
    tempoExecusao: "1s",
  },
  {
    tipo: "falha",
    nome: "Build",
    tempoExecusao: "5min",
  }
];

function App() {
  return (

    <div className="container">
      {testes.map((teste, index) => (
        <Teste key={index} {...teste} />
      ))}
    </div>

  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
