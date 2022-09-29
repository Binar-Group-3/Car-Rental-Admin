import { combineReducers } from "redux"
import dataReducer from "./dataReducer"
import orderReducer from "./orderReducer"
import authReducer from "./authReducer"
import carReducer from "./carReducer"

const rootReducer = combineReducers({
  dataUser: dataReducer,
  order: orderReducer,
  auth: authReducer,
  car: carReducer,
})

export default rootReducer
