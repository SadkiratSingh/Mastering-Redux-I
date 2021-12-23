//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import counterReducer from "./counter";

//NOTE: reducer should return overall state object because redux does not merge sliced changes with existing state instead it replaces the existing state with whatever is returned by reducer.

//NOTE: never mutate the existing state inside reducer, always overwrite it by returning a new state object.

//NOTE: reducer function is a pure function which means it does not cause side effects, takes arguments which it treats immutably and returns an output.

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return { ...state, counter: state.counter + 1 };
//   }
//   if (action.type === "increase") {
//     return { ...state, counter: state.counter + action.amount };
//   }
//   if (action.type === "decrement") {
//     return { ...state, counter: state.counter - 1 };
//   }
//   if (action.type === "showCounter") {
//     return { ...state, showCounter: !state.showCounter };
//   }
//   return state;
// };

// const store = createStore(counterReducer);

const store = configureStore({
  // key will be our choice here. our store will have grouped data where each group will have a key provided in here by us.
  reducer: { counter: counterReducer, auth: authReducer }, //this reducer is similar to what we created at line 31. It is just that is created by toolkit now
});

export default store;
