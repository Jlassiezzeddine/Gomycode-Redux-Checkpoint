export const toggleTaskPopUp = () => {
  return { type: "TOGGLETASKPOPUP" };
};
export const addNewTask = (title, content, date) => {
  return { type: "ADDNEWTASK", payload: { title, content, date } };
};
export const deleteTask = (id) => {
  return { type: "DELETETASK", payload: id };
};
export const editTask = (id, title, content, date) => {
  return { type: "EDITTASK" };
};

export const isCompleteTask = (id) => {
  return { type: "ISCOMPLETETASK", payload: id };
};

export const isIncompleteTask = (id) => {
  return { type: "ISINCOMPLETETASK", payload: id };
};
