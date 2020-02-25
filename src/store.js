import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const products = (state =[], action) => {
  switch (action.type) {
    case "REPLACE_PRODUCTS":
      return action.products
    default:
      return state;
  }
};
const cart = (state =[], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return  state.concat(action.product)
    case "REMOVE_FROM_CART":
      return  state.filter(product => {
          return product.id !== action.product.id;
        })
    default:
      return state;
  }
};
const logger = store => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};
export default createStore(
  combineReducers({cart, products}),
  applyMiddleware(logger, thunk)
);
