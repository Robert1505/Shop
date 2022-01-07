import React, { ReactElement, useEffect, useState } from "react";
import { Grid, Input } from "@mui/material";
import { ProductInformation } from "../App";
import ProductCard from "../Card";
import { listOfProducts } from "../assets/listOfProducts";

interface Props {
  setFavouriteProducts: Function;
  setCartProducts: Function;
  favouriteProducts: ProductInformation[];
  cartProducts: ProductInformation[];
}

export default function StorePage({
  setCartProducts,
  setFavouriteProducts,
  favouriteProducts,
  cartProducts
}: Props): ReactElement {

  const [filteredProducts, setFilteredProducts] =
    useState<ProductInformation[]>(listOfProducts);

  const [keyword, setKeyword] = React.useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  useEffect(() => {
    if (keyword === "") {
      setFilteredProducts(listOfProducts);
      return;
    }
    // Only the products with the name equal to the keyword will remain in the filtered list
    const results = listOfProducts.filter((product: ProductInformation) =>
      product.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredProducts(results);
  }, [keyword]);

  const isProductAlreadyFavorite = (product: ProductInformation): boolean => {
    const productIndex = favouriteProducts.findIndex(
      (p) => p.name === product.name
    )
    // The product exists in the favorite list
    return productIndex > -1;
  }

  return (
    <>
      <div style={{ marginTop: 25 }}>
        <Input
          placeholder="Search"
          value={keyword}
          onChange={handleChange}
          type="search"
        />
      </div>
      <Grid container spacing={5} sx={{ padding: "30px" }}>
        {filteredProducts.map((product: ProductInformation) => (
          <Grid key={`gridKey-${product.name}`} item xs={3}>
            <ProductCard
              isFavourite = {isProductAlreadyFavorite(product)}
              name={product.name}
              price={product.price}
              image={product.image}
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
    </>
  );
}
