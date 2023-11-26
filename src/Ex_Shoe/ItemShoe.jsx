import React, { Component } from "react";

export default class ItemShoe extends Component {
  render() {
    return (
      <div className="col-3 ItemShoe">
        <img src={this.props.data.image} alt="" className="w-100" />
        <h4>{this.props.data.name}</h4>
        <p>{this.props.data.price}</p>
        <button
          className="btn btn-dark"
          onClick={() => {
            this.props.handleClick(this.props.data);
          }}
        >
          Add To Carts
        </button>
          <button
            className="btn btn-secondary ms-2"
            onClick={() => {
              this.props.handleDetail(this.props.data);
            }}
          >
            Details
          </button>
      </div>
    );
  }
}
