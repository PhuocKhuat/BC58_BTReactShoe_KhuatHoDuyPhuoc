import React, { Component } from 'react'

export default class CartShoe extends Component {
  renderCart = () => (this.props.cart.map(item => 
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>${item.price * item.soLuong}</td>
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
  // let {cart} = this.props;
    return (
      <div  className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
        <div className="modal-dialog" style={{ minWidth: 1000 }}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="exampleModalLabel" style={{fontSize:"30px", position:"absolute", left:"460px"}}>
                Cart
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
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
                <tbody>{this.renderCart()}</tbody>
                <tfoot>
                  <tr>
                    <td>Count</td>
                    <td>
                    {this.props.handleCountCarts()}
                    </td>
                  </tr>
                  <tr>
                    <td>Total Price</td>
                    <td>{this.props.cart.reduce((acc, item)=> acc + item.price * item.soLuong, 0)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
