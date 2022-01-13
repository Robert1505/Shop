import React, { ReactElement } from "react";

interface Props {}

export default function CheckoutButton({}: Props): ReactElement {
  return (
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Checkout()
    </a>
  );
}
