import Header from "../Components/Header";
import Home from "../Pages/Home";
import Sobre from "../Pages/Sobre";
import Project from "../Pages/Project";
import Contact from "../Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="projeto" element={<Project />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
