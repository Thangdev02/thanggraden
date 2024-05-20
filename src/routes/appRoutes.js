import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import FirstPage from "../pages/firstPage";
import SecondPage from "../pages/secondPage";
import LoginPage from "../pages/loginPage";
import AdminPage from "../pages/adminPage";
import { duongdan } from ".";

const AppRoute = () => {
  return (
    <Routes>
      <Route path={duongdan.login} element={<LoginPage />} />
      <Route path={duongdan.firstPage} element={<FirstPage />} />
      <Route path={`${duongdan.secondPage}/:id`} element={<SecondPage />} />
      <Route path={duongdan.admin} element={<AdminPage />} />
      <Route path="/" element={<Navigate to={duongdan.login} />} />
    </Routes>
  );
};

export default AppRoute;
