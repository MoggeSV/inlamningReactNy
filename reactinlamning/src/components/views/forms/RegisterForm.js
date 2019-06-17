import React, { Component } from 'react'
import http from 'axios'
import {withRouter} from 'react-router-dom'

class RegisterForm extends Component {

    constructor(props) {
        super(props)

        this.state = {

            firstname: '',
            middlename: '',
            lastname: '', 
            birthday: '', 

            addressline: '', 
            zipcode: '', 
            city: '', 
            country: '', 
            
            email: '', 
            password: '',
            
            
        }
    }

    onChange = e => {
        this.setState({ [e.target.id] : e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();
        
        http
            .post('http://localhost:3001/api/users/register', this.state)
            .then(res => console.log(res))
            .then(() => this.props.history.push('/'))
            .catch(error => console.log(error))
    }


    render() {

        const {firstname, middlename, lastname, birthday, addressline, city, zipcode, country, email, password} = this.state
        return (
            <div>
                <h5>Personuppgifter</h5>
                <form noValidate onSubmit={this.onSubmit}>
                    
                    <div className="form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                            <input type="text" className="form-control" id="firstname" placeholder="Firstname" value={firstname} onChange={this.onChange} />
                        </div>  
                    </div>
                    <div className="form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                            <input type="text" className="form-control" id="middlename" placeholder="Middlename" value={middlename} onChange={this.onChange} />
                        </div>  
                    </div>
                    <div className="form-group ">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                            <input type="text" className="form-control" id="lastname" placeholder="Lastname" value={lastname} onChange={this.onChange} />
                        </div>  
                    </div>

                    <div className="form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-birthday-cake"></i></span>
                            <input type="date" className="form-control" id="birthday" placeholder="Date of birth" value={birthday} onChange={this.onChange} />
                        </div>  
                    </div>

                    <h5>Adress</h5>

                    <div className="form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-map-marker-alt"></i></span>
                            <input type="text" className="form-control" id="addressline" placeholder="Adress" value={addressline} onChange={this.onChange} />
                        </div>  
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-globe-europe"></i></span>
                                <input type="text" className="form-control" id="zipcode" placeholder="Postnummer" value={zipcode} onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="form-group col-md-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-city"></i></span>
                                <input type="text" className="form-control" id="city" placeholder="Ort" value={city} onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="form-group col-md-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-globe-europe"></i></span>
                                <input type="text" className="form-control" id="country" placeholder="Land" value={country} onChange={this.onChange} />
                            </div>
                        </div>
                    </div>

                    <h5>Användarinformation</h5>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                                <input type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                                <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={this.onChange} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group mb-5 mt-3">
                        <input type="submit" name="btn" value="Register" className="btn btn-outline-danger float-left login_btn" />
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter (RegisterForm)
