import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";

const INGRED_PRICE = {
  base: 9,
  cheese: 0.5,
  salad: 0.75,
  bacon: 1.5,
  meat: 3.0,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      cheese: 1,
      bacon: 1,
      meat: 1,
    },
    totalPrice: INGRED_PRICE["base"],
  };

  onAddIngredientHandler = (type) => {
    let newingreds = { ...this.state.ingredients };
    newingreds[type] = newingreds[type] + 1;
    let newPrice =
      newingreds[type] > 1
        ? this.state.totalPrice + INGRED_PRICE[type]
        : INGRED_PRICE["base"];
    this.setState({ ingredients: newingreds, totalPrice: newPrice });
  };

  onRemoveIngredientHandler = (type) => {
    let newingreds = { ...this.state.ingredients };
    newingreds[type] = newingreds[type] > 1 ? newingreds[type] - 1 : 1;
    let newPrice =
      this.state.totalPrice > INGRED_PRICE["base"]
        ? this.state.totalPrice - INGRED_PRICE[type]
        : INGRED_PRICE["base"];
    this.setState({ ingredients: newingreds, totalPrice: newPrice });
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>
          <BuildControls
            price={this.state.totalPrice}
            addIngredient={this.onAddIngredientHandler}
            removeIngredient={this.onRemoveIngredientHandler}
          />
        </div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
