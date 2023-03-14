import React, { useState } from "react";
import Card from "../../components/Card/Card";
import { v4 as uuidv4 } from "uuid";
import "./Dish.css";

const dishes = [
  {
    id: uuidv4(),
    name: "Quiche",
    category: "starter",
    price: "7.99€",
    imageUrl: "https://source.unsplash.com/700x700/?quiche",
  },
  {
    id: uuidv4(),
    name: "Tapas",
    category: "starter",
    price: "8.99€",
    imageUrl: "https://source.unsplash.com/700x700/?tapas",
  },
  {
    id: uuidv4(),
    name: "Mozzarella",
    category: "starter",
    price: "9.99€",
    imageUrl: "https://source.unsplash.com/700x700/?mozzarella",
  },
  {
    id: uuidv4(),
    name: "Salade",
    category: "starter",
    price: "6.99€",
    imageUrl: "https://source.unsplash.com/700x700/?salad",
  },
  {
    id: uuidv4(),
    name: "Bruschetta",
    category: "starter",
    price: "5.99€",
    imageUrl: "https://source.unsplash.com/700x700/?bruschetta",
  },
  {
    id: uuidv4(),
    name: "Pizza",
    category: "main course",
    price: "12.99€",
    imageUrl: "https://source.unsplash.com/700x700/?pizza",
  },
  {
    id: uuidv4(),
    name: "Spaghetti Carbonara",
    category: "main course",
    price: "14.99€",
    imageUrl: "https://source.unsplash.com/700x700/?carbonara",
  },
  {
    id: uuidv4(),
    name: "Pâte",
    category: "main course",
    price: "10.99€",
    imageUrl: "https://source.unsplash.com/700x700/?pasta",
  },
  {
    id: uuidv4(),
    name: "Steak",
    category: "main course",
    price: "25.99€",
    imageUrl: "https://source.unsplash.com/700x700/?steak",
  },
  {
    id: uuidv4(),
    name: "Sushi",
    category: "main course",
    price: "18.99€",
    imageUrl: "https://source.unsplash.com/700x700/?sushi",
  },
  {
    id: uuidv4(),
    name: "Tarte",
    category: "dessert",
    price: "6.99€",
    imageUrl: "https://source.unsplash.com/700x700/?pie",
  },
  {
    id: uuidv4(),
    name: "Crème Brûlée",
    category: "dessert",
    price: "8.99€",
    imageUrl: "https://source.unsplash.com/700x700/?cremebrulee",
  },
  {
    id: uuidv4(),
    name: "Cupcake",
    category: "dessert",
    price: "4.99€",
    imageUrl: "https://source.unsplash.com/700x700/?cupcake",
  },
  {
    id: uuidv4(),
    name: "Macarons",
    category: "dessert",
    price: "7.99€",
    imageUrl: "https://source.unsplash.com/700x700/?macarons",
  },
  {
    id: uuidv4(),
    name: "Glace",
    category: "dessert",
    price: "7.99€",
    imageUrl: "https://source.unsplash.com/700x700/?icecream",
  },
];

const Dish = () => {
  const [activeCategory, setActiveCategory] = useState("starter");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const filteredDishes = dishes.filter(
    (dish) => dish.category === activeCategory
  );

  return (
    <div className="container">
      <div className="menu">
        <button
          className={activeCategory === "starter" ? "active" : ""}
          onClick={() => handleCategoryChange("starter")}
        >
          Entrées
        </button>
        <button
          className={activeCategory === "main course" ? "active" : ""}
          onClick={() => handleCategoryChange("main course")}
        >
          Plats
        </button>
        <button
          className={activeCategory === "dessert" ? "active" : ""}
          onClick={() => handleCategoryChange("dessert")}
        >
          Desserts
        </button>
      </div>
      <div className="dish-container">
        {filteredDishes.map((dish) => (
          <Card
            key={dish.id}
            name={dish.name}
            price={dish.price}
            imageUrl={dish.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Dish;
