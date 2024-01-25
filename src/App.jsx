import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import "./App.css";
import Ciudades  from "./components/Ciudades/Ciudades";
import Provincias  from "./components/Provincias/Provincias";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Ciudades" element={<Ciudades />} />
        <Route path="/Provincias" element={<Provincias />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
