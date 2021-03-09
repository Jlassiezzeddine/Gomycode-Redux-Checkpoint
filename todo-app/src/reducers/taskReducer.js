import uuid from "react-uuid";
const initState = {
  taskList: [
    {
      id: "1",
      title: "Do Redux Checkpoint",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro doloremque ipsa ipsum quos, obcaecati dolor!",
      date: "2021-03-12",
      isDone: true,
    },
  ],
  filterComplete: "all",
  filterDate: "all",
  filterTerm: "",
};
const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADDNEWTASK":
      return {
        ...state,
        taskList: [
          ...state.taskList,
          {
            id: uuid(),
            title: action.payload.title,
            content: action.payload.content,
            date: action.payload.date,
            isDone: false,
          },
        ],
      };
    case "DELETETASK":
      return {
        ...state,
        taskList: state.taskList.filter(
          (task) => task.id !== action.payload.taskId
        ),
      };
    case "EDITTASK":
      return {
        ...state,
        taskList: state.taskList.map((task) =>
          task.id === action.payload.id
            ? { ...action.payload, isDone: false }
            : task
        ),
      };
    case "TOGGLEISDONE":
      return {
        ...state,
        taskList: state.taskList.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, isDone: !task.isDone }
            : task
        ),
      };

    case "FILTERBYISDONE":
      return { ...state, filterComplete: action.payload.str };
    case "FILTERBYDATE":
      return { ...state, filterDate: action.payload.date };
    case "FILTERBYTERM":
      return { ...state, filterTerm: action.payload.term };
    default:
      return state;
  }
};
export default taskReducer;
