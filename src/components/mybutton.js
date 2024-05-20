import { Button } from "@mui/material";
import React from "react";

export default function MyButton({ text, link }) {
  return (
    <Button variant="contained" component="a" href={link}>
        {text}
    </Button>
  );
}
