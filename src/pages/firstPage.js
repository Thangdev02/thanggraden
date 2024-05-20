import React from "react";
import { Link } from "react-router-dom";
import MediaCard from "../components/cardItem";
import cardData from "../services/data/data";
import "../styles/firstPage.css";
import { Container, Typography } from "@mui/material";
import PrimarySearchAppBar from "../layouts/appBar";
import CustomImageGallery from "../layouts/gallery";
import Footer from "../layouts/footer";
import Blog from "../components/blog";

export default function FirstPage() {
  return (
    <div className="main">
      <PrimarySearchAppBar/>
      <CustomImageGallery/>
    <Container>
    <div className="title">
      <div className="dot"></div>
      <Typography className="titleText"
      variant="h4"
      >Our Blog</Typography>
    </div>
      <div className="blog">
        <Blog/>
      </div>
    <div className="title">
      <div className="dot"></div>
      <Typography className="titleText"
      variant="h4"
      >Our Leaf</Typography>
    </div>
      <div className="row">
        {cardData.map((card) => (
          <Link
            key={card.id}
            to={`/duongdan2/${card.id}`} 
            style={{ textDecoration: "none" }}
            className="card" 
          >
            <MediaCard
              image={card.img}
              title={card.title}
              description={card.description}
            />
          </Link>
        ))}
      </div>
    </Container>
    <Footer/>
    </div>

  );
}
