import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../store/actions/profileActions'

const mapStateToProps = (state) => {
    return {
        user: state.profile.user,
        loggedIn: state.profile.loggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}


class Navbar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: this.props.user,
            loggedIn: false
        }
    }



    render() {
        console.log(this.props.loggedIn);
        console.log(this.props.user);
        
        if (this.props.loggedIn) {
            return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink exact to="/" activeClassName="active" className="nav-link" className="navbar-brand" href="/">REACT UPPGIFT</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        <NavLink exact to="/" activeClassName="active" className="nav-link" href="/">Hem</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact to="/customers" activeClassName="active" className="nav-link" href="/">Kunder</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact to="/issues" activeClassName="active" className="nav-link" href="/">Ärenden</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-5">
                    <li className="nav-item">
                        <NavLink exact to="/profile" activeClassName="active" className="nav-link" href="/profile">{this.props.user.firstname} {this.props.user.lastname}</NavLink>
                        </li> 
                        <li className="nav-item">
                        <NavLink exact to="/" className="nav-link" href="/" onClick={this.props.logout}>Logga ut <i class="fas fa-sign-out-alt"></i></NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            )
        } else {
            return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink exact to="/" activeClassName="active" className="nav-link" className="navbar-brand" href="/">REACT UPPGIFT</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        <NavLink exact to="/" activeClassName="active" className="nav-link" href="/">Hem</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-5">
                        <li className="nav-item">
                        <NavLink exact to="/login" activeClassName="active" className="nav-link" href="/login">Logga in</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink exact to="/register" activeClassName="active" className="nav-link" href="/register">Registrera dig</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
        }

        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)