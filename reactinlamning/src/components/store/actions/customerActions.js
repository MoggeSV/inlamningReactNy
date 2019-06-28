import actiontype from './actionTypes'

/* const __apiUrl = 'http://localhost:3001/api/customers'


export const getCustomers = () => dispatch => {

    let jwt = sessionStorage.getItem('jwt')

    fetch(`${__apiUrl}/all`, {
        method: 'GET',
        headers: {
             'content-type': 'application/json',
             'authorization': 'bearer ' + jwt
        }
    })
    .then(res => res.json())
    .then(res => {
        dispatch({
            type: actiontype.GET_CUSTOMER_SUCCESS,
            customer: res.customer
        })

        sessionStorage.setItem('customer', JSON.stringify(res.customer))
    })
} */

/* export const getCustomers = () => dispatch => {

    dispatch({
        type: actiontype.GET_CUSTOMER_SUCCESS,
        customer: JSON.parse(sessionStorage.getItem('customer'))
    })
} */

export const getCustomers = () => dispatch => {

    let jwt = sessionStorage.getItem('jwt')
    const __apiUrl = 'http://localhost:3001/api/users'

    fetch(`${__apiUrl}/all`, {
        method: 'GET',
        headers: {
             'content-type': 'application/json',
             'authorization': 'bearer ' + jwt
        }
    })
    .then(res => res.json())

    .then(data => {dispatch({type:actiontype.GET_CUSTOMER_SUCCESS, customer: data.customer})})
    .then(console.log("getcustomer funktionen körd"))
    /* .then(res => {
        dispatch({
            type: actiontype.GET_CUSTOMER_SUCCESS,
            customer: res.customer
        }) 

        sessionStorage.setItem('customers', JSON.stringify(res.customer))
    })*/
}