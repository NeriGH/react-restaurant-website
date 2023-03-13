import React from "react";
import Card from "../../components/Card/Card";
import { v4 as uuidv4 } from "uuid";
import "./Drink.css";

const drinks = [
  {
    id: uuidv4(),
    name: "Latte glacé",
    price: "3.99€",
    imageUrl: "https://source.unsplash.com/700x700/?latte",
  },
  {
    id: uuidv4(),
    name: "Thé Glacé",
    price: "2.99€",
    imageUrl: "https://source.unsplash.com/700x700/?tea",
  },
  {
    id: uuidv4(),
    name: "Cappuccino",
    price: "4.99€",
    imageUrl: "https://source.unsplash.com/700x700/?cappuccino",
  },
  {
    id: uuidv4(),
    name: "Bière",
    price: "5.99€",
    imageUrl: "https://source.unsplash.com/700x700/?beer",
  },
  {
    id: uuidv4(),
    name: "Mocha",
    price: "4.99€",
    imageUrl: "https://source.unsplash.com/700x700/?mocha",
  },
];

const Drink = () => {
  return (
    <div className="container">
      <div className="drink-container">
        {drinks.map((drink) => (
          <Card
            key={drink.id}
            name={drink.name}
            price={drink.price}
            imageUrl={drink.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Drink;
