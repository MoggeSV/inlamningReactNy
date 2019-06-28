import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import http from 'axios'
import {withRouter} from 'react-router-dom'

class CustomerForm extends Component {

    constructor(props) {
        super(props)

        this.state = {

            firstname: '',
            lastname: '',
            company: '',
            addressline: '',
            zipcode: '',
            city: '',
            country: '',
            email: '',
            phone: ''            
            
        }
    }

    onSubmit = e => {
        e.preventDefault();
        
        http
            .post('http://localhost:3001/api/customers/register', this.state)
            .then(res => console.log(res))
            
            .then(() => this.props.history.push('/currentcustomer'))
            .catch(error => console.log(error))
            .then(() => sessionStorage.setItem("currentCustomer", JSON.stringify(this.state)  ))
    }

    onChange = e => {
        this.setState({ [e.target.id] : e.target.value })
    }

    backToCust = e => {
        let path = `customers`;
        this.props.history.push(path);
    }


    render() {

        if(sessionStorage.getItem('jwt') === null) {
            return( <Redirect to="/" /> )
        }

        const {firstname, lastname, company, addressline, zipcode, city, country, email, phone} = this.state
        return (
            <div className="container mt-5">
                <h2 className="mb-4">Lägg till ny kund</h2>
                <form noValidate onSubmit={this.onSubmit}>
                    
                    <div className="form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                            <input type="text" className="form-control" id="firstname" placeholder="Förnamn" value={firstname} onChange={this.onChange} />
                        </div>  
                    </div>
                    <div className="form-group ">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                            <input type="text" className="form-control" id="lastname" placeholder="Efternamn" value={lastname} onChange={this.onChange} />
                        </div>  
                    </div>

                    <div className="form-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-industry"></i></span>
                            <input type="text" className="form-control" id="company" placeholder="Företag" value={company} onChange={this.onChange} />
                        </div>  
                    </div>

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

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                                <input type="email" className="form-control" id="email" placeholder="Epostadress" value={email} onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"></i></span>
                                <input type="number" className="form-control" id="phone" placeholder="Telefonnummer" value={phone} onChange={this.onChange} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group mb-5 mt-3">
                        <input type="submit" name="btn" value="Lägg till kund" className="btn btn-outline-primary float-left login_btn" />
                        <input type="button" name="btn" value="Tillbaka" onClick={this.backToCust} className="btn btn-outline-danger float-left login_btn ml-3" />
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter (CustomerForm)
