import React, { Component } from 'react'

export default class ValueTitleList extends Component {
    constructor(props) {
        super(props);

    }
    componentWillMount() {
        debugger
    }
    eventClickDelete = () => {
        alert('123456789');
    }
    render() {
        console.log('render')
        return (
            <tr>
                <td>{this.props.valueTitle}</td>
                <td className="btn-group">
                    <button type="button" className="btn btn-secondary" onClick={() => this.eventClickDelete()}><i className="fas fa-trash-alt" /></button>
                    <button type="button" className="btn btn-secondary" ><i className="fas fa-edit" /></button>
                </td>
            </tr>
        )
    }
}
