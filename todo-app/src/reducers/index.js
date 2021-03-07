import taskReducer from "./taskReducer";
import addTaskModalReducer from "./addTaskModalReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  taskList: taskReducer,
  addTaskToggle: addTaskModalReducer,
});

export default rootReducer;
