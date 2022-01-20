import { Grid } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";
import { ProductInformation } from "../App";
import ProductCard from "../Card";
import CheckoutButton from "../CheckoutButton";
import ClearAllButton from "../ClearAllButton";
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
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let newProductGroups: ProductGroup[] = [];
    let newTotalPrice = 0;

    // Iteram peste fiecare produs din cosul de cumparaturi
    cartProducts.forEach((product: ProductInformation) => {
      newTotalPrice += product.price;
      // Verificam daca exista deja o grupare pentru acest produs
      let groupIndex = newProductGroups.findIndex((group: ProductGroup) => group.product.name === product.name)
      if(groupIndex !== -1)
        newProductGroups[groupIndex].quantity++;
      else
        newProductGroups.push({ quantity: 1, product })
    });

    setTotalPrice(newTotalPrice);
    setProductGroups(newProductGroups);
  }, [cartProducts]);



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
              onDeleteClick={() => {
                let newCartProducts: ProductInformation[] = []
                newCartProducts = cartProducts.filter(product => product.name !== group.product.name)
                setCartProducts(newCartProducts);
              }}
              setCartProducts = {setCartProducts}
            />
          </Grid>
        ))}
      </Grid>
      <CheckoutButton totalPrice = {totalPrice} />
      <ClearAllButton onClick = {() => setCartProducts([])} numberOfProducts = {cartProducts.length}/>
    </div>
  );
}
