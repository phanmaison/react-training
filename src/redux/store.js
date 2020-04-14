import { createStore } from 'redux';
import { LOGIN, LOGOUT, ADD_ITEM, DELETE_ITEM, EDIT_ITEM, DO_EDIT_ITEM } from './actionTypes';

const initialState = {
  userId: 0,
  userItems: [],
  editId: 0,
  users: [
    {
      id: 1,
      email: 'asdf@gmail.com',
      total: 1
    }
  ]
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
      const total = state.userItems.length;
      const item = action.item;
      item.id = total + 1;
      return {
        ...state,
        userItems: [...state.userItems, item]
      }
    }
    case DELETE_ITEM: {
      let items = state.userItems.filter(item => {
        return item.id !== action.id;
      });

      return {
        ...state,
        userItems: items
      };
    }
    case EDIT_ITEM: {
      return {
        ...state,
        editId: action.id
      };
    }
    case DO_EDIT_ITEM: {
      const items = state.userItems.map(item => {
        if (item.id === action.id ) {
          item.content = action.content;
        }
        return item;
      });

      return {
        ...state,
        userItems: items,
        editId: 0
      };
    }
    default:
      return state;
  }
}

export default createStore(reducer);