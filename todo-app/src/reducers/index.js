import taskReducer from "./taskReducer";
import addTaskModalReducer from "./addTaskModalReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  taskReducer,
  addTaskToggle: addTaskModalReducer,
});

export default rootReducer;
