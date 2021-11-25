import * as ActionType from '../constants/productConstant.js';

export const getProductsReducer = (state={products: []},action) => {
    switch(action.type){
        case ActionType.GET_PRODUCT_SUCESS:
            return { products: action.payload}

        case ActionType.GET_PRODUCT_FAIL:
            return { error: action.payload}

        default:
            return state 

    }
}

export const getProductDetailsReducer = (state = {}, action) => {
    switch(action.type){
        case ActionType.GET_PRODUCTDETAIL_SUCESS:
            return { product: action.payload}
        case ActionType.GET_PRODUCTDETAIL_FAIL:
            return { error: action.payload}
        default: 
            return state;
    }
}