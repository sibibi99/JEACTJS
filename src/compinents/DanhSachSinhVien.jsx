import React, { Component } from 'react'
import SinhVien from './SinhVien';

export default class DanhSachSinhVien extends Component {
	mangSinhVien = [
		{ MaSV: 1, TenSV: 'Nguyễn văn a', Tuoi: 18 },
		{ MaSV: 2, TenSV: 'Nguyễn văn b', Tuoi: 12 },
		{ MaSV: 3, TenSV: 'Nguyễn văn c', Tuoi: 11 },
		{ MaSV: 4, TenSV: 'Nguyễn văn d', Tuoi: 13 },
	];

	// Hàm render Sinh Vien
	renderSinhVien = () => {
		return this.mangSinhVien.map((sv, index) => {
			return <SinhVien key={index} SinhVien={sv}/>
		})
	}

	render() {
		return (
			<div>
				{this.renderSinhVien()}
			</div>
		)
	}
}
