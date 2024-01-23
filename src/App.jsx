import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
