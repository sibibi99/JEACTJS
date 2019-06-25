import React, { Component } from 'react'

export default class Modal extends Component {
  render() {

    // Cách 1: tạo biến gọi 
    let {id, name, desc} = this.props.sanPham;
    return (
      <div>
        {/* The Modal */}
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">

                <h4 className="modal-title">{name}</h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              {/* Modal body */}
              <div className="modal-body">

                {/* // Cách 2 gọi thẳng thằng this.props.sanPham.desc */}
                {this.props.sanPham.desc}
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
