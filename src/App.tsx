import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import ProductCard from "./Card";
import { Grid, Input } from "@mui/material";

export type ProductInformation = {
  name: string;
  price: number;
  image: string;
};

function App() {
  const listOfProducts: ProductInformation[] = [
    { name: "iPhone 13", price: 1000, image: "https://lcdn.altex.ro/resize/media/catalog/product/T/e/2bd48d28d1c32adea0e55139a4e6434a/Telefon_APPLE_iPhone_13_Pro_5G_128GB_Graphite_6_.jpg" },
    { name: "iPhone 12", price: 850, image: "https://s13emagst.akamaized.net/products/33600/33599418/images/res_8cb143da1a4c41323467c164fbb5973f.jpg" },
    { name: "iPhone 11", price: 650, image: "https://lcdn.altex.ro/resize/media/catalog/product/i/P/2bd48d28d1c32adea0e55139a4e6434a/iPhone_11_Red_2-up_Vertical_US-EN_SCREEN_d64e5a73.jpg"  },
    { name: "Pampers", price: 10, image: "https://www.agmarket.ro/image/catalog/DEO/PAMPERS%203%2090%201.jpg"},
    { name: "Smart TV", price: 850, image: "https://images.samsung.com/is/image/samsung/p6pim/ro/ue32t5372cuxxh/gallery/ro-full-hd-tv-ue32t5372cuxxh-front-black-440358521?$720_576_PNG$"  },
    { name: "Samsung S20", price: 550, image: "https://www.mytrendyphone.ro/images/Samsung-Galaxy-S20-FE-Duos-128GB-Cloud-Navy-8806090716935-02102020-01-p.jpg"  },
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
      (product: ProductInformation) => product.name.toLowerCase().includes(keyword.toLowerCase())
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
        <Input placeholder="Search" value={keyword} onChange={handleChange} type = "search"/>
      </div>
      <Grid container spacing={5} sx={{ padding: "30px" }}>
        {filteredProducts.map((product: ProductInformation) => (
          <Grid key={`gridKey-${product.name}`} item xs={3}>
            <ProductCard
              name={product.name}
              price={product.price}
              image = {product.image}
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
