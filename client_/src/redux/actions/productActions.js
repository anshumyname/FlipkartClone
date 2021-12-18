import axios from 'axios';
import * as action from '../constants/productConstant.js'

const url = 'http://localhost:8000';

export const getProducts =()=> async (dispatch) => {
    try {
        
        const {data} = await axios.get( `/products`);
        dispatch({type: action.GET_PRODUCT_SUCESS, payload:data})
        
    }catch(error){
        dispatch({type: action.GET_PRODUCT_FAIL, payload: error.response})
        console.log("Error while calling products api");
    }
}

export const getProductDetails = (id) => async(dispatch) => {
    try {
        const {data} = await axios.get( `product/${id}`);
        console.log(data)
        dispatch({type: action.GET_PRODUCTDETAIL_SUCESS, payload:data});
    }catch(error){
        dispatch({type: action.GET_PRODUCTDETAIL_FAIL, payload:error.response});

    }
}