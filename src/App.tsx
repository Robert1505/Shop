import React from "react";
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
  ];

  return (
    <div className="App">
      <Header />
      <Grid container spacing={5} sx={{ padding: "30px" }}>
        {listOfProducts.map((product: ProductInformation) => (
          <Grid item xs={3}>
            <ProductCard name = {product.name} price = {product.price} />
          </Grid>
        ))}
        {/* <Grid item xs={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={3}>
          <ProductCard />
        </Grid> */}
      </Grid>
    </div>
  );
}

export default App;
