import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";

const burger = (props) => {
  let transformedIngred = Object.keys(props.ingredients)
    .map((ingred) => {
      return [...Array(props.ingredients[ingred])].map((_, idx) => {
        return <BurgerIngredient key={ingred + idx} type={ingred} />;
      });
    })
    .reduce((acum, elm) => {
      return acum.concat(elm);
    }, []);

  //   console.log(transformedIngred);
  if (transformedIngred.length === 0) {
    transformedIngred = <h4> Please add your ingredients</h4>;
  }
  return (
    <div className={classes.Burger}>
      <p> Burger Component</p>
      <BurgerIngredient type="bread-top" />
      {/* {[
        <BurgerIngredient type="meat" />,
        [<BurgerIngredient type="salad" />, <BurgerIngredient type="meat" />],
      ]} */}
      {transformedIngred}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
