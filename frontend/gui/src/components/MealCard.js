import React from "react";
import "antd/dist/antd.css";
import "./MealCard.css";
import { Card } from "antd";

const MealCard = (props) => {
  return (
    <Card
      title="Default size card"
      extra={<a href="/">More</a>}
      style={{ width: 300 }}
    >
      <p>{props.meal_name}</p>
      <p>{props.description}</p>
      <p>{props.price_tag}</p>
    </Card>
  );
};
export default MealCard;
