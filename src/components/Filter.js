import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../actions/productActions";

class Filter extends Component {
  render() {
    return !this.props.filterProducts ? (
      <div>Loading...</div>
    ) : (
      <div className="filter">
        <div className="filter-result">
          {this.props.filterProducts.count} Products
        </div>
        <div className="filter-sort">
          Order{" "}
          <select
            value={this.props.sort}
            onChange={(e) =>
              this.props.sortProducts(
                this.props.filteredProducts,
                e.target.value
              )
            }
          >
            <option value="latest">Latest</option>
            <option value="lowest">Lowest </option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-size">
          Filter{" "}
          <select
            value={this.props.size}
            onChange={(e) =>
              this.props.filterProducts(this.props.prodcuts, e.target.value)
            }
          >
            <option value="">All</option>
            <option value="XS">XS </option>
            <option value="S">S </option>
            <option value="M">M </option>
            <option value="XL">XL </option>
            <option value="XL">XL </option>
            <option value="XXL">XXL </option>
          </select>
        </div>
      </div>
    );
  }
}
export default connect(
  (state) => ({
    // Ici on connect le state
    size: state.products.size,
    prodcuts: state.products.items,
    filteredProducts: state.products.filteredProducts,
  }),
  {
    // et les actions
    filterProducts,
    sortProducts,
  }
)(Filter); // Ici on branche le component en question au filtre
