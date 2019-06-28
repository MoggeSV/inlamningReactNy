import { combineReducers } from 'redux'
import profileReducer from './profileReducer'
import customerReducer from './customerReducer'

const rootReducer = combineReducers({
    profile: profileReducer,
    customer: customerReducer
})

export default rootReducer