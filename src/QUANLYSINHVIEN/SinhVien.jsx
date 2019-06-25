import React, { Component } from 'react'

export default class SinhVien extends Component {

    render() {
        return (
            <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>
                    <button className="btn btn-outline-success mr-2">Update</button>
                    <button className="btn btn-outline-danger">Delete</button>
                </td>
            </tr>
        )
    }
}
