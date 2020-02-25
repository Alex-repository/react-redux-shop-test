import axios from 'axios';

const addToCart = product => {
  return {
    type: "ADD_TO_CART",
    product
  };
};

const removeFromCart = product => {
  return {
    type: "REMOVE_FROM_CART",
    product
  };
};
const loadProducts = () => {

   return dispatch => {
    return  axios.get("http://localhost:3001/products")
    .then(response => {
       dispatch({
         type: "REPLACE_PRODUCTS",
         products: response.data
       });
     });
   }; 
};

export { addToCart, removeFromCart, loadProducts };