import React from "react";
import Aux from "../Aux/Aux";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import classes from "./Layout.module.css";

const layout = (props) => {
  return (
    <Aux>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ color: "red" }}>NavBar Slot</p>
        <p style={{ color: "red" }}>Sidebar Slot</p>
      </div>
      <main className={classes.container}>
        <BurgerBuilder />
      </main>
    </Aux>
  );
};
export default layout;
