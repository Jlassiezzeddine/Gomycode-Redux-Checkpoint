const toggleFilter = (toggle = false, action) => {
  switch (action.type) {
    case "TOGGLEFILTER":
      return !toggle;
    default:
      return toggle;
  }
};

export default toggleFilter;
