import React, { Component } from "react";
import {NavLink} from "react-router-dom"
export default class ShoeItem extends Component {
  render() {
    const {id ,name, price, image } = this.props.shoe;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
          <button className="btn btn-info mx-3" onClick={()=>{
            this.props.addToCart(this.props.shoe)
          }}>Add to cart</button>
          <NavLink to={`/detail/${id}`} className="btn btn-primary">
            Details
          </NavLink>
        </div>
      </div>
    );
  }
}
