import React, { Component } from 'react'
import RegisterForm from './forms/RegisterForm';

class Register extends Component {

    
    render() {
        return (
            <div className="container mt-5">
                <h1>Registrering av nytt konto</h1>
                <br></br>
               <RegisterForm />
            </div>
        )
    }
}

export default Register
 

