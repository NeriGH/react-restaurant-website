import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import "./Card.css";

const Card = ({ name, price, imageUrl }) => {
  const cardId = uuidv4();
  return (
    <div key={cardId} className="card">
      <div className="title">{name}</div>
      <img src={imageUrl} alt={name} />
      <div className="price">{price}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Card;
