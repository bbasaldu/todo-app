import userReducer from "./userReducer";
import todoReducer from "./todoReducer";
import { combineReducers } from "@reduxjs/toolkit";
export default combineReducers({users: userReducer, todos: todoReducer})