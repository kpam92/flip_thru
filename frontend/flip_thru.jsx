import React from "react";
import ReactDOM from 'react-dom';
import Root from './components/root'
import configureStore from './store/store';
import { fetchUser } from './actions/user_actions'

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.fetchUser = fetchUser;
  window.store = store;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
