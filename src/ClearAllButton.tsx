import React, { ReactElement } from "react";

interface Props {
    onClick: () => void;
}

export default function ClearAllButton(props: Props): ReactElement {
  return (
    <a href="#" onClick={props.onClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Clear All()
    </a>
  );
}
