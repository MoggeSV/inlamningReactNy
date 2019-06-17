import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Issues extends Component {
    render() {

        if(sessionStorage.getItem('jwt') === null) {
            return( <Redirect to="/" /> )
        }

        return (
            <div>
                <h1>Ärenden</h1>
            </div>
        )
    }
}

export default Issues
