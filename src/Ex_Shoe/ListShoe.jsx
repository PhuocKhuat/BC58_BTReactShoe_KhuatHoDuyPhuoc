import React, { Component } from 'react'
import ItemShoe from './ItemShoe'

export default class ListShoe extends Component {
  renderList = () => this.props.listShoe.map(item => <ItemShoe key={item.id} handleClick={this.props.handleClick} data={item}/>)
  render() {
    return (
      <div className='row listShoe'>
        {/* <div className='row col-10'> */}
        {this.renderList()}
        {/* </div> */}
      </div>
    )
  }
}
