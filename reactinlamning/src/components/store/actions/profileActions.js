import actiontype from './actionTypes'

const __apiUrl = 'http://localhost:3001/api/users'

export const login = (credentials) => dispatch => {

    fetch(`${__apiUrl}/login`, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(res => {
        if (res.success) {
            sessionStorage.setItem('jwt', res.token)
            sessionStorage.setItem('user', JSON.stringify(res.currentUser))
            sessionStorage.removeItem('message')

        dispatch({
            type: actiontype.LOGIN_SUCCESS,
            user: JSON.parse(sessionStorage.getItem('user')),
            loggedIn: true
        })
        } else {
            sessionStorage.setItem('message', res.message)

            dispatch({
                type: actiontype.LOGIN_FAILED,
                loggedIn: false
            })
        }
        


    })

}

export const logout = () => dispatch => {

    dispatch({
        type: actiontype.LOGOUT_SUCCESS
    })

    sessionStorage.removeItem('jwt')
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('currentCustomer')

}

export const get = () => dispatch => {

    dispatch({
        type: actiontype.GET_PROFILE_SUCCESS,
        user: JSON.parse(sessionStorage.getItem('user'))
    })
/*   
    fetch(`${__apiUrl}/${user._id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': 'bearer ' + jwt
        }
    })
    .then(res => res.json())
    .then(res => {
        dispatch({
            type: actiontype.GET_PROFILE_SUCCESS,
            user: res.currentUser
        })

        sessionStorage.setItem('user', JSON.stringify(res.currentUser))
    })       
 */
}

export const update = (user, jwt) => dispatch => {
 
    fetch(`${__apiUrl}/${user._id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            'authorization': 'bearer ' + jwt
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(res => {
        
        sessionStorage.setItem('user', JSON.stringify(res.currentUser))
        
        dispatch({
            type: actiontype.UPDATE_PROFILE_SUCCESS,
            user: JSON.parse(sessionStorage.getItem('user'))
        })

        
    })       

}

/* export const register = (user) => dispatch => {
    fetch(`${__apiUrl}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(res => {
        

        dispatch({
            type: actiontype.UPDATE_PROFILE_SUCCESS,
            user: JSON.parse(sessionStorage.getItem('user'))
        })

        
    })
} */