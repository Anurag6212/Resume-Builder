import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./redux/reducers/rootReducer";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOU6u3yekC6PSZnH0tIsMmSEpS-_LkY7c",
  authDomain: "resume-builder-65d0f.firebaseapp.com",
  projectId: "resume-builder-65d0f",
  storageBucket: "resume-builder-65d0f.appspot.com",
  messagingSenderId: "412424611530",
  appId: "1:412424611530:web:34352a0ddd178f90f13633",
  measurementId: "G-RJ8TEKJT7E",
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase)
  )
);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={firebaseConfig}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}
      >
        <App />
      </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
