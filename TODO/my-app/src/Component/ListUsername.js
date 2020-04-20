import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { browserHistory } from 'history';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
export class ListUsername extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: ''
        }
    }
    componentWillMount() {

    }
    clickHandle = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:3000/user`)
            .then(response => {
                debugger
                var myUsername = response.data.filter(ex => ex.username === this.props.usernameslot);
                this.props.getIdprameter(myUsername[0].id);
                // change page by window.location.href
                window.location.href = `/listtodo/`+myUsername[0].id;
                // window.open(`/listtodo/`+myUsername[0].id);
            })
            .catch(error => console.log(error))
        
        // this.props.history.push(`/listtodo/`+(this.props.myParam))
        // console.log(this.props.myParam)
    }
    render() {
        // this.clickHandle();
        return (
            <tr >

                {/* <td><button type="button" className="btn btn-info" onClick={() => this.clickHandle()}>Get Id for User</button></td> */}
                <td>
                    {/* <a className='user_list' href={`/listtodo/` + this.props.myParam}>{this.props.usernameslot}</a> */}
                    <button className="btn btn-outline-warning" onClick={(e) => this.clickHandle(e)}>{this.props.usernameslot}</button>
                </td>
            </tr>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        myParam: state.idParameter,

    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getIdprameter: (getparam) => {
            dispatch({ type: "GET_ID_PARAMETER", getparam })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListUsername)