import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
} from './action-types/cart-actions';

// ADICIONA ITEM NO CARRINHO
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};
//REMOVE ITEM DO CARRINHO
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};
//SUBTRAIR ITEM
export const subtractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};
//ADICIONAR ITEM
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};
