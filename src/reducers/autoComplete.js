const autoCompleteReducer = (state = { options: [] }, action) => {
  switch (action.type) {
    case "ADD_AUTOCOMPLETE_OPTIONS": {
      return { ...state, options: action.payload };
    }
    default:
      return state;
  }
};

export default autoCompleteReducer;
