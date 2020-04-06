import React, { Component } from 'react'

export default class TableListTodo extends Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <th>User-Main Page: <b>Your Main</b></th>
                        <th>Users: <b>Songuku</b></th>
                    </tr>
                    <tr>
                        <td><input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add Task" /></td>
                    </tr>
                    <tr>
                        <td>{this.props.valueTitle}</td>
                        <td><button type="button" className="btn btn-light"><i className="far fa-times-circle" /></button></td>
                    </tr>
                </tbody>
            </table>


        )
    }
}
