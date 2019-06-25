import React, { Component } from 'react'

export default class Product extends Component {


  render() {

    // Nhận điện thoại từ props.product truyền từ List qua
    // let {name, id} = this.props.Product
    let { img, name, desc } = this.props.sanPham;

    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
        <div className="container">
          <div className="card bg-light" style={{ width: 300 }}>
            <img className="card-img-top" src={img} alt="Card image" style={{ maxWidth: '100%', height: 250 }} />
            <div className="card-body text-center">
              <h4 className="card-title text-center">{name}</h4>
              <p className="card-text">{this.props.sanPham.desc}</p>
              <a onClick={() => this.props.xemChiTiet(this.props.sanPham)} className="btn btn-primary" data-toggle="modal" data-target="#myModal">Xem Chi Tiet</a>
              <a onClick={() => this.props.xemChiTiet(this.props.sanPham)} className="btn btn-danger">Cart</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
