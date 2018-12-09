export const logIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const logOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      });
  };
};

export const register = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    // Create new user
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(res => {
        // Create new record of user in firestore
        return firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            userName: newUser.userName
          });
      })
      .then(() => {
        dispatch({ type: "REGISTER_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "REGISTER_ERROR", err });
      });
  };
};
