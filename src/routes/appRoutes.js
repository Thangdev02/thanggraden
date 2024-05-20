import React from "react";
import { Route, Routes } from "react-router-dom";
import { duongdan } from ".";
import FristPage from "../pages/firstPage";
import SecondPage from "../pages/secondPage";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import AdminPage from "../pages/adminPage";

export default function AppRoute() {
  return (
    <Routes>
      <Route path={duongdan.home} element={<HomePage />} />
      <Route path={duongdan.login} element={<LoginPage />} />
      <Route path={duongdan.firstPage} element={<FristPage />} />
      <Route path={`${duongdan.secondPage}/:id`} element={<SecondPage />} />
      <Route path={duongdan.admin} element={<AdminPage />} />
    </Routes>
  );
}
