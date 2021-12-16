import { combineReducers } from "redux";
import documentReducers from "./documentReducer";
import educationReducer from "./educationReducer";
import contactReducer from "./contactReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducer from "./authReducer";
const rootReducer = combineReducers({
  document: documentReducers,
  contact: contactReducer,
  education: educationReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
});

export default rootReducer;
