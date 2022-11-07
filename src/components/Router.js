import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Area from "../pages/Area";
import Category from "../pages/Category";
import MainIngredient from "../pages/MainIngredient";
import SearchCategory from "../pages/SearchCategory";
import SearchArea from "../pages/SearchArea";
import SearchIngredient from "../pages/SearchIngredient";
import SearchName from "../pages/SearchName";

export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path="/Details/:id" element={<Details />} />
        <Route path='/Area' element={<Area />} exact />
        <Route path='/SearchArea/:id' element={<SearchArea />} />
        <Route path='/Category' element={<Category />} exact />
        <Route path='/SearchCategory/:id' element={<SearchCategory />} />
        <Route path='/MainIngredient' element={<MainIngredient />} exact />
        <Route path='/SearchIngredient/:id' element={<SearchIngredient />} />
        <Route path='/SearchName/:id' element={<SearchName />} />
    </Routes>
  );
}