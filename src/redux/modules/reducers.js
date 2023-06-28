const ADD_ITEM = 'reducers/ADD_ITEM'
const DELETE_ITEM = 'reducers/DELETE_ITEM'
const UPDATE_ITEM = 'reducers/UPDATE_ITEM'

export const addItem = (payload) => {
    return {
        type: ADD_ITEM,
        payload
    }
}

export const deleteItem = (payload) => {
    return {
        type: DELETE_ITEM,
        payload
    }
}

export const updateItem = (payload) => {
    return {
        type: UPDATE_ITEM,
        payload
    }
}

const initialState = [
    {
    id:1,
    title: '아무거나',
    body: '내용 아무거나',
    isDone: false
},
{
    id:2,
    title: '아무거나2',
    body: '내용 아무거나2',
    isDone: false
}
]

const reducers = (state = initialState, action) => {
    // console.log(state)
    switch (action.type) {
        case ADD_ITEM: 
            return [...state, action.payload]
        case DELETE_ITEM:
            return state.filter((item) => item.id !== action.payload)         
        case UPDATE_ITEM:
            return state.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        isDone : !item.isDone                    
                    } 
                } else {
                    return item
                }
            })

        default:
            return state;
    }
}

export default reducers;