import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import FristPage from "../pages/firstPage";
import SecondPage from "../pages/secondPage";
import LoginPage from "../pages/loginPage";
import AdminPage from "../pages/adminPage";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={duongdan.login} replace />} />
      <Route path={duongdan.login} element={<LoginPage />} />
      <Route path={duongdan.firstPage} element={<FristPage />} />
      <Route path={`${duongdan.secondPage}/:id`} element={<SecondPage />} />
      <Route path={duongdan.admin} element={<AdminPage />} />
    </Routes>
  );
}