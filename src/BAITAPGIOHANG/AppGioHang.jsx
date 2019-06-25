import React, { Component } from 'react'
import DanhSachGioHang from './DanhSachGioHang';
import GioHang from './GioHang';

export default class AppGioHang extends Component {

	constructor(props) {
		super(props);
		this.state = {
			gioHang: [
				// {MaSp: 1, TenSP:"Iphone", HinhAnh:"", SoLuong:1, Gia:99999}
			]
		}
	}


	mangSanPham = [
		{ id: `sp_1`, name: `iphoneX`, price: 30000000, screen: `screen_1`, backCamera: `backCamera_1`, frontCamera: `frontCamera_1`, img: `./img/sp_iphoneX.png`, desc: `iPhone X features a new all-screen design. Face ID, which makes your face your password` },

		{ id: `sp_2`, name: `Note 7`, price: 20000000, screen: `screen_2`, backCamera: `backCamera_2`, frontCamera: `frontCamera_2`, img: `./img/sp_note7.png`, desc: `The Galaxy Note7 comes with a perfectly symmetrical design for good reason` },

		{ id: `sp_3`, name: `Vivo`, price: 15000000, screen: `screen_3`, backCamera: `backCamera_3`, frontCamera: `frontCamera_3`, img: `./img/sp_vivo850.png`, desc: `A young global smartphone brand focusing on introducing perfect sound quality` },

		{ id: `sp_4`, name: `Blacberry`, price: 18000000, screen: `screen_4`, backCamera: `backCamera_4`, frontCamera: `frontCamera_4`, img: `./img/sp_blackberry.png`, desc: `BlackBerry is a line of smartphones, tablets, and services originally designed` }
	];

	// Dữ liệu ở đâu dùng Callback ở đó
	muaHang = (sanPhamDuocChon) => {
		console.log(sanPhamDuocChon);
		// Tạo biến spGH để hứng sản phẩm từ Giở hàng trả về
		let spGH = {
			MaSP: sanPhamDuocChon.id,
			TenSP: sanPhamDuocChon.name,
			HinhAnh: sanPhamDuocChon.img,
			Gia: sanPhamDuocChon.price,
			SoLuong: 1
		}

		// Kiểm tra sản phẩm có trong giỏ hàng hay chưa
		let gioHangCapNhat = this.state.gioHang;
		let index = this.state.gioHang.findIndex(sp => sp.MaSP === spGH.MaSP)
		if (index !== -1) {
			// Tim thay san pham
			gioHangCapNhat[index].SoLuong += 1
		} else {
			gioHangCapNhat.push(spGH);
		}

		// Set lại giá trị cho State
		this.setState({
			gioHang: this.state.gioHang // Gio hang sau khi them
		})
	}

	// Hàm Tăng giảm Số lượng
	TangGiamSoLuong = (maSP, TangGiam) => {
		let mangGioHang = this.state.gioHang;
		let index = mangGioHang.findIndex(sp => sp.MaSP === maSP);
		console.log(index);
		if (index !== -1) {
			console.log(mangGioHang[index].SoLuong);
			if (TangGiam) {
				mangGioHang[index].SoLuong += 1;
			} else {
				if (mangGioHang[index].SoLuong > 1) {
					mangGioHang[index].SoLuong -= 1;
				} else {
					alert('Tối thiểu là 1 sản phẩm')
				}
			}

		}
		// Set lại giá trị cho State
		this.setState({
			gioHang: this.state.gioHang // Gio hang sau khi them
		})

	}

	// Hàm Xóa Sản Phẩm
	XoaSanPham = (maSP) => {
		let mangGioHang = this.state.gioHang;
		let index = mangGioHang.findIndex(sp => sp.MaSP === maSP);
		if (index != -1) {
			mangGioHang.splice(index, 1);
			// Set lại giá trị cho State
			this.setState({
				gioHang: mangGioHang // Gio hang sau khi them
			})
		}
	}


	render() {
		return (
			<div className="container">
				<h3 className='text-center'>Mua Hang Online</h3>
				<DanhSachGioHang mangSanPham={this.mangSanPham} muaHang={this.muaHang} />
				<h3>Gio Hang</h3>
				<GioHang gioHang={this.state.gioHang} TangGiamSoLuong={this.TangGiamSoLuong} XoaSanPham={this.XoaSanPham} />
				{/* <h2 className="text-right">TỔNG TIỀN: {
          this.state.gioHang
            .reduce((tongTien, sanPham, index) => {
              return (tongTien = tongTien + sanPham.Gia * sanPham.SoLuong)
            }, 0)
        }</h2> */}
			</div>
		)
	}
}
