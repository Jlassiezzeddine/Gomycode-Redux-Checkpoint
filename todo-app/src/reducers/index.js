import taskReducer from "./taskReducer";
import addTaskModalReducer from "./addTaskModalReducer";
import editTaskModalReducer from "./editTaskModalReducer";
import toggleFilter from "./toggleFilter";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  taskList: taskReducer,
  addTaskToggle: addTaskModalReducer,
  editTaskToggle: editTaskModalReducer,
  toggleFilter,
});

export default rootReducer;
