import React, { Component } from 'react'
import SanPham from './SanPham';

export default class DanhSachGioHang extends Component {

    renderSanPham = () => {
        return this.props.mangSanPham.map((sanpham, index) => {
            return <SanPham key={index} sanpham={sanpham} muaHang={this.props.muaHang} TangGiamSoLuong={this.props.TangGiamSoLuong}/>
        })
    }
    render() {
        return (
            <div className="row py-5">
                {this.renderSanPham()}
            </div>
        )
    }
}
