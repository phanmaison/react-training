import { createStore } from 'redux';
import { LOGIN, LOGOUT, ADD_ITEM, DELETE_ITEM } from './actionTypes';

const initialState = {
  userId: 0,
  userItems: [
    {
        id: 1,
        content: "task item a",
        status: 1
    },
    {
        id: 2,
        content: "text item b",
        status: 1
    },
    {
        id: 3,
        content: "text item c",
        status: 1
    }
  ],
  isEdit: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        userId: action.userId
      };
    }
    case LOGOUT: {
      return {
        ...state,
        userId: ''
      }
    }
    case ADD_ITEM: {
      return {
        ...state,
        userItems: [...state.userItems, action.item]
      }
    }
    case DELETE_ITEM: {
      let items = this.state.userItems.filter(item => {
        return item.id !== action.id;
      });

      return {
        ...state,
        userItems: items
      };
    }
    default:
      return state;
  }
}

export default createStore(reducer);