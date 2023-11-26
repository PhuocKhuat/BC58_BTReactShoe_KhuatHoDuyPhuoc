//BÀI TẬP CHÍNH, 2 FOLDER COMPONENT VÀ DATA KHÔNG PHẢI.
import React, { Component } from "react";
// import { Routes, Route } from "react-router-dom";
import { shoeArr } from "./data";
import ListShoe from "./ListShoe";
import CartShoe from "./CartShoe";
import DetailShoe from "./DetailShoe";

export default class Ex_Shoe extends Component {
  state = {
    listShoe: shoeArr,
    cart: [],
    detail: [],
  };
  // componentWillMount() {
  //   let items = JSON.parse(localStorage.getItem("LOCAL"));
  //   this.setState({
  //     listShoe: shoeArr,
  //     cart: items,
  //     detail: items,
  //   });
  // }
  // localStorage.setItem("LOCAL", JSON.stringify(cloneCart1));
  handleMinus = (shoe) => {
    let cloneCart1 = [...this.state.cart];
    let index = cloneCart1.findIndex((item) => item.id === shoe.id); //tìm vị trí của shoe trong cloneCart.
    if (index === -1) {
      //Chưa có trong giỏ hàng
      let newShoe = { ...shoe, soLuong: 1 };
      cloneCart1.push(newShoe);
    } else if (cloneCart1[index].soLuong > 1) {
      //Đã có trong giỏ hàng
      cloneCart1[index].soLuong--;
    }
    this.setState({ cart: cloneCart1 });
  };
  handlePlus = (shoe) => {
    let cloneCart2 = [...this.state.cart];
    let index = cloneCart2.findIndex((item) => item.id === shoe.id); //tìm vị trí của shoe trong cloneCarrt.
    if (index === -1) {
      //Chưa có trong giỏ hàng
      let newShoe = { ...shoe, soLuong: 1 };
      cloneCart2.push(newShoe);
    } else {
      //Đã có trong giỏ hàng
      cloneCart2[index].soLuong++;
    }
    this.setState({ cart: cloneCart2 });
  };
  handleAddToCarts = (shoe) => {
    //TH1: sp đã có trong giỏ hàng.
    let cloneCart3 = [...this.state.cart];
    let index = cloneCart3.findIndex((item) => item.id === shoe.id); //tìm vị trí của shoe trong cloneCart3.
    if (index === -1) {
      //Chưa có trong giỏ hàng
      let newShoe = { ...shoe, soLuong: 1 };
      cloneCart3.push(newShoe);
    } else {
      //Đã có trong giỏ hàng
      cloneCart3[index].soLuong++;
    }
    //TH2: sp chưa có trong giỏ hàng.
    this.setState({ cart: cloneCart3 });
  };
  handleDelete = (shoe) => {
    let cloneCart4 = [...this.state.cart];
    let index = cloneCart4.filter((item) => item.id !== shoe);
    this.setState({ cart: index });
  };
  handleChangeDetails = (detailShoe) => {
    this.setState({ detail: detailShoe });
  };
  handleCountCarts = () =>  this.state.cart.reduce((count, item, index) => count += item.soLuong, 0);
  
  render() {
    return (
      <div className="container row">
        <h1>Shoes Shop</h1>
        <div className="col" style={{ position: "relative", top: "400px" }}>
          <a href="/" className="text-decoration-none">
            Home
          </a>
          <br />
          <a href="/shop" className="text-decoration-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          >
            Shop
          </a>
        </div>
        <div className="row col-11">
          <ListShoe
            handleClick={this.handleAddToCarts}
            listShoe={this.state.listShoe}
            handleDetail={this.handleChangeDetails}
          />
          <CartShoe
            handleDelete={this.handleDelete}
            cart={this.state.cart}
            handleMinus={this.handleMinus}
            handlePlus={this.handlePlus}
            handleCountCarts = {this.handleCountCarts}
          />
          <DetailShoe detail={this.state.detail}/>
        </div>
      </div>
    );
  }
}
// <Routes>
//   <Route
//     path="/"
//     element={

//     }
//   />
//   <Route
//     path="/shop"
//     element={

//     }
//   />
// </Routes>
