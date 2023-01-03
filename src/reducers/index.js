import { combineReducers } from "redux";
import linkReducer from "./linkReducer";
import userReducer from "./userReducer";

export default combineReducers({
    linkReducer,
    userReducer
});