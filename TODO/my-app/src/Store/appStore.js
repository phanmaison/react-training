var redux = require('redux');
const allStore = {
    storeId: {},
    dataJSON: [],
    objectList: [],
    edit: [],
    name: '',
    idParameter: '',
    AlertShow: false,
    AlertContent:''
}
const allReducer = (state = allStore, action) => {
    switch (action.type) {
        case "GET_USERNAME_ID":
            return { ...state, storeId: action.userid };
        case "GET_DATA_JSON":
            return { ...state, dataJSON: action.data };
        case "GET_OBJECT_LIST":
            return { ...state, objectList: action.myObject };
        case "GET_OBJECT_EDIT":
            return { ...state, edit: action.valueedit };
        case "GET_NAME_USER":
            return { ...state, name: action.useroftitles };
        case "GET_ID_PARAMETER":
            return { ...state, idParameter: action.getparam };
        case "ALERT_ON":
            return { ...state, AlertShow: true,AlertContent: action.alertcontent }
        case "ALERT_OFF":
            return { ...state, AlertShow: false }
        default:
            return state;
    }
}
var store = redux.createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;