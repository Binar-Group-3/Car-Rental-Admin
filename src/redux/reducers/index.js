import { combineReducers } from "redux";
import carReducer from "./carReducer";
import orderReducer from "./orderReducer";
import authReducer from "./authReducer";
import dataReducer from "./dataReducer"
import chartReducer from "./chartReducer";
import navbarReducer from "./navbarReducer"

const rootReducer = combineReducers({
    orderReducer,
    car: carReducer,
    authReducer,
    dataUser: dataReducer,
    chartReducer,
    navbarReducer
})

export default rootReducer
