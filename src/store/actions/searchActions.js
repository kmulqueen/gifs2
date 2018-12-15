export const search = searchTerm => {
  return (dispatch, getState) => {
    console.log("search action fired.");
    searchTerm ? console.log("st", searchTerm) : console.log("nothin");
    dispatch({ type: "SEARCH_SUCCESS" });
  };
};
