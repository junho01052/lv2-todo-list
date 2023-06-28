import { v4 as uuidv4 } from 'uuid';
export const add = 'add';
export const Remove = 'remove';
export const Change = 'change';

export const Add = (payload) => {
  return {
    type: add,
    payload,
  };
};

export const RemoveItem = (payload) => {
  return {
    type: Remove,
    payload,
  };
};

export const ChangeItem = (payload) => {
  return {
    type: Change,
    payload,
  };
};

const initialState = [
  {
    id: uuidv4(),
    title: 'React',
    body: '배우기',
    isDone: false,
  },
  {
    id: uuidv4(),
    title: 'Pyton',
    body: '배우기',
    isDone: true,
  },
];

const addItem = (state = initialState, action) => {
  switch (action.type) {
    case add:
      return [...state, action.payload];

    case Remove:
      return state.filter((item) => item.id !== action.payload);
    case Change:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

export default addItem;
