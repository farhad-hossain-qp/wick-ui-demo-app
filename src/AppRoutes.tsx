import React from "react";
import { Route, Routes } from "react-router-dom";
import { BiDashboard } from "./screen/bi-dashboard/BiDashboard";
import { PathosAIScreen } from "./screen/pathos-ai";
import Pokemon from "./screen/pokemon";
import { Survey } from "./screen/survey";

export const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/pathos-ai" element={<PathosAIScreen />} />
      <Route path="/bi-dashboard" element={<BiDashboard />} />
      <Route path="/survey" element={<Survey />} />
      <Route path="/pokemon" element={<Pokemon />} />
    </Routes>
  );
};
