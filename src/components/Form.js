import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../redux/actions';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.submit = this.submit.bind(this);
    }
    submit(event) {
      event.preventDefault();

      const formInput = document.getElementById('formInput');
      const content = formInput.value;

      if (this.props.idEdit) {
        this.props.updateItem(this.props.idEdit, content);
      } else {
        const item = {
          content: content,
          status: 1
        };
        this.props.addItem(item);
      }

      formInput.value = '';
      formInput.focus();
    }
    render() {
      return (
        <div>
          <h3>Add new task</h3>
          <form>
            <input id="formInput"/>
            <button onClick={(e) => this.submit(e)}>{this.props.idEdit ? 'Edit' : 'Add'}</button>
          </form>
        </div>
      );
    }
}

const mapState = (state) => {
  return {
    isEdit: state.isEdit
  }
};

export default connect(mapState, { addItem })(Form);