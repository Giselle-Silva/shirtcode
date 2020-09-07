import Item1 from '../../images/item1.jpg';
import Item2 from '../../images/item2.jpg';
import Item3 from '../../images/item3.jpg';
import Item4 from '../../images/item4.jpg';
import Item5 from '../../images/item5.jpg';
import Item6 from '../../images/item6.jpg';
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
} from '../actions/action-types/cart-actions';

const initState = {
  items: [
    {
      id: 1,
      title: 'Camiseta Código',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      price: 110,
      img: Item1,
    },
    {
      id: 2,
      title: 'Camiseta Javascript',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      price: 80,
      img: Item2,
    },
    {
      id: 3,
      title: 'Camiseta React',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      price: 120,
      img: Item3,
    },
    {
      id: 4,
      title: 'Camiseta JS',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      price: 100,
      img: Item4,
    },
    {
      id: 5,
      title: 'Camiseta NPM',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      price: 120,
      img: Item5,
    },
    {
      id: 6,
      title: 'Camiseta Git',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima',
      price: 90,
      img: Item6,
    },
  ],
  addedItems: [],
  total: 0,
};
const cartReducer = (state = initState, action) => {
  //COMPONETE HOME
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id);
    // VERIFICA SE O ID DA AÇÃO EXISTEM NO ADDEDITEMS
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      addedItem.quantity = 1;
      //CALCULANDO O TOTAL
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    let new_items = state.addedItems.filter((item) => action.id !== item.id);

    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  }
  //COMPONENTE CART
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);

    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 10,
    };
  }

  if (action.type === 'SUB_SHIPPING') {
    return {
      ...state,
      total: state.total - 10,
    };
  } else {
    return state;
  }
};

export default cartReducer;
