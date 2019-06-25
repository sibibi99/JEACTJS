import React, { Component } from 'react'
import SinhVien from './SinhVien';
import FormNhap from './FormNhap';

export default class DanhSachSinhVien extends Component {
    render() {
        return (
            <div className="">
                <h1 className="display-4 text-center">Quản Lý Người Dùng</h1>
                <div className="container-fluid">
                    <button className="btn btn-success my-4 " data-toggle="modal" data-target="#myModal">Thêm Người Dùng</button>
                    <table className="table">
                        <thead>
                            <tr className="card-header bg-dark text-white">
                            <td>Mã Khách Hàng</td>
                            <td>Họ Tên</td>
                            <td>Công Ty</td>
                            <td>Số Điện Thoại</td>
                            <td>Email</td>
                            <td>Hành Động</td>
                            </tr>
                        </thead>
                        <tbody>
                            <SinhVien/>
                        </tbody>
                    </table>
                </div>
                <FormNhap/>
            </div>
        )
    }
}
