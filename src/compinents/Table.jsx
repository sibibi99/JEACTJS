import React, { Component } from 'react'


export default class Table extends Component {
	render() {
		let {index, src, name, price}  = this.props.sanPham;
		return (
			<div className="card pb-5">
				<table className="table">
					<thead>
						<tr className="card-header bg-dark text-white">
							<th>Số TT</th>
							<th>Hình Ảnh</th>
							<th>Tên Sản Phẩm</th>
							<th>Giá</th>
							<th>Số Lượng</th>
							<th>Tổng Cộng</th>
							<th>Thao tác</th>
						</tr>
					</thead>
					<tbody>
						<tr className="text-dark" >
							<td>{index}</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div >
		)
	}
}
