import React, { Component } from 'react'

export default class DetailShoe extends Component {
  render() {
    return (
      <div className='row pt-5'>
        <h2 style={{position:"relative", left:"250px"}}>Shoe details</h2>
        <div className="col-5">
          <h3>{this.props.detail.name}</h3>
          <img src={this.props.detail.image} alt="" className='w-100'/>
        </div>
        <table className="col-7" style={{fontSize:"18px"}}>
          <tbody>
          <tr style={{border:"1px solid black"}}>
          <td>Id</td>
          <td>{this.props.detail.id}</td>
          </tr>
          <tr style={{border:"1px solid black"}}>
          <td>Description</td>
          <td>{this.props.detail.description}</td>
          </tr>
          <tr style={{border:"1px solid black"}}>
          <td>Quantity</td>
          <td>{this.props.detail.quantity}</td>
          </tr>
          <tr style={{border:"1px solid black"}}>
          <td>Alias</td>
          <td>{this.props.detail.alias}</td>
          </tr>
          <tr style={{border:"1px solid black"}}>
          <td>Short description</td>
          <td>{this.props.detail.shortDescription}</td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
