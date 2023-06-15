import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartReducer = (state, action) => {
  const { shoppingCart, totalPrice, totalQty } = state;

  let product;
  let index;
  let updatedPrice;
  let updatedQty;
  let toastShown = false;

  switch (action.type) {
    case 'ADD_TO_CART':
      const check = shoppingCart.find(
        (product) => product.ProductID === action.id
      );
      if (check) {
        if (!toastShown) {
          toast.warn('Item already in cart', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });

          toastShown = true;
        }
        return state;
      } else {
        product = action.product;
        product['qty'] = 1;
        product['TotalProductPrice'] = product.ProductPrice * product.qty;
        updatedQty = totalQty + 1;
        updatedPrice = totalPrice + product.ProductPrice;
        return {
          shoppingCart: [product, ...shoppingCart],
          totalPrice: updatedPrice,
          totalQty: updatedQty,
        };
      }

    case 'INC':
      index = shoppingCart.findIndex((cart) => cart.ProductID === action.id);
      const incrementedCart = [...shoppingCart];
      product = { ...incrementedCart[index] };
      product.qty++;
      product.TotalProductPrice = product.qty * product.ProductPrice;
      incrementedCart[index] = product;
      updatedQty = totalQty + 1;
      updatedPrice = totalPrice + product.ProductPrice;
      return {
        ...state,
        shoppingCart: incrementedCart,
        totalPrice: updatedPrice,
        totalQty: updatedQty,
      };

    case 'DEC':
      index = shoppingCart.findIndex((cart) => cart.ProductID === action.id);
      const decrementedCart = [...shoppingCart];
      product = { ...decrementedCart[index] };
      if (product.qty > 1) {
        product.qty--;
        product.TotalProductPrice = product.qty * product.ProductPrice;
        decrementedCart[index] = product;
        updatedQty = totalQty - 1;
        updatedPrice = totalPrice - product.ProductPrice;
        return {
          ...state,
          shoppingCart: decrementedCart,
          totalPrice: updatedPrice,
          totalQty: updatedQty,
        };
      } else {
        return state;
      }

    case 'DELETE':
      const filtered = shoppingCart.filter(
        (product) => product.ProductID !== action.id
      );
      product = action.cart;
      updatedQty = totalQty - product.qty;
      updatedPrice = totalPrice - product.qty * product.ProductPrice;
      return {
        shoppingCart: [...filtered],
        totalPrice: updatedPrice,
        totalQty: updatedQty,
      };

    case 'EMPTY':
      return {
        shoppingCart: [],
        totalPrice: 0,
        totalQty: 0,
      };

    default:
      return state;
  }
};
