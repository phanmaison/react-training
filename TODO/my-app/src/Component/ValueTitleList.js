import React, { Component } from 'react'
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
import axios from 'axios';
Modal.setAppElement('#root')
export class ValueTitleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      contenttodo: ''
    }
  }
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
    console.log(name);
    console.log(value);
  }
  eventClickDelete = () => {
    // console.log(this.props.listdataob);
    var myTitle = this.props.listdataob.filter(ex => ex.todo === this.props.valueTitle);
    console.log(myTitle[0]);
    axios.delete(`http://localhost:3000/listtodo/${myTitle[0].id}`)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    this.props.alertOn('deleted successfully');
  }
  eventClickEdit = () => {
    console.log('1111');
    var myTitle = this.props.listdataob.filter(ex => ex.todo === this.props.valueTitle);
    this.props.getEdit(myTitle);
    console.log(myTitle)
    this.setState({
      showPopup: !this.state.showPopup,
      contenttodo: myTitle[0].todo
    })
    // this.props.alertOn();
  }
  eventClickSave = (editTodo) => {
    console.log(this.props.editvalue);
    const editData = {};
    editData.id = this.props.editvalue[0].id;
    editData.userid = this.props.editvalue[0].userid;
    editData.todo = editTodo;
    axios.put('http://localhost:3000/listtodo/' + this.props.editvalue[0].id, editData)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
    //gia tri sau khi edit
    console.log('123');
    console.log(editData);
    this.eventClickEdit();
    this.props.alertOn('saved successfully');
  }
  clickToolbar() {
    debugger
    this.props.selectedRow(this.props.prd);
  }
  render() {
    return (
      <tr>
        <td className={this.props.classname} onClick={(e) => { this.props.clickToolbar(this) }}>{this.props.valueTitle}</td>
        <td className="btn-group">
          <button type="button" className="btn btn-danger" onClick={() => this.eventClickDelete()} ><i className="fas fa-trash-alt" /></button>
          <button type="button" className="btn btn-warning" onClick={() => this.eventClickEdit()}><i className="fas fa-user-edit"></i></button>
        </td>
        <td>
          <Modal isOpen={this.state.showPopup}>
            <h3 className="header-edittodo">Edit Todo</h3>
            <div className="content-edittodo">
              <input name="editTodo" onChange={(event) => this.isChange(event)} defaultValue={this.state.contenttodo} type="text" className="input username" placeholder="Username" />
            </div>
            <div className="footer-edittodo">
              <Button className="btn btn-secondary " onClick={() => this.eventClickEdit()}>Close</Button>
              <Button className="btn btn-primary btn-edittodo" onClick={() => this.eventClickSave(this.state.editTodo)}>Save</Button>
            </div>
          </Modal>
        </td>
      </tr>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    //   usernameId: state.storeId,
    //   allUser: state.dataJSON,
    listdataob: state.objectList,
    editvalue: state.edit
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    //   dataUserId: (userid) => {
    //     dispatch({ type: "GET_USERNAME_ID", userid })
    //   },
    //   dataAllJSON: (data) => {
    //     dispatch({ type: "GET_DATA_JSON", data })
    //   },
    getObjectlist: (myObject) => {
      dispatch({ type: "GET_OBJECT_LIST", myObject })
    },
    getEdit: (valueedit) => {
      dispatch({ type: "GET_OBJECT_EDIT", valueedit })
    },
    alertOn:(alertcontent)=>{
      dispatch({ type: "ALERT_ON",alertcontent })
    },
    alertOff:()=>{
      dispatch({ type: "ALERT_OFF" })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ValueTitleList)