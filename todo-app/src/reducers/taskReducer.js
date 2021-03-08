import uuid from "react-uuid";

const taskReducer = (
  taskList = [
    {
      id: "1",
      title: "Do Redux Checkpoint",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro doloremque ipsa ipsum quos, obcaecati dolor!",
      date: "2021-03-12",
      isDone: true,
    },
  ],
  action
) => {
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
    case "DELETETASK":
      return taskList.filter((task) => task.id !== action.payload.taskId);
    case "EDITTASK":
      let toEditTask = taskList.find((task) => task.id === action.payload.id);
      toEditTask.title = action.payload.title;
      toEditTask.content = action.payload.content;
      toEditTask.date = action.payload.date;
      return taskList;
    case "TOGGLEISDONE":
      let toClassifyTask = taskList.find(
        (task) => task.id === action.payload.taskId
      );
      toClassifyTask.isDone = !toClassifyTask.isDone;
      console.log(toClassifyTask);
      return taskList;
    default:
      return taskList;
  }
};
export default taskReducer;
