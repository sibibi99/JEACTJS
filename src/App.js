import React, { Component } from 'react'
import Header from './compinents/Header';
import Slider from './compinents/Slider';
import ProductList from './compinents/ProductList';
import Modal from './compinents/Modal';
import GioHang from './compinents/GioHang';
import AppGioHang from './BAITAPGIOHANG/AppGioHang';
import DanhSachSinhVien from './QUANLYSINHVIEN/DanhSachSinhVien';

export default class App extends Component {
  // Để sử dụng đươc State ta phải khai báo trong hàm constructor
  constructor(props) {
    super(props);
    this.state = {
      sanPham: {}
    }
  }

  // đây là: STALESS PROPS
  name = "Sidaica"

  mangDienThoai = [
    { id: `sp_1`, name: `iphoneX`, price: `30.000.000 VNÄ`, screen: `screen_1`, backCamera: `backCamera_1`, frontCamera: `frontCamera_1`, img: `./img/sp_iphoneX.png`, desc: `iPhone X features a new all-screen design. Face ID, which makes your face your password` },

    { id: `sp_2`, name: `Note 7`, price: `20.000.000 VNÄ`, screen: `screen_2`, backCamera: `backCamera_2`, frontCamera: `frontCamera_2`, img: `./img/sp_note7.png`, desc: `The Galaxy Note7 comes with a perfectly symmetrical design for good reason` },

    { id: `sp_3`, name: `Vivo`, price: `10.000.000 VNÄ`, screen: `screen_3`, backCamera: `backCamera_3`, frontCamera: `frontCamera_3`, img: `./img/sp_vivo850.png`, desc: `A young global smartphone brand focusing on introducing perfect sound quality` },

    { id: `sp_4`, name: `Blacberry`, price: `15.000.000 VNÄ`, screen: `screen_4`, backCamera: `backCamera_4`, frontCamera: `frontCamera_4`, img: `./img/sp_blackberry.png`, desc: `BlackBerry is a line of smartphones, tablets, and services originally designed` }
  ];
  mangLaptop = [
    { id: 'sp_1', name: 'Macbook', price: '30.000.000 VNĐ', img: './img/lt_macbook.png', desc: 'iPhone X features a new all-screen design. Face ID, which makes your face your password' },
    { id: 'sp_2', name: 'Asus Rog', price: '20.000.000 VNĐ', img: './img/lt_rog.png', desc: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason' },
    { id: 'sp_3', name: 'HP Book', price: '10.000.000 VNĐ', img: './img/lt_hp.png', desc: 'A young global smartphone brand focusing on introducing perfect sound quality' },
    { id: 'sp_4', name: 'Lenovo Thinkpad', price: '15.000.000 VNĐ', img: './img/lt_lenovo.png', desc: 'BlackBerry is a line of smartphones, tablets, and services originally designed' }]
    
    mangGioHang = [];
    // Dữ liệu nhận ở đâu thì gọi hàm ở tại đó
    xemChiTiet = (sanPham) => {
      // Mỗi lần xemChiTiet click thì state thay đổi và render ra lại giao diện
      this.setState({
        sanPham: sanPham
      })
      this.mangGioHang.push(sanPham);
      console.log('San Pham la:', this.mangGioHang);
    }

 
  render() {
    return (
      <div>
        {/* <Header name={this.name} />
        <Slider />
        <div className="bg-dark">
          <div className="container">
            <h3 className="text-center text-white pt-5 pb-5 ">SMART PHONE</h3>
            <ProductList xemChiTiet={this.xemChiTiet} mangSanPham={this.mangDienThoai} />
          </div> */}
        {/* </div> */}
        {/* Giỏ hàng */}
        {/* <div className="container">
        <h3 className="text-center  pt-5 pb-5 ">GIỎ HÀNG</h3>
        <GioHang  sanPham={this.state.sanPham} />

        </div> */}

        {/* <div className="">
          <div className="container">
            <h3 className="text-center pt-5 pb-5 ">LAPTOP</h3>
            <ProductList xemChiTiet={this.xemChiTiet} mangSanPham={this.mangLaptop} />
          </div>
        </div> */}
        {/* <Modal sanPham={this.state.sanPham} /> */}
        {/* <AppGioHang/> */}
        <DanhSachSinhVien/>
      </div>
    )
  }
}
