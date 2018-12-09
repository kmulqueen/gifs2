export const createLobby = lobby => {
  // Pausing dispatch action to reducer
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async call to database, then carry on dispatch as normal
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const lobbyCreatorId = getState().firebase.auth.uid;
    firestore
      .collection("lobbies")
      .add({
        ...lobby,
        createdBy: profile.userName,
        creatorId: lobbyCreatorId,
        // lobbyId: docRef.id,
        // Will need to get all players in lobby
        players: [profile.userName],
        // Whether or not the lobby is "joinable"
        open: true,
        question: "Test Question"
      })
      .then(docRef => {
        dispatch({ type: "CREATE_LOBBY", lobby });
        console.log("Lobby created with ID: ", docRef.id);
      })
      .catch(err => {
        dispatch({ type: "CREATE_LOBBY_ERROR", err });
      });
  };
};

export const joinLobby = lobby => {
  console.log("lobby", lobby);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    firestore
      .collection("lobbies")
      .doc(lobby)
      .set(
        {
          players: firestore.FieldValue.arrayUnion(profile.userName)
        },
        { merge: true }
      )
      .then(() => {
        dispatch({ type: "JOIN_LOBBY", lobby });
        console.log("Lobby joined");
      })
      .catch(err => {
        dispatch({ type: "JOIN_LOBBY_ERROR", err });
      });
  };
};
