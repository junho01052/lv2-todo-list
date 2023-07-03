import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";

// ASIS : 일반 리듀서
// const rootReducer = combineReducers({
//   reducers,
// });

// const store = createStore(rootReducer);

// TODO : Redux Toolkit
const store = configureStore({
  reducer: {
    todos,
  },
});

export default store;
