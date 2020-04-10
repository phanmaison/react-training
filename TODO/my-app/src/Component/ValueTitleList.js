import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
export class ValueTitleList extends Component {
  constructor(props) {
    super(props);

  }
  componentWillMount() {
    debugger
  }
  eventClickDelete = () => {
    console.log(this.props.listdataob);
    var myTitle = this.props.listdataob.filter(ex => ex.todo === this.props.valueTitle);
    console.log(myTitle[0]);
    axios.delete(`http://localhost:3000/listtodo/${myTitle[0].id}`)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    // console.log(this.props.listdataob);
    // console.log(this.props.valueTitle)
    // var myTitle = this.props.listdataob.filter(ex => ex.tittle === this.props.valueTitle);
    // console.log(myTitle[0].id);
    // axios.delete(`http://localhost:3000/user/${myTitle[0].id}`)
    // .then(response => {
    //   console.log(response)
    // })
    // .catch(error => {
    //   console.log(error)
    // })
  }
  render() {
    return (
      <tr>
        <td>{this.props.valueTitle}</td>
        <td className="btn-group">
          <button type="button" className="btn btn-danger" onClick={() => this.eventClickDelete()}><i className="fas fa-trash-alt" /></button>
          <button type="button" className="btn btn-warning" ><i className="fas fa-edit" /></button>
        </td>
      </tr>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    //   usernameId: state.storeId,
    //   allUser: state.dataJSON,
    listdataob: state.objectList
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
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ValueTitleList)