import React from "react";
import { Routes, Route } from "react-router-dom";
import { PathosAIScreen } from "./screen/pathos-ai";
import { BiDashboard } from "./screen/bi-dashboard/BiDashboard";
import { Survey } from "./screen/survey";
import { User } from "./screen/user/User";

export const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PathosAIScreen />} />
      <Route path="/bi-dashboard" element={<BiDashboard />} />
      <Route path="/survey" element={<Survey />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
};
