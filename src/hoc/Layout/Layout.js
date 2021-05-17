import React from "react";
import Aux from "../Aux/Aux";

const layout = (props) => {
  return (
    <Aux>
      <h3 style={{ color: "red" }}>Slot for Sidebar</h3>
      <h3 style={{ color: "red" }}>Slot for BackDrop</h3>

      <main>{props.children}</main>
    </Aux>
  );
};
export default layout;
