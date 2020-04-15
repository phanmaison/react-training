import React, { Component } from 'react';
import { connect } from 'react-redux';
import ValueTitleList from './ValueTitleList';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Modal from 'react-modal';
import ListUsername from './ListUsername';
export class ListTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // todoListshow: []
      id: '',
      userid: '',
      todo: '',
      checkShowAllUser: false,
      checklist:true
    }
  }
  componentWillMount(){
    this.props.alertOn('you have successfully logged in');
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
    this.props.getUsersetclient(objectFilter[0].username)
    checkExisted = this.props.allUser.some(ex => ex.id === userId);
    if (!checkExisted) { console.log('fail') }
    if (objectFilter.length === 0) { return }
    // if (objectFilter[0].listdata === null) { return }
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
    this.props.alertOn('Add to database is successful');
  }
  allUser = () => {
    this.setState({
      checkShowAllUser: !this.state.checkShowAllUser
    })
  }
  cancel = () => {
    this.setState({
      checkShowAllUser: !this.state.checkShowAllUser
    })
  }
  mytitle = () => {
    return this.props.myuserTitle;
  }
  checkFunction = (id)=>{
    alert(id)
  }
  render() {
    { this.getData(); }
    return (
      <table>
        <tbody>
          <tr>
            <th className="text-decoration">User-Main Page: <b>{this.mytitle()}</b></th>
            <th className="text-decoration" >Users: <b>{this.mytitle()}</b></th>
            <th><a href="http://localhost:3001/"><i className="far fa-times-circle"></i></a></th>
          </tr>
          <tr>
            <td className="btn-group">
              <input
                name='todotask'
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Add Task"
                onChange={(event) => this.isChange(event)}
              />
              <button type="reset" className="btn btn-info" onClick={() => this.getInputAdd(this.state.todotask)}><i className="fas fa-plus"></i></button>
            </td>
            {/* <td>
              <button type="reset" className="btn btn-info" onClick={() => this.getInputAdd(this.state.todotask)}><i className="fas fa-plus"></i></button>

            </td> */}
            {/* get list user */}
            <td>
              <button className="btn btn-outline-dark" onClick={() => this.allUser()}><i class="fas fa-users"></i></button>
            </td>
            {/* get list user */}
          </tr>
          <tr>
            <Modal isOpen={this.state.checkShowAllUser}>
              {/* List user is doing */}
              <div className="row">
                <div className="col-sm-11 col-12">
                  <h3 className="user-list">User List</h3>
                </div>
                <div className="col-sm-1 col-12">
                  <button className="btn btn-outline-dark redirectomain" onClick={() => this.cancel()}><i className="fas fa-list"></i></button>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-7 col-12">
                  <table className="table table-borderless table-dark ">
                    <thead>
                      <tr>
                        <th className='titleoflistuser' scope="col">Get Id User And Get List Todo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {
                          this.props.allUser.map((value,key)=>(
                            <ListUsername key={key} usernameslot={value.username}></ListUsername>
                          ))
                        }
                        {/* <ListUsername></ListUsername> */}
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>
              {/* List user is doing */}
            </Modal>
          </tr>
          {

            this.props.listdataob.map((value, key) => (
              <ValueTitleList key={key} valueTitle={value.todo} classname={this.state.checklist === true ? '': 'sort_selected'} clickToolbar = {(event)=>{
                switch(this.state.checklist){
                  case true:
                     this.checkFunction(value.id); 
                    break
                }
              }}></ValueTitleList>
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
    listdataob: state.objectList,
    myuserTitle: state.name
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
    },
    getUsersetclient: (useroftitles) => {
      dispatch({ type: "GET_NAME_USER", useroftitles })
    },
    alertOn:(alertcontent)=>{
      dispatch({ type: "ALERT_ON",alertcontent })
    },
    alertOff:()=>{
      dispatch({ type: "ALERT_OFF" })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListTodo)