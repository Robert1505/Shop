import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import ProductCard from "./Card";
import { Grid, Input } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import StorePage from "./pages/StorePage";
import FavouritesPage from "./pages/FavouritesPage";

export type ProductInformation = {
  name: string;
  price: number;
  image: string;
};

function App() {
  const [favouriteProducts, setFavouriteProducts] = useState<
    ProductInformation[]
  >([]);

  const [cartProducts, setCartProducts] = useState<ProductInformation[]>([]);

  return (
    <div className="App">
      <Header
        favouriteBadgeCount={favouriteProducts.length}
        cartBadgeCount={cartProducts.length}
      />
      <Routes>
        <Route
          path="/"
          element={
            <StorePage
              favouriteProducts={favouriteProducts}
              setFavouriteProducts={setFavouriteProducts}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          }
        />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
