import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const CONTROLS = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <div>
        Total Price: <strong>{props.price}</strong>
      </div>
      {CONTROLS.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.addIngredient(ctrl.type)}
          removed={() => props.removeIngredient(ctrl.type)}
          disabled={props.disableRemoveIng[ctrl.type]}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!props.disabled}
        onClick={props.ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
