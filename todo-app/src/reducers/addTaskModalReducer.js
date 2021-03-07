const addTaskModalReducer = (toggle = false, action) => {
  switch (action.type) {
    case "TOGGLETASKPOPUP":
      return !toggle;
    default:
      return toggle;
  }
};

export default addTaskModalReducer;
