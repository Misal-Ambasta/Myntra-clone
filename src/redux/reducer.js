import { ADD_PRODUCT_TO_CART, DELETE_FROM_CART, ADD_TO_WISHLIST, GET_ALL_MYNTRA_SHIRTS, GET_ALL_MYNTRA_SHIRTS_SUCCESS, GET_ALL_MYNTRA_SHIRTS_FAILURE, DELETE_PRODUCT, INCREASE_QUANTITY, DECREASE_QUANTITY } from './actionTypes';
import { loadData, saveData, removeData } from '../Utilis/localStorage';

const initState = {
    data: loadData('data') || [],
    isLoading: false,
    error: false,
    cart: loadData('cart') || [],
    wishlist: loadData('wishlist') || [],
};

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_ALL_MYNTRA_SHIRTS:
            return {
                ...state,
                isLoading: true,
                error: false,
                data: []
            };
        case GET_ALL_MYNTRA_SHIRTS_SUCCESS:
            saveData('data', payload.data);
            return {
                ...state,
                isLoading: false,
                error: false,
                data: payload.data
            };
        case GET_ALL_MYNTRA_SHIRTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true,
                message: `Something went wrong: ${payload}`
            };
        case ADD_TO_WISHLIST:
            saveData('wishlist', [...state.wishlist, payload]);
            return {
                ...state,
                wishlist: [...state.wishlist, payload]
            }
        case ADD_PRODUCT_TO_CART:
            saveData('cart', [...state.cart, payload]);
            return {
                ...state,
                cart: [...state.cart, payload]
            }
        case DELETE_FROM_CART:
            saveData('cart', state.cart.filter(item => item.id != payload));
            return{
                ...state,
                cart: state.cart.filter(item => item.id != payload)
            }
        default:
            return state;
    }
};

export default reducer;