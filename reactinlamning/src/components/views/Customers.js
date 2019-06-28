import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import actiontype from '../store/actions/actionTypes'
import { getCustomers } from '../store/actions/customerActions'

const mapStateToProps = (state) => {
    return {
        
    }
    }
    
    const mapDispatchToProps = (dispatch) => {
    return {
        getCustomers: () => dispatch(getCustomers())
    }
    }

    

class Customers extends Component {

    

    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    

    componentDidMount(){
        this.props.getCustomers()
    }
    

    routeToCusForm = e => {
        let path = `customerform`;
        this.props.history.push(path);
    }

    

    render() {

        if(sessionStorage.getItem('jwt') === null) {
            return( <Redirect to="/" /> )
        }

        return (
            <div className="container mt-5">
                <h3 className="mb-3">Kunder</h3>
                <h3 className="mb-3">Lägg till ny kund</h3>
                <button type="button" className="btn btn-success" onClick={this.routeToCusForm}>Lägg till ny kund</button>
                
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Customers)
