import React, { ReactElement } from "react";

interface Props {
    totalPrice: number;
}

export default function CheckoutButton(props: Props): ReactElement {
  return (
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Checkout(${props.totalPrice})
    </a>
  );
}
