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

export default function FavouritesPage({
  setCartProducts,
  setFavouriteProducts,
  favouriteProducts,
  cartProducts,
}: Props): ReactElement {
  return (
    <div>
      <Grid container spacing={5} sx={{ padding: "30px" }}>
        {favouriteProducts.map((product: ProductInformation) => (
          <Grid key={`gridKey-${product.name}`} item xs={3}>
            <ProductCard
              name={product.name}
              price={product.price}
              image={product.image}
              isFavourite = {true}
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
                if (productIndex === -1) {
                  copy.push(product);
                } else {
                  copy.splice(productIndex, 1);
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
