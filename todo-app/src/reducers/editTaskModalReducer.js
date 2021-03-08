const editTaskModalReducer = (toggle = false, action) => {
  switch (action.type) {
    case "TOGGLEEDITTASKPOPUP":
      return !toggle;
    default:
      return toggle;
  }
};

export default editTaskModalReducer;
