import React from "react";
import Aux from "../Aux/Aux";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import classes from "./Layout.module.css";

const layout = (props) => {
  return (
    <Aux>
      <h1>{props.children}</h1>
      <h3 style={{ color: "red" }}>Slot for Sidebar</h3>
      <h3 style={{ color: "red" }}>Slot for BackDrop</h3>

      <main className={classes.container}>
        <BurgerBuilder />
      </main>
    </Aux>
  );
};
export default layout;
