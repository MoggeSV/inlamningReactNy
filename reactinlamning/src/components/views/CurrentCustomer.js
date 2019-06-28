import React, { Component } from 'react'

class CurrentCustomer extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {

        const {firstname, lastname, company, addressline, zipcode, city, country, email, phone} = this.state
        return (
            <div className="container mt-5">
                <h3 className="mt-5 mb-5">Din nuvarande kund</h3>
                <form>
                    <button type="button" className="btn btn-primary btn-sm px-2 mb-5 " onClick={this.addIssue}>Lägg till ärende</button>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label className="small text-muted">Förnamn</label>
                            <p>{firstname}</p>
                        </div>
                        <div className="form-group col-md-4">
                            <label className="small text-muted">Efternamn</label>
                            <p>{lastname}</p>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label className="small text-muted">Företag</label>
                            <p>{company}</p>
                        </div>
                    </div>
                    

                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label className="small text-muted">Adress</label>
                            <p>{addressline}</p>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label className="small text-muted">Postnummer</label>
                            <p>{zipcode}</p>
                        </div>
                        <div className="form-group col-md-4">
                            <label className="small text-muted">Ort</label>
                            <p>{city}</p>
                        </div>
                        <div className="form-group col-md-4">
                            <label className="small text-muted">Land</label>
                            <p>{country}</p>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="small text-muted">E-postadress</label>
                            <p>{email}</p>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="small text-muted">Telefonnummer</label>
                            <p>{phone}</p>
                        </div>
                    </div>

                    </form>
            </div>  
        )
    }
}

export default CurrentCustomer
