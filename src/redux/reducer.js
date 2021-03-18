import { ADD_PRODUCT_TO_CART, GET_ALL_MYNTRA_SHIRTS, GET_ALL_MYNTRA_SHIRTS_SUCCESS, GET_ALL_MYNTRA_SHIRTS_FAILURE, DELETE_PRODUCT, INCREASE_QUANTITY, DECREASE_QUANTITY } from './actionTypes';
import { loadData, saveData, removeData } from '../Utilis/localStorage';

const initState = {
    data: loadData('data') || [],
    isLoading: false,
    error: false,
    cart: loadData('cart') || []
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
        default:
            return state;
    }
};

export default reducer;