const initialState = {
  searchError: null
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_SUCCESS":
      console.log("search success");
      return {
        ...state,
        searchError: null
      };
    case "SEARCH_ERROR":
      console.log("search error");
      return {
        ...state,
        searchError: "Search Error"
      };
    default:
      return state;
  }
};

export default searchReducer;
