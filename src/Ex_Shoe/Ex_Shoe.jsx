import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import { shoeArr } from './data'
import ListShoe from './ListShoe'
import CartShoe from './CartShoe'

export default class Ex_Shoe extends Component {
  state={
    listShoe : shoeArr,
    cart: [],
  }
  componentWillMount(){
    let items = JSON.parse(localStorage.getItem("LOCAL"));      
    this.setState({
      listShoe : shoeArr,
      cart: items,  
    });
  }
  handleMinus = (shoe) => {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex(item => item.id === shoe.id) //tìm vị trí của shoe trong cloneCart.
    if(index === -1){ //Chưa có trong giỏ hàng
        let newShoe = {...shoe, soLuong : 1}
        cloneCart.push(newShoe);
    }
    else if(cloneCart[index].soLuong > 1){ //Đã có trong giỏ hàng
        cloneCart[index].soLuong--;
    }
    //TH2: sp chưa có trong giỏ hàng.
    this.setState({cart: cloneCart});
    localStorage.setItem("LOCAL", JSON.stringify(cloneCart));
  }
  handlePlus = (shoe) => {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex(item => item.id === shoe.id) //tìm vị trí của shoe trong cloneCart.
    if(index === -1){ //Chưa có trong giỏ hàng
        let newShoe = {...shoe, soLuong : 1}
        cloneCart.push(newShoe);
    }
    else{ //Đã có trong giỏ hàng
        cloneCart[index].soLuong++;
    }
    //TH2: sp chưa có trong giỏ hàng.
    this.setState({cart: cloneCart});
    localStorage.setItem("LOCAL", JSON.stringify(cloneCart));
  }
  handleAddToCarts = (shoe) =>{
    //TH1: sp đã có trong giỏ hàng.
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex(item => item.id === shoe.id) //tìm vị trí của shoe trong cloneCart.
    if(index === -1){ //Chưa có trong giỏ hàng
        let newShoe = {...shoe, soLuong : 1}
        cloneCart.push(newShoe);
    }
    else{ //Đã có trong giỏ hàng
        cloneCart[index].soLuong++;
    }
    //TH2: sp chưa có trong giỏ hàng.
    this.setState({cart: cloneCart});
    localStorage.setItem("LOCAL", JSON.stringify(cloneCart));
  }
  handleDelete = (shoe) =>{
    let cloneCart = [...this.state.cart];
    let index = cloneCart.filter(item => item.id !== shoe);
    this.setState({cart: index});
    localStorage.setItem("LOCAL", JSON.stringify(index));
  }
  
  render() {
    return (
      <div className='container row'>
        {/* <div className='row d-flex flex-column'> */}
        {/* <div className='col-6'> */}
            <div className="col" style={{position:"relative", top:"400px"}}>
            <a href='/' className='text-decoration-none'>Home</a>
            <br />
            <a href='/shop' className='text-decoration-none'>Shop</a>
            </div>
            {/* {/* </div> */}
            <div className="row col-11"> 
            <Routes>
              <Route path="/" element={<ListShoe handleClick={this.handleAddToCarts} listShoe={this.state.listShoe}/>}/>
              <Route path="/shop" element={<CartShoe handleDelete={this.handleDelete} cart={this.state.cart} handleMinus={this.handleMinus} handlePlus={this.handlePlus} />}/>
            </Routes>
        </div>
        {/* </div> */}
      </div>
    )
  }
}
