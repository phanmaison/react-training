var redux = require('redux');
const allStore = {
    storeId: {},
    dataJSON:[]
}
const allReducer = (state = allStore, action) => {
    switch (action.type) {
        case "GET_USERNAME_ID":
            return { ...state, storeId: action.userid };
        case "GET_DATA_JSON":
            return {...state, dataJSON:action.data}
        default:
            return state;
    }
}
var store = redux.createStore(allReducer);
export default store;