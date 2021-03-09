// ************* TOGGLES ***************************
export const toggleAddTaskPopUp = () => {
  return { type: "TOGGLEADDTASKPOPUP" };
};
export const toggleEditTaskPopUp = () => {
  return { type: "TOGGLEEDITTASKPOPUP" };
};
export const toggleFilterMenu = () => {
  return { type: "TOGGLEFILTER" };
};
export const toggleIsDone = (taskId) => {
  return { type: "TOGGLEISDONE", payload: { taskId } };
};
// ************** FILTERS ***************************
export const filterByIsDone = (taskIsDone) => {
  return { type: "FILTERBYISDONE", payload: { taskIsDone } };
};
export const filterByDate = (taskDate) => {
  return { type: "FILTERBYDATE", payload: { taskDate } };
};

// ************ TASK MANIPULATION ********************
export const addNewTask = (title, content, date) => {
  return { type: "ADDNEWTASK", payload: { title, content, date } };
};
export const deleteTask = (taskId) => {
  return { type: "DELETETASK", payload: { taskId } };
};
export const editTask = (id, title, content, date) => {
  return { type: "EDITTASK", payload: { id, title, content, date } };
};
