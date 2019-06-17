import actiontype from '../actions/actionTypes'

const initialState = {
    user: {},
    loggedIn: false
}

const profileReducer = (state = initialState, action) => {
        
    switch(action.type) {

        case actiontype.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
                loggedIn: action.loggedIn
            }

        case actiontype.LOGOUT_SUCCESS:
            return {
                state: undefined
            }

        case actiontype.GET_PROFILE_SUCCESS:
            return {
                ...state,
                user: action.user
            }

        case actiontype.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                user: action.user
            }
        
        default:
            return {
                ...state
            }
    }
}

export default profileReducer