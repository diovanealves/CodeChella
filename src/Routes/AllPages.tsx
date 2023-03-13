import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Experience } from "../pages/Experience";
import { SectorMap } from "../pages/SectorMap";
import { Information } from "../pages/Information";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experiencia" element={<Experience />} />
      <Route path="/setores" element={<SectorMap />} />
      <Route path="/informacoes" element={<Information />} />
    </Routes>
  );
}
