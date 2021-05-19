import React from "react";
import Aux from "../Aux/Aux";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import classes from "./Layout.module.css";

const layout = (props) => {
  return (
    <Aux>
      {props.children}
      <p style={{ color: "red" }}>Slot for Navigation Bar</p>
      <p style={{ color: "red" }}>Slot for Sidebar</p>

      <main className={classes.container}>
        <BurgerBuilder />
      </main>
    </Aux>
  );
};
export default layout;
