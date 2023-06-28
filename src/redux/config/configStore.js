import { createStore } from "redux"
import { combineReducers } from "redux"
import addItem from "../modules/delete"

const rootReducer = combineReducers({
    addItem
})

const store = createStore(rootReducer)

export default store;