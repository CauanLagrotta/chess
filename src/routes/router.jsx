import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/homepage.jsx";
import { Beneficios } from "../pages/beneficios.jsx";
import { Comojogar } from "../pages/comojogar.jsx";
import { Jogar } from "../pages/jogar.jsx";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/beneficios" element={<Beneficios />} />
      <Route path="/comojogar" element={<Comojogar />} />
      <Route path="/jogar" element={< Jogar />}/>
    </Routes>
  );
}
