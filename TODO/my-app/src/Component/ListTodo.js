import React, { Component } from 'react'
import TableListTodo from './TableListTodo'
import axios from 'axios';
export default class ListTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTodo: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/user')
            .then(response => {
                debugger
                this.state.dataTodo = response.data
            })
            .catch(error => console.log(error))
    }
    render() {
        debugger
        return (
            // <div>
            //     {
            //         this.state.dataTodo.map((value, key) => (
            //             <TableListTodo></TableListTodo>
            //         ))
            //     }
            // </div>
            <TableListTodo valueTitle='Hello Hoang'></TableListTodo>
        )
    }
}
