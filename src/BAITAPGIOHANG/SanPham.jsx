import React, { Component } from 'react'

export default class SanPham extends Component {
  render() {

    let { img, name, desc } = this.props.sanpham;
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
        <div className="container">
          <div className="card bg-light" style={{ width: 300 }}>
            <img className="card-img-top" src={img} alt="Card image" style={{ maxWidth: '100%', height: 250 }} />
            <div className="card-body text-center">
              <h4 className="card-title text-center">{name}</h4>
              <p className="card-text">{desc}</p>
              <a onClick = {() => this.props.muaHang(this.props.sanpham)} className="btn btn-success text-white">Thêm Vào Giỏ</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
