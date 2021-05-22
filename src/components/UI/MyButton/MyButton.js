import React from "react";
import classes from "./MyButton.module.css";

const myButton = (props) => (
  <button
    disabled={props.disabled}
    className={[classes.Button, classes[props.buttonType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default myButton;
