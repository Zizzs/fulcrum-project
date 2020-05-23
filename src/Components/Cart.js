import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "../App.css";

class Cart extends Component {
  state = {
    taxedItems: [],
    totalSalesTax: 0,
    totalCartCost: 0,
    hasAddedTaxToItems: false,
  };

  componentDidUpdate() {
    // Empty Arrays to be filled during the update.
    let itemsToBeTaxed = [];
    let itemsWithTax = [];

    // If the user adds a new item, the itemsToBeTaxed array will retrieve the cart's items
    if (this.props.cart.length !== this.state.taxedItems.length) {
      itemsToBeTaxed = this.props.cart;
    }

    // The cart will process the tax on all items if hasAddedTaxToItems is false
    if (this.state.hasAddedTaxToItems === false) {
      let cartTax = 0;
      let cartCost = 0;
      for (let item of itemsToBeTaxed) {
        // Since i'm copying over the item to a new item to modify, I need to remove the pointer by stringify/parsing the original item.
        let newItem = JSON.parse(JSON.stringify(item));
        let itemPrice = parseFloat(item.price);
        let tax = 0;
        let roundedTax = 0;
        let importTax = 0;
        let roundedImportTax = 0;
        let totalTax = 0;

        // If the item is taxed, then the tax is calculated.
        if (item.taxed) {
          tax = 0.1 * itemPrice;
          roundedTax = parseFloat((Math.ceil(tax * 20) / 20).toFixed(2));
        }

        // If the item is an import, then the import tax is calculated.
        if (item.import) {
          importTax = 0.05 * itemPrice;
          roundedImportTax = parseFloat(
            (Math.ceil(importTax * 20) / 20).toFixed(2)
          );
        }

        // Total Item Tax is calculated by adding both the base tax and the import tax(If the item has either).
        if (newItem.taxed) {
          totalTax += roundedTax;
        }
        if (newItem.import) {
          totalTax += roundedImportTax;
        }

        // The item's price with both taxes is then calculated and rounded to the second decimal.
        newItem.price = (itemPrice + totalTax).toFixed(2);

        // The item's new price with tax is added to the total cart cost.
        cartCost += parseFloat(newItem.price);

        // The item's tax is then added to the total cart tax
        cartTax += totalTax;

        // The item is pushed into the previously initialized itemsWithTax array.
        itemsWithTax.push(newItem);
      }

      // After all items have had tax calculated, the array is then reset to be empty.
      itemsToBeTaxed = [];

      // The state is then set with the new taxed items, the total cart tax, the total cart cost and the boolean has been set to true to end the loop.
      this.setState({
        taxedItems: itemsWithTax,
        totalCartCost: cartCost,
        totalSalesTax: cartTax,
        hasAddedTaxToItems: true,
      });
    }

    // If a user adds a new item into the cart, the itemsToBeTaxed length will be greater than zero, and the boolean will be true. This resets the cart and it will recalculate the tax with the newly added item.
    if (itemsToBeTaxed.length > 0 && this.state.hasAddedTaxToItems) {
      this.setState({ hasAddedTaxToItems: false });
    }
  }

  render() {
    return (
      <div id="cartDiv">
        <div id="cartItems">
          {this.state.taxedItems.map((item, index) => (
            <div className="cartItem" key={uuidv4()}>
              <div>
                <img
                  className="cartItemImage"
                  src={item.image}
                  alt={item.name}
                ></img>
              </div>
              <div className="cartItemInfo">
                <span className="cartItemName">{item.name}</span>
                <span className="cartItemPrice">${item.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div id="salesTaxText">
            Sales Tax: ${this.state.totalSalesTax.toFixed(2)}
          </div>
          <div id="totalCostText">
            Total Cost: ${this.state.totalCartCost.toFixed(2)}
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
