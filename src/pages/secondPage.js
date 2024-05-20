import React, { useState } from "react";
import { useParams } from "react-router-dom";
import cardData from "../services/data/data";
import "../styles/secondPage.css";
import PrimarySearchAppBar from "../layouts/appBar";
import ResponsiveDialog from "../components/dialog";

function SecondPage() {
  const { id } = useParams();
  const card = cardData.find((card) => card.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div>
      <PrimarySearchAppBar />

      <div className="detail-container">
        <img className="detail-image" src={card.img} alt={card.title} />
        <h2 className="detail-title">{card.title}</h2>
        <p className="detail-description">{card.description}</p>
        <div className="button-container">
          <button className="decrement-button" onClick={handleDecrement}>
            -
          </button>
          <div className="quantity-display">{quantity}</div>
          <button className="increment-button" onClick={handleIncrement}>
            +
          </button>
        </div>
       <ResponsiveDialog/>
      </div>

    </div>
  );
}

export default SecondPage;
