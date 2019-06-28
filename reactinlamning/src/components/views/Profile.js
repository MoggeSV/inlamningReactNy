import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { get, update } from '../store/actions/profileActions'
import EditProfileForm from './forms/EditProfileForm'

const mapStateToProps = (state) => {
    return {
        user: state.profile.user,
        loggedIn: state.profile.loggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        get: () => dispatch(get()),
        update: (user, jwt) => dispatch(update(user, jwt)),
    }
}

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: this.props.user,
            isEditing: false
        }
    }

    componentDidMount() {
        this.props.get()
        this.setState({ user: JSON.parse(sessionStorage.getItem('user')) })
    }

    componentWillReceiveProps() {
        this.setState({ isEditing: false })
    }

    onChange = e => {
        const user = this.state.user
        user[e.target.id] = e.target.value
        return this.setState({ user: user })
    }

    saveEdit = e => {
        e.preventDefault()
        this.props.update(this.state.user, sessionStorage.getItem('jwt'))
        this.props.history.push('/profile')
    }   

    cancelEdit = e => {
        this.setState({ user: JSON.parse(sessionStorage.getItem('user')) })
        this.props.history.push('/profile')
    }

    toggleEdit = e => {
        this.setState({ isEditing: !this.state.isEditing })
    }

    

    render() {

        if(sessionStorage.getItem('jwt') === null) {
            return( <Redirect to="/" /> )
        }

        if(this.state.isEditing) {
            return(
                <div className="container mt-5">
                    <EditProfileForm user={this.state.user} onChange={this.onChange} saveEdit={this.saveEdit} cancelEdit={this.cancelEdit} />
                </div>
            )            
        }

        return(
            <div className="container mt-5">
                <h3 className="mt-5 mb-5">Din profil</h3>
                <form>
                    <button type="button" className="btn btn-primary btn-sm px-2 mb-5 " onClick={this.toggleEdit}>Ändra</button>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label className="small text-muted">Förnamn</label>
                            <p>{this.props.user.firstname}</p>
                        </div>
                        <div className="form-group col-md-4">
                            <label className="small text-muted">Mellannamn</label>
                            <p>{this.props.user.middlename}</p>
                        </div>
                        <div className="form-group col-md-4">
                            <label className="small text-muted">Efternamn</label>
                            <p>{this.props.user.lastname}</p>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label className="small text-muted">Födelsedatum</label>
                            <p>{this.props.user.birthday}</p>
                        </div>
                    </div>
                    

                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label className="small text-muted">Adress</label>
                            <p>{this.props.user.addressline}</p>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label className="small text-muted">Postnummer</label>
                            <p>{this.props.user.zipcode}</p>
                        </div>
                        <div className="form-group col-md-4">
                            <label className="small text-muted">Ort</label>
                            <p>{this.props.user.city}</p>
                        </div>
                        <div className="form-group col-md-4">
                            <label className="small text-muted">Land</label>
                            <p>{this.props.user.country}</p>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label className="small text-muted">E-postadress</label>
                            <p>{this.props.user.email}</p>
                        </div>
                    </div>

                    </form>
            </div>        
        )

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)