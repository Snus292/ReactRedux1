import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";

// начиная с версии React 18, метод ReactDOM.render больше не 
// поддерживается, и вместо него рекомендуется использовать 
// метод createRoot


// начиная с некоторых версий React, метод createRoot больше не 
// поддерживается в react-dom, и вместо него следует 
// импортировать из react-dom/client.

const initialState = { value: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        value: state.value + 1
      };
    case "DEC":
      return {
        ...state,
        value: state.value - 1
      };
    case "RND":
      return {
        ...state,
        value: state.value * action.payload
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
const update = () => {
  document.getElementById("counter").textContent = store.getState().value;
}

store.subscribe(update);

const inc = () => ({ type: "INC" });
const dec = () => ({ type: "DEC" });
const rnd = (value) => ({ type: "RND", payload: value });

document.getElementById("inc").addEventListener("click", () => {
  store.dispatch(inc());
});
document.getElementById("dec").addEventListener("click", () => {
  store.dispatch(dec());
});
document.getElementById("rnd").addEventListener("click", () => {
  const value = Math.floor(Math.random() * 10);
  store.dispatch(rnd(value));
});



// let state = reducer(initialState, {type: "INC"});
// state =reducer(state, {type: "INC"});
// state =reducer(state, {type: "INC"});
// state =reducer(state, {type: "INC"});
// console.log(state);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();