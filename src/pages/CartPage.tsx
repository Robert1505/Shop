import { Grid } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";
import { ProductInformation } from "../App";
import ProductCard from "../Card";
import CheckoutButton from "../CheckoutButton";
import "../index.css";

interface Props {
  setFavouriteProducts: Function;
  setCartProducts: Function;
  favouriteProducts: ProductInformation[];
  cartProducts: ProductInformation[];
}

type ProductGroup = {
  quantity: number;
  product: ProductInformation;
} 

export default function CartPage({
  setCartProducts,
  setFavouriteProducts,
  favouriteProducts,
  cartProducts,
}: Props): ReactElement {

  const [productGroups, setProductGroups] = useState<ProductGroup[]>([]);

  useEffect(() => {
    let newProductGroups: ProductGroup[] = [];

    // Iteram peste fiecare produs din cosul de cumparaturi
    cartProducts.forEach((product: ProductInformation) => {
      
      // Verificam daca exista deja o grupare pentru acest produs
      let groupIndex = newProductGroups.findIndex((group: ProductGroup) => group.product.name === product.name)
      if(groupIndex !== -1)
        newProductGroups[groupIndex].quantity++;
      else
        newProductGroups.push({ quantity: 1, product })
    });


    setProductGroups(newProductGroups);
  }, []);

  return (
    <div>
      <Grid container spacing={5} sx={{ padding: "30px" }}>
        {productGroups.map((group: ProductGroup) => (
          <Grid key={`gridKey-${group.product.name}`} item xs={3}>
            <ProductCard
              name={group.product.name}
              price={group.product.price}
              image={group.product.image}
              quantity={group.quantity}
            />
          </Grid>
        ))}
      </Grid>
      <CheckoutButton />
    </div>
  );
}
