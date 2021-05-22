import React from "react";
import Button from "../UI/MyButton/MyButton";

const orderSummary = (props) => {
  let ingredList = Object.keys(props.ingredients).map((ingred) => (
    <li key={ingred}>
      <strong>{ingred.toUpperCase()}</strong> : {props.ingredients[ingred]}
    </li>
  ));

  return (
    <>
      <h3>Order Summary </h3>
      <p>Your Burger contains following ingredients:</p>
      <ul>{ingredList}</ul>
      <p>
        <strong>Total Price: {props.price}</strong>
      </p>
      <Button buttonType="Danger" clicked={props.canceledPurchase}>
        Cancel
      </Button>
      <Button buttonType="Success" clicked={props.continuedPurchase}>
        Continue
      </Button>
    </>
  );
};

export default orderSummary;
