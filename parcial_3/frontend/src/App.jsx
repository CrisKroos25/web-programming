import { useState } from "react";
// Llamamos a los componentes que creamos
import Header from "./components/layout/Header";
import Hide from "./pages/Hide";
import Reveal from "./pages/Reveal";
import "./App.css";


export default function App() {
  const [activeTab, setActiveTab] = useState("hide");

  return (
    <div>
      <Header activeTab={activeTab} onChangeTab={setActiveTab} />

      <main style={{ padding: "2rem" }}>
        {activeTab === "hide" ? <Hide /> : <Reveal />}
      </main>
    </div>
  );
}
