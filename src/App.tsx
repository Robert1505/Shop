import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import ProductCard from "./Card";
import { Grid, Input } from "@mui/material";

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

  const [filteredProducts, setFilteredProducts] =
    useState<ProductInformation[]>(listOfProducts);

  const [favouriteProducts, setFavouriteProducts] = useState<
    ProductInformation[]
  >([]);

  const [cartProducts, setCartProducts] = useState<ProductInformation[]>([]);

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
    const results = listOfProducts.filter(
      (product: ProductInformation) => product.name === keyword
    );
    setFilteredProducts(results);
  }, [keyword]);

  return (
    <div className="App">
      <Header
        favouriteBadgeCount={favouriteProducts.length}
        cartBadgeCount={cartProducts.length}
      />
      <div style={{ marginTop: 25 }}>
        <Input placeholder="Search" value={keyword} onChange={handleChange} />
      </div>
      <Grid container spacing={5} sx={{ padding: "30px" }}>
        {filteredProducts.map((product: ProductInformation) => (
          <Grid key={`gridKey-${product.name}`} item xs={3}>
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

export default App;
