var redux = require('redux');
const allStore = {
    storeId: {},
    dataJSON:[],
    objectList:[],
    edit:[]
}
const allReducer = (state = allStore, action) => {
    switch (action.type) {
        case "GET_USERNAME_ID":
            return { ...state, storeId: action.userid };
        case "GET_DATA_JSON":
            return {...state, dataJSON:action.data};
        case "GET_OBJECT_LIST":
            return {...state, objectList: action.myObject};
        case "GET_OBJECT_EDIT":
            return {...state,edit: action.valueedit}
        default:
            return state;
    }
}
var store = redux.createStore(allReducer);
export default store;