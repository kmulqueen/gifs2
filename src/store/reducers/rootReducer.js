import authReducer from "./authReducer";
import lobbyReducer from "./lobbyReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  // created property called auth. this will be available in store state
  // the authReducer will update the auth property
  auth: authReducer,
  // created property called lobby. this will be available in store state
  // the lobbyReducer will update the lobby property
  lobby: lobbyReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
