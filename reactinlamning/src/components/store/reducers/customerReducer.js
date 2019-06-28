import actiontype from '../actions/actionTypes'

const initialState = {
    customer: {}
}

const customerReducer = (state = initialState, action) => {
    
    switch (action.type) {
        
        case actiontype.GET_CUSTOMER_SUCCESS:
            return {
                ...state,
                customer: action.customer
            }
    
        default:
            return {
                ...state
            }
            break;
    }
    
    
}


export default customerReducer