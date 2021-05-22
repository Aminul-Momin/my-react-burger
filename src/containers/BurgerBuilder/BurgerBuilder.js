import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

const INGRED_PRICE = {
  base: 4,
  cheese: 0.5,
  salad: 0.75,
  bacon: 1.5,
  meat: 3.0,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: INGRED_PRICE["base"],
    purchasable: false,
    purchasing: false,
  };

  updatePurchasable = (ingredients) => {
    const totalIngreds = Object.keys(ingredients)
      .map((ingred) => {
        return ingredients[ingred];
      })
      .reduce((accm, val) => {
        return accm + val;
      }, 0);

    this.setState({ purchasable: totalIngreds > 0 });
  };

  onAddIngredientHandler = (type) => {
    let newingreds = { ...this.state.ingredients };
    newingreds[type] = newingreds[type] + 1;
    let newPrice = this.state.totalPrice + INGRED_PRICE[type];
    this.setState({ ingredients: newingreds, totalPrice: newPrice });
    this.updatePurchasable(newingreds);
  };

  onRemoveIngredientHandler = (type) => {
    // if (this.state.ingredients[type] <= 0) return;
    let newingreds = { ...this.state.ingredients };
    newingreds[type] = newingreds[type] - 1;
    let newPrice = this.state.totalPrice - INGRED_PRICE[type];
    this.setState({ ingredients: newingreds, totalPrice: newPrice });
    this.updatePurchasable(newingreds);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  cancelPurchaseHandler = () => {
    this.setState({ purchasing: false });
  };

  continuePurchaseHandler = () => {
    alert("Continued");
  };

  render() {
    let disalbleInfo = { ...this.state.ingredients };
    for (let key in disalbleInfo) {
      disalbleInfo[key] = disalbleInfo[key] <= 0;
    }

    const orderSummary = this.state.purchasing ? (
      <OrderSummary
        ingredients={this.state.ingredients}
        price={this.state.totalPrice}
        canceledPurchase={this.cancelPurchaseHandler}
        continuedPurchase={this.continuePurchaseHandler}
      />
    ) : null;

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          closeModal={this.cancelPurchaseHandler}
        >
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <div>
          <BuildControls
            price={this.state.totalPrice}
            addIngredient={this.onAddIngredientHandler}
            removeIngredient={this.onRemoveIngredientHandler}
            disableRemoveIng={disalbleInfo}
            ordered={this.purchaseHandler}
            disabled={this.state.purchasable}
          />
        </div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
