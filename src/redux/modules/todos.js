import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
// const ADD_ITEM = "reducers/ADD_ITEM";
// const DELETE_ITEM = "reducers/DELETE_ITEM";
// const UPDATE_ITEM = "reducers/UPDATE_ITEM";

// export const addItem = (payload) => {
//   return {
//     type: ADD_ITEM,
//     payload,
//   };
// };

// export const deleteItem = (payload) => {
//   return {
//     type: DELETE_ITEM,
//     payload,
//   };
// };

// export const updateItem = (payload) => {
//   return {
//     type: UPDATE_ITEM,
//     payload,
//   };
// };

const initialState = [
  {
    id: uuidv4(),
    title: "강의 1-13까지 듣기",
    body: "집중해서 리액트 쿼리까지 듣기",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "redux-toolkit을 사용해서 Todolist리팩토링하기",
    body: "제목이 곧 내용",
    isDone: false,
  },
  {
    id: uuidv4(),
    title: "react-query를 사용해서 Todolist리팩토링하기",
    body: "제 곧 내",
    isDone: false,
  },
];

// const todos = (state = initialState, action) => {
//   // console.log(state)
//   switch (action.type) {
//     case ADD_ITEM:
//       return [...state, action.payload];
//     case DELETE_ITEM:
//       return state.filter((item) => item.id !== action.payload);
//     case UPDATE_ITEM:
//       return state.map((item) => {
//         if (item.id === action.payload) {
//           return {
//             ...item,
//             isDone: !item.isDone,
//           };
//         } else {
//           return item;
//         }
//       });

//     default:
//       return state;
//   }
// };

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addItem: (state, action) => {
      return [...state, action.payload];
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    },
  },
});

// console.log("todosSlice.reducers = " + todosSlice.reducers);
// console.log("todosSlice.actions = " + todosSlice.actions);

export default todosSlice.reducer;
export const { addItem, deleteItem, updateItem } = todosSlice.actions;
