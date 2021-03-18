import { ADD_PRODUCT_TO_CART, FILTER, GET_ALL_MYNTRA_SHIRTS,GET_ALL_MYNTRA_SHIRTS_SUCCESS, GET_ALL_MYNTRA_SHIRTS_FAILURE, DELETE_PRODUCT, INCREASE_QUANTITY, DECREASE_QUANTITY } from "./actionTypes";
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

export const getAllShirts = (payload) => async(dispatch)=> {
    dispatch(getAllMyntraShirts())
    console.log(payload)
    
    try{
        const data = await axios.get(`https://myntra-json-mock-server.herokuapp.com/shirts?`);
        dispatch(getAllMyntraShirtsSuccess(data))
    }catch(err){
        dispatch(getAllMyntraShirtsFailure(err))
    }
}

export const filterShirts = (payload) => async (dispatch) => {
    dispatch(filterData())
    try{
        const newData = await axios.get(`https://myntra-json-mock-server.herokuapp.com/shirts?gender=${payload.gender}&categories=${payload.categories}`)
        dispatch(getAllMyntraShirtsSuccess(newData))
    }catch(err){
        dispatch(getAllMyntraShirtsFailure(err))
    }
}