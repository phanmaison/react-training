import React, { Component } from 'react';
import { connect } from 'react-redux';
import ValueTitleList from './ValueTitleList';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
export class ListTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // todoListshow: []
      id:'',
      userid:'',
      todo:''
    }
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
  componentDidMount() {
    debugger
    axios.get('http://localhost:3000/user')
      .then(response => {
        this.props.dataAllJSON(response.data);
      })
      .catch(error => console.log(error))
  }
  getData = () => {
    // vong lap chay 2 lan neu khong return se bị lỗi khi get property objectFilter[0].listdata
    if (this.props.allUser.length === 0) { return }
    //chặn xuất 2 lần
    var userId = this.props.match.params.idhandle;
    var objectFilter = [];
    var checkExisted;
    objectFilter = this.props.allUser.filter(ex => ex.id === userId);
    checkExisted = this.props.allUser.some(ex => ex.id === userId);
    if (!checkExisted) { console.log('fail') }
    if (objectFilter.length === 0) { return }
    if (objectFilter[0].listdata === null) { return }
    // console.log(objectFilter[0].listdata);
    axios.get('http://localhost:3000/listtodo')
      .then(response => {
        var listDataObject = [];
        listDataObject = response.data.filter(ex => ex.userid === userId);
        this.props.getObjectlist(listDataObject);
        return
      })
      .catch(error => console.log(error))
    return
    // this.props.getObjectlist(objectFilter[0].listdata);
  }
  getInputAdd = (todo) => {
    var userId = this.props.match.params.idhandle;
    const todoItem = {};
    todoItem.id = uuidv4();
    todoItem.userid = userId;
    todoItem.todo = todo;
    console.log(todoItem);
    axios.post(`http://localhost:3000/listtodo`, todoItem)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  render() {
    { this.getData(); }
    return (
      <table>
        <tbody>
          <tr>
            <th>User-Main Page: <b>Your Main</b></th>
            <th>Users: <b>Songuku</b></th>
          </tr>
          <tr>
            <td>
              <input
                name='todotask'
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Add Task"
                onChange={(event) => this.isChange(event)}
              />
            </td>
            <td><button type="reset" className="btn btn-info" onClick={() => this.getInputAdd(this.state.todotask)}><i className="fas fa-plus"></i></button></td>
          </tr>
          {

            this.props.listdataob.map((value, key) => (
              <ValueTitleList key={key} valueTitle={value.todo}></ValueTitleList>
            ))
          }
        </tbody>
      </table>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    usernameId: state.storeId,
    allUser: state.dataJSON,
    listdataob: state.objectList
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dataUserId: (userid) => {
      dispatch({ type: "GET_USERNAME_ID", userid })
    },
    dataAllJSON: (data) => {
      dispatch({ type: "GET_DATA_JSON", data })
    },
    getObjectlist: (myObject) => {
      dispatch({ type: "GET_OBJECT_LIST", myObject })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListTodo)