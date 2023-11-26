import React, { Component } from "react";

export default class ModalCart extends Component {
  renderCart = () => {
    return this.props.cart.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>
            <img src={item.image} alt={item.name} style={{ width: 100 }} />
          </td>
          <td>{item.name}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.upAndDownCart(item.id, 1);
              }}
            >
              +
            </button>
            {item.quantity}
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.upAndDownCart(item.id, -1);
              }}
            >
              -
            </button>
          </td>
          <td>{(item.quantity * item.price).toLocaleString()}</td>
          <td>
            <button className="btn btn-danger" onClick={()=>{
                this.props.deleteCart(item.id)
            }}>
                Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ minWidth: 1000 }}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Giỏ hàng
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
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>{this.renderCart()}</tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5}></td>
                    <td>Count</td>
                    <td>{this.props.countCarts()}</td>
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
    );
  }
}
