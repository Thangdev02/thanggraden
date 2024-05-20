import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function MediaCard({ image, title, description }) {
  return (
    <Card sx={{ maxWidth: 345, height: 400 }}>
      <CardMedia sx={{ height: 200 }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: "text.secondary" }}>
          View Detail
        </Button>
        <Button
        sx={{color: "text.secondary"}}
          size="small"
          endIcon={<ShoppingCartIcon />}
          onClick={() => {
            // Add to cart logic
            console.log("Added to cart");
          }}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
