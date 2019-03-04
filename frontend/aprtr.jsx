import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./components/root"
import configureStore from "./store/store"
import { deleteSession } from "./utils/session_api_util"

// Test
import * as SessionAPI from "./utils/session_api_util"

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  let preloadedState, store;

  if (window.currentUser) {
    preloadedState = {
      session: window.currentUser.id,
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore(preloadedState);
  }

  window.getState = store.getState;
  window.deleteSession = deleteSession;
  ReactDOM.render(<Root store={store}/>, rootEl)
})


// Test
window.SessionAPI = SessionAPI


