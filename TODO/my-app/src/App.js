
import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Login from './Component/Login';
import ListTodo from './Component/ListTodo';
export class App extends Component {
  constructor(props) {
    super(props);
    
  }
  componentDidMount(){
    debugger
    const {idhandle} = this.props.usernameId;
    // this.props.getIdforlist(this.props.usernameId);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/listtodo/:idhandle" component={ListTodo} />
        </Switch>
      </Router>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    usernameId: state.storeId,
    allUser: state.dataJSON,
    // idNumber:state.idfromapplist
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dataUserId: (userid) => {
      dispatch({ type: "GET_USERNAME_ID", userid })
    },
    dataAllJSON: (data) => {
      dispatch({ type: "GET_DATA_JSON", data })
    }
    // getIdforlist:(getIdlist)=>{
    //   dispatch({type:"GET_ID_LISTTODO",getIdlist})
    // }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)