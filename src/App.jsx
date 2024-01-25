import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import "./App.css";
import Ciudades  from "./components/Ciudades/Ciudades";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Ciudades" element={<Ciudades />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
