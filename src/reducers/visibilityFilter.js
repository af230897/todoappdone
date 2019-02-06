export default visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "ALL_TODOS":
      return { ...state, text: action.text, };

    case "COMPLETED_TODOS":
      return { ...state, text: action.text, };

    case "INCOMPLETED_TODOS":
      return { ...state, text: action.text, };
    default:
      return state;
  }
};
