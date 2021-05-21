import React from "react";

const orderSummary = (props) => {
  let ingredList = Object.keys(props.ingredients).map((ingred) => (
    <li key={ingred}>
      <strong>{ingred.toUpperCase()}</strong> : {props.ingredients[ingred]}
    </li>
  ));

  return (
    <>
      <h3>Order Summary </h3>
      <p>Delicious Burger with the following ingredients</p>
      <ul>{ingredList}</ul>
    </>
  );
};

export default orderSummary;
