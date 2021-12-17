import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import ProductCard from "./Card";
import { Grid } from "@mui/material";

export type ProductInformation = {
  name: string;
  price: number;
};

function App() {
  const listOfProducts: ProductInformation[] = [
    { name: "iPhone 13", price: 1000 },
    { name: "iPhone 12", price: 850 },
    { name: "iPhone 11", price: 650 },
    { name: "Pampers", price: 10 },
    { name: "Smart TV", price: 850 },
  ];

  const [favouriteProducts, setFavouriteProducts] = useState<
    ProductInformation[]
  >([]);

  const [cartProducts, setCartProducts] = useState<ProductInformation[]>([]);

  return (
    <div className="App">
      <Header favouriteBadgeCount={favouriteProducts.length} cartBadgeCount={cartProducts.length} />
      <Grid container spacing={5} sx={{ padding: "30px" }}>
        {listOfProducts.map((product: ProductInformation) => (
          <Grid item xs={3}>
            <ProductCard
              name={product.name}
              price={product.price}
              onAddToCartClick={() => {
                let copy = [...cartProducts];
                copy.push(product);
                setCartProducts(copy);
              }}
              onFavoriteClick={() => {
                let copy = [...favouriteProducts];

                // Find if the product is already on the favorite list
                const productIndex = favouriteProducts.findIndex(
                  (p) => p.name === product.name
                );

                // productIndex will be equal to -1 if the product doesn't exist, otherwise it exists
                if(productIndex === -1){
                  copy.push(product);
                }
                else{
                  copy.splice(productIndex,1);
                }

                setFavouriteProducts(copy);
              }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
