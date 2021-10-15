import { combineReducers } from "redux";
import userReducer from "../reducer/user";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
