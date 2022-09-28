import {combineReducers} from "redux";
import dataReducer from "./dataReducer";
import orderReducer from "./orderReducer";
import authReducer from "./authReducer";


const rootReducer = combineReducers({
    dataUser: dataReducer,
    orderReducer,
    authReducer,
})

export default rootReducer;
