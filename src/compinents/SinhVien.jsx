import React, { Component } from 'react'

export default class SinhVien extends Component {

  render() {
    let { MaSV, TenSV, Tuoi } = this.props.SinhVien;
    return (
      <div className= "card ">
        <p className="lead">Tên Sinh Viên: {TenSV}</p>
        <p className="lead">Lớp: {Tuoi}</p>
        <p className="lead">Mã Số: {MaSV}</p>

      </div>
    )
  }
}
