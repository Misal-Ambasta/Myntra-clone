import { ADD_PRODUCT_TO_CART,DELETE_FROM_CART, FILTER,ADD_TO_WISHLIST, DELETE_FROM_WISHLISH, GET_ALL_MYNTRA_SHIRTS,GET_ALL_MYNTRA_SHIRTS_SUCCESS, GET_ALL_MYNTRA_SHIRTS_FAILURE, DELETE_PRODUCT, INCREASE_QUANTITY, DECREASE_QUANTITY } from "./actionTypes";
import axios from 'axios'

export const getAllMyntraShirts = () => ({
    type: GET_ALL_MYNTRA_SHIRTS
})

export const getAllMyntraShirtsSuccess = (payload) => ({
    type: GET_ALL_MYNTRA_SHIRTS_SUCCESS,
    payload
})

export const getAllMyntraShirtsFailure = (payload) => ({
    type: GET_ALL_MYNTRA_SHIRTS_FAILURE,
    payload
})

export const addProductToCart = (payload) => ({
    type: ADD_PRODUCT_TO_CART,
    payload
})

export const deleteProduct = (payload) => ({
    type: DELETE_PRODUCT,
    payload
})

export const increaseQuantity = (payload) => ({
    type: INCREASE_QUANTITY,
    payload
})

export const decreaseQuantity = (payload) => ({
    type: DECREASE_QUANTITY,
    payload
})

export const filterData = (payload) => ({
    type: FILTER,
    payload
})

export const addToWishlist = (payload) => ({
    type: ADD_TO_WISHLIST,
    payload
})

export const deleteFromCart = (payload) => ({
    type: DELETE_FROM_CART,
    payload
})
export const deleteFromWishlist = (payload) => ({
    type: DELETE_FROM_WISHLISH,
    payload
})

export const getAllShirts = (payload) => async(dispatch)=> {
    dispatch(getAllMyntraShirts())    
    try{
        const data = await axios.get(`https://myntra-json-mock-server.herokuapp.com/shirts?${payload}`);
        dispatch(getAllMyntraShirtsSuccess(data))
    }catch(err){
        dispatch(getAllMyntraShirtsFailure(err))
    }
}

