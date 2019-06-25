import React, { Component } from 'react'

export default class FormNhap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      MaKH: '',
      HoTen: '',
      CongTy: '',
      SoDT: '',
      Email:''
    }
  }

  handleOnChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleOnSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state);
    
  }

  render() {
    return (
      <div>
        {/* The Modal */}
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">THÊM KHÁCH HÀNG</h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                {/* //Form Nhap */}
                <form action="" onSubmit= {this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="">Ma Khach Hang</label>
                    <input type="text" className="form-control"  name="MaKH" onChange= {this.handleOnChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Họ Tên</label>
                    <input type="text" className="form-control" name="HoTen" onChange= {this.handleOnChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Công Ty</label>
                    <input type="text" className="form-control" name="CongTy" onChange= {this.handleOnChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Số Điện Thoại</label>
                    <input type="text" className="form-control" name="SoDT" onChange= {this.handleOnChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="text" className="form-control"  name="Email" onChange= {this.handleOnChange}/>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-success">Thêm Người Dùng</button>
                  </div>
                </form>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
