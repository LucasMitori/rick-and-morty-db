import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/Home";

import LandingPage from "../pages/LandingPage/LandingPage";
import CharacterPage from "../pages/CharacterPage/CharacterPage";

const RoutesMain = () => (
  <Routes>
    <Route path="/welcome" element={<LandingPage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/:id" element={<CharacterPage />} />
    <Route path="*" element={<Navigate to="/welcome" />} />
  </Routes>
);

export default RoutesMain;
