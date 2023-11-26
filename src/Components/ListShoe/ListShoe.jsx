import React, { Component } from "react";
import ShoeData from "../../data/shoe.json";
import ShoeItem from "../ShoeItem";
import ModalCart from "../ModalCart/ModalCart";
export default class ListShoe extends Component {
  state = {
    shoeData: ShoeData,
    cart: [],
    detail: []
  };

  addingToCart = (newCart) => {
    let CartItem = {
        id: newCart.id,
        name: newCart.name,
        price: newCart.price,
        image: newCart.image,
        quantity: 1
    }

    let index = this.state.cart.findIndex((item)=> item.id === CartItem.id );

    if(index !== -1) {
        this.state.cart[index].quantity += 1
    }
    else {
        this.state.cart.push(CartItem)
    }
    let cartUpdate = [...this.state.cart]
    this.setState({
        cart: cartUpdate
    })
  }

  deleteCart = (id) => {
    let index = this.state.cart.findIndex((cartItem)=> cartItem.id === id)

    if(index !== -1) {
        this.state.cart.splice(index, 1)
    }
    this.setState({
        cart: this.state.cart
    })
  }

  upAndDownCart = (id, number) => {
    let cart = [...this.state.cart];
    let index = cart.findIndex((cartItems)=> cartItems.id === id);
    if(index !== -1 ) {
        if(cart[index].quantity <=1 && number === -1) {
            alert("số lượng tối thiểu phải là 1!")
            return 0
        }
        cart[index].quantity += number
        this.setState({
            cart
        })
    }
  }

  countCarts = () => {
    return this.state.cart.reduce((countCarts, cartItems, index)=> {
        return (countCarts += cartItems.quantity)
    },0)
  }
  renderShoeItem = () => {
    return this.state.shoeData.map((item) => (
      <div className="col-4 mt-3" key={item.id}>
        <ShoeItem shoe={item} addToCart={this.addingToCart} />
      </div>
    ));
  };
  render() {
    return (
      <div className="container">
        <h2 className="text-center text-success">Danh sách sản phẩm</h2>
        <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Giỏ hàng {this.countCarts()}
          </button>
        <div className="row">{this.renderShoeItem()}</div>
        <ModalCart cart={this.state.cart} upAndDownCart={this.upAndDownCart} deleteCart={this.deleteCart} countCarts={this.countCarts}/>
      </div>
    );
  }
}
