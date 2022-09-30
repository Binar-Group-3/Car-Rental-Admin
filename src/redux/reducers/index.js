import {combineReducers} from "redux";
import carReducer from "./carReducer";
import orderReducer from "./orderReducer";
import authReducer from "./authReducer";
import dataReducer from "./dataReducer"

const rootReducer = combineReducers({
    orderReducer,
    car: carReducer,
    authReducer,
    dataUser: dataReducer,
})

export default rootReducer
