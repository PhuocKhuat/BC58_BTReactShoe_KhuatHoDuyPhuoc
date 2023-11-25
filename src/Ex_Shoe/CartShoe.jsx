import React, { Component } from 'react'

export default class CartShoe extends Component {
  renderCart = () => (this.props.cart.map(item => 
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td><img src={item.image} alt="" className='w-25'/></td>
      <td>
        <button className='btn btn-danger w-25' onClick={()=>{this.props.handleMinus(item)}}>-</button>
        {item.soLuong}
        <button className='btn btn-success w-25' onClick={()=>{this.props.handlePlus(item)}}>+</button>
      </td>
      <td><button className='btn btn-danger' onClick={()=>{
        this.props.handleDelete(item.id)
      }}>Delete</button></td>
    </tr>
    ))
  render() {
    return (
      <div className=''>
        <table className="table w-100">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
             {this.renderCart()}
          </tbody>
        </table>
      </div>
    )
  }
}
