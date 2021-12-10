import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ProductInformation } from "./App";

export default function ProductCard(props: ProductInformation) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="210"
        image="https://picsum.photos/536/354"
        alt="random pic"
      />
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 8px 0px 12px"
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
          color="text.secondary"
          fontFamily="Poppins"
          fontWeight="400"
        >
          ${props.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Favourite</Button>
        <Button size="small">Add To Cart</Button>
      </CardActions>
    </Card>
  );
}
