import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Customers extends Component {
    render() {

        if(sessionStorage.getItem('jwt') === null) {
            return( <Redirect to="/" /> )
        }

        return (
            <div>
                <h1>Kunder</h1>
            </div>
        )
    }
}

export default Customers
