import { Grid } from "@mui/material";
import React, { ReactElement } from "react";
import { ProductInformation } from "../App";
import ProductCard from "../Card";

interface Props {
  setFavouriteProducts: Function;
  setCartProducts: Function;
  favouriteProducts: ProductInformation[];
  cartProducts: ProductInformation[];
}

export default function CartPage({
  setCartProducts,
  setFavouriteProducts,
  favouriteProducts,
  cartProducts,
}: Props): ReactElement {
  return (
    <div>
      <Grid container spacing={5} sx={{ padding: "30px" }}>
        {cartProducts.map((product: ProductInformation) => (
          <Grid key={`gridKey-${product.name}`} item xs={3}>
            <ProductCard
              name={product.name}
              price={product.price}
              image={product.image}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
