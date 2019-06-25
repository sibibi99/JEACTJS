import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {

// this.props thuộc tính nhận giá trị từ component Cha truyển vào
// Hàm render Ra sản phẩm
renderSanPham = () => {
  return this.props.mangSanPham.map((sanPham, index) => {
        
    return (
      // Đưa sản phẩm từ mảng được duyệt lên giao diện Product
      <Product xemChiTiet= {this.props.xemChiTiet} key= {index} sanPham = {sanPham}  />
      
    )
  })
}


  render() {
    return (
      <div className="row">
       {this.renderSanPham()}
      </div>
    )
  }
}
