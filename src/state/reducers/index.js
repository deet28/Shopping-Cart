import { combineReducers } from "redux"
import cartReducer from "./cartReducer"

const reducers = combineReducers({
  cart:cartReducer
})

export default reducers; 