import React from "react";
import "./App.css";
import Header from "./Header";
import ProductCard from "./Card";
import { Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Header />
      <Grid container spacing={5} sx = {{padding: "30px"}}>
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
        </Grid>
        <Grid item xs={3}>
          <ProductCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
