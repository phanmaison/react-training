import React, { Component } from 'react';
import Login from '../Component/Login';
import ListTodo from '../Component/ListTodo'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default class DieuHuongURL extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/listtodo" component={ListTodo} />
                </Switch>
            </Router>
        )
    }
}
