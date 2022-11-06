import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";

export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path="/Details/:id" element={<Details />} />
    </Routes>
  );
}