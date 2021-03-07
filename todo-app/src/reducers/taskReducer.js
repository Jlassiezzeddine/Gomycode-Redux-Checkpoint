import { uuid } from "uuid/dist/v4";
const taskReducer = (taskList = [], action) => {
  switch (action) {
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
