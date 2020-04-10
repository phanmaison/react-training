import React, { Component } from 'react';
import { connect } from 'react-redux';
import ValueTitleList from './ValueTitleList'
import axios from 'axios';
export class ListTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoListshow: []
    }
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
  // checkListData = ()=>{
  //   debugger
  //   if(this.props.listdataob !== undefined){
  //     this.props.listdataob.map((value, key) => (
  //       <ValueTitleList key={key} valueTitle={value.tittle}></ValueTitleList>
  //     ))
  //   }
  //   else{ return(<ValueTitleList valueTitle=''></ValueTitleList> )}
  // }
  render() {
    {this.getData();}
    return (
      <table>
        <tbody>
          <tr>
            <th>User-Main Page: <b>Your Main</b></th>
            <th>Users: <b>Songuku</b></th>
          </tr>
          <tr>
            <td>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add Task" />
            </td>
            <td><button type="button" className="btn btn-secondary"><i className="fas fa-plus"></i></button></td>
          </tr>
          {

            this.props.listdataob.map((value, key) => (
              <ValueTitleList key={key} valueTitle={value.todo}></ValueTitleList>
            ))
            // this.checkListData()
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