import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Phrase } from "./Pages/Phrase";
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/phrase" element={<Phrase />} />
    </Routes>
  );
}
