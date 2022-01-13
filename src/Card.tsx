import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ProductInformation } from "./App";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';

type Props = {
  name: string;
  price: number;
  image: string;
  onFavoriteClick?: () => void;
  onAddToCartClick?: () => void;
  isFavourite?: boolean;
  quantity?: number;
};

export default function ProductCard(props: Props) {
  const [isFavourite, setIsFavourite] = useState(props.isFavourite);

  const currentlyOnCartPage = props.onAddToCartClick === undefined;

  const renderFavoriteIcon = () => {
    return (
      <IconButton
        size="large"
        onClick={() => {
          if (props.onFavoriteClick) {
            props.onFavoriteClick();
          }
          setIsFavourite(!isFavourite);
        }}
      >
        <FavoriteIcon color={isFavourite ? "error" : "disabled"} />
      </IconButton>
    );
  };

  const renderCartIcon = () => {
    return(
      <Button
          size="small"
          sx={{
            padding: "8px 16px",
            color: "white",
            background:
              "rgb(83,144,217) linear-gradient(90deg, rgba(83,144,217,1) 0%, rgba(78,168,222,1) 50%, rgba(72,191,227,1) 100%)",
            fontFamily: "Poppins",
            fontWeight: 700,
          }}
          onClick={props.onAddToCartClick}
        >
          Add To Cart
        </Button>
    )
  }

  const renderDeleteIcon = () => {
    return(
      <IconButton
        size="large"
        onClick={() => {
          
        }}
      >
        <ClearIcon />
      </IconButton>
    )
  }

  return (
    <Card>
      <CardMedia
        component="img"
        height="210"
        image={props.image}
        alt="random pic"
        sx={{
          objectFit: "contain",
        }}
      />
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 8px 0px 12px",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontFamily="Poppins"
          fontWeight="700"
          sx={{ margin: 0 }}
        >
          {props.name}
        </Typography>
        <Typography
          variant="body2"
          color="#6930C3"
          fontFamily="Poppins"
          fontWeight="700"
        >
          ${props.price}
        </Typography>
      </CardContent>
      <CardActions>
        {!currentlyOnCartPage && renderCartIcon()}
        {!currentlyOnCartPage && renderFavoriteIcon()}
        {currentlyOnCartPage && props.quantity}
        {currentlyOnCartPage && renderDeleteIcon()}

      </CardActions>
    </Card>
  );
}
