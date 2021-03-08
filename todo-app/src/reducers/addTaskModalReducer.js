const addTaskModalReducer = (toggle = false, action) => {
  switch (action.type) {
    case "TOGGLEADDTASKPOPUP":
      return !toggle;
    default:
      return toggle;
  }
};

export default addTaskModalReducer;
