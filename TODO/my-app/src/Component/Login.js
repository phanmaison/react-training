import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import ListTodo from './ListTodo';
import { v4 as uuidv4 } from 'uuid';
import store from '../Store/appStore'
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      idUser: ''
    }
    this.addDataUser = this.addDataUser.bind(this)
  }
  componentDidMount() {
    debugger
    axios.get('http://localhost:3000/user')
      .then(response => {
        this.props.dataAllJSON(response.data);
        console.log(this.props.allUser)
      })
      .catch(error => console.log(error))
  }
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
    console.log(name);
    console.log(value)
  }
  addDataUser = (username) => {
    debugger
    var item = {};
    item.username = username;
    item.id = uuidv4();
    item.listdata = null;
    // const ;
    var found;
    if(found = this.props.allUser.some(el => el.username === item.username)){
      var myObject = this.props.allUser.filter(x => x.username === item.username);
      this.props.dataUserId(myObject[0].id)
    }
    else{
      this.props.dataUserId(item.id);
    }
    // this.props.dataUserId(item.id);
    console.log(item);

    
    // console.log(myObject[0])
    // var keyIndex = this.props.allUser.indexOf(username);
    
    // this.props.history.push('/listtodo'+this.item.id);
    axios.get('http://localhost:3000/user')
      .then(response => {
        debugger
        const found = response.data.some(el => el.username === item.username)
        if (!found) {
          axios.post('http://localhost:3000/user', item)
            .then(response => {
              console.log(response)
            })
            .catch(error => {
              console.log(error)
            })
        }
        console.log(response.data)
      })
      .catch(error => console.log(error))
    console.log(this.state.array) 
  }

  render() {
    return (
      <form name="login-form" className="login-form" method="post">
        <div className="header">
          <h1>Welcome to this Site</h1>
          <span>Please, fill this form</span>
        </div>
        <div className="content">
          <input name="username" type="text" onChange={(event) => this.isChange(event)} className="input username" placeholder="Username" />
          <div className="user-icon" />
        </div>
        <div className="footer text-center">
          {/* <button type="reset" className="button" onClick={() => this.addDataUser(this.state.username)}>Login</button> */}
          <a className="btn btn-success" href={"/listtodo/" + this.props.usernameId} onClick={() => this.addDataUser(this.state.username)}>Login</a>
        </div>
      </form>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    usernameId: state.storeId,
    allUser:state.dataJSON
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dataUserId: (userid) => {
      dispatch({ type: "GET_USERNAME_ID", userid })
    },
    dataAllJSON:(data)=>{
      dispatch({type:"GET_DATA_JSON",data})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)