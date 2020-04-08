import React, { Component } from 'react'

export default class ValueTitleList extends Component {
    render() {
        return (
            <tr>
            <td>{this.props.valueTitle}</td>
            <td><button type="button" className="btn btn-danger"><i className="far fa-times-circle" /></button></td>
        </tr>
        )
    }
}
