import { LOGIN, LOGOUT, ADD_ITEM, DELETE_ITEM, EDIT_ITEM, DO_EDIT_ITEM } from './actionTypes';
import { Cookies } from 'react-cookie';

export const loginAction = (userId) => {
  const cookies = new Cookies();
  cookies.set('userId', userId);
  return {
    type: LOGIN,
    userId
  }
}

export const updateUserId = (userId) => {
  return {
    type: LOGIN,
    userId: userId
  };
}

export const logoutAction = () => {
  const cookies = new Cookies();
  cookies.remove('userId');
  return {
    type: LOGOUT
  }
}

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    item: item
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    id
  };
}

export const updateItem = (item) => {
  document.getElementById('formInput').value = item.content;
  return {
    type: EDIT_ITEM,
    id: item.id
  };
}

export const doUpdateItem = (id, content) => {
  return {
    type: DO_EDIT_ITEM,
    id,
    content
  };
}