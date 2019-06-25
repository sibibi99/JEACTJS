import React, { Component } from 'react'

export default class GioHang extends Component {
  // Hàm Render Giỏ Hàng
  renderGioHang = () => {

    return this.props.gioHang.map((spGH, index) => {
      return (
        <tr key={index}>
          <td><img src={spGH.HinhAnh} width={100} height={100} /></td>
          <td>{spGH.TenSP}</td>
          <td>{spGH.Gia}</td>
          <td>
            <button onClick={() => this.props.TangGiamSoLuong(spGH.MaSP, false)} className="disabled" id='SetButton'>-</button>
            {spGH.SoLuong}
            <button onClick={() => this.props.TangGiamSoLuong(spGH.MaSP, true)}>+</button>
          </td>
          <td>{spGH.Gia * spGH.SoLuong}</td>
          <td><button onClick={() => this.props.XoaSanPham(spGH.MaSP)} className="btn btn-danger">Xoa</button></td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr className="card-header">
              <td>Hình Ảnh</td>
              <td>Sản Phẩm</td>
              <td>Giá</td>
              <td>Số Lượng</td>
              <td>Tổng Cộng</td>
              <td>Xóa</td>
            </tr>
          </thead>
          <tbody>
            {this.renderGioHang()}
          </tbody>
        </table>
        <h2 className="text-right">TỔNG TIỀN: {
          this.props.gioHang
            .reduce((tongTien, sanPham, index) => {
              return (tongTien = tongTien + sanPham.Gia * sanPham.SoLuong)
            }, 0).toLocaleString()
        }</h2>
      </div>
    )
  }
}
