export const createLobby = lobby => {
  // Pausing dispatch action to reducer
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async call to database, then carry on dispatch as normal
    const firestore = getFirestore();
    firestore
      .collection("lobbies")
      .add({
        ...lobby,
        // will grab this from db later
        createdBy: "Kyle Test",
        players: ["Kyle Test"],
        open: true,
        question: "Test Question"
      })
      .then(() => {
        dispatch({ type: "CREATE_LOBBY", lobby });
      })
      .catch(err => {
        dispatch({ type: "CREATE_LOBBY_ERROR", err });
      });
  };
};
