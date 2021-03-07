import uuid from "react-uuid";
const taskReducer = (taskList = [], action) => {
  switch (action.type) {
    case "ADDNEWTASK":
      return [
        ...taskList,
        {
          id: uuid(),
          title: action.payload.title,
          content: action.payload.content,
          date: action.payload.date,
          isDone: false,
        },
      ];
    default:
      return taskList;
  }
};
export default taskReducer;
