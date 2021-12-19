import * as actiontypes from '../constants/cartConstants.js'
import axios from 'axios';

const url ='';

export const addToCart = (id) => async (dispatch) => {
    try{
        const {data} = await axios.get(`/product/${id}`);
        dispatch({type: actiontypes.ADD_TO_CART,payload: data})

    }catch(error){
        console.log("error while calling api addtocart");
        
    }
}

export const removeFromCart = (id) => (dispatch) => {
    dispatch({type: actiontypes.REMOVE_FROM_CART, payload: id})

}