import React, { Component } from 'react'
import Table from './Table'

export default class GioHang extends Component {

  renderGioHang = () => {
    return this.props.mangGioHang.map((sp, index) => {
      return (
       <Table key={index} sp = {sp} />
      )
    })

  }
  render() {
    return (
      <div>
        {/* {this.renderGioHang()} */}
      </div>
    )
  }
}
