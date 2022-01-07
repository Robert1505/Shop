import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import ProductCard from "./Card";
import { Grid, Input } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import StorePage from "./pages/StorePage";
import FavouritesPage from "./pages/FavouritesPage";
import CartPage from "./pages/CartPage";

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
        <Route
          path="/favourites"
          element={
            <FavouritesPage
              favouriteProducts={favouriteProducts}
              setFavouriteProducts={setFavouriteProducts}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              favouriteProducts={favouriteProducts}
              setFavouriteProducts={setFavouriteProducts}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
