import React from "react";
import { Routes, Route } from "react-router-dom";
import { PathosAIScreen } from "./screen/pathos-ai";
import { BiDashboard } from "./screen/bi-dashboard/BiDashboard";
import { Survey } from "./screen/survey";

export const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/pathos-ai" element={<PathosAIScreen />} />
      <Route path="/bi-dashboard" element={<BiDashboard />} />
      <Route path="/survey" element={<Survey />} />
    </Routes>
  );
};
