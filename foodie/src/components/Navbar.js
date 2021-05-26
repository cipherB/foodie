import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/auth/authAction';
import PropTypes from 'prop-types';

import logo from '../assets/foodies-logo.png';

const Navbar = ({ isAuthenticated, loading, logout }) => {

    const authLinks = (
        <li className="bline bg-danger">
            <a className="nav-link" onClick={logout} href='#!'>Logout</a>
        </li>
    );

    const logged = (
        <>
            <li className="bline bg-info">
                <a className="nav-link" href="/login">Login</a>
            </li>
        </>
    );

    const signed = (
        <>
            <li className="bline bg-info">
                <a className="nav-link" href="/signup">Sign Up</a>
            </li>
        </>
    )

    return (
        <nav className="navbar navbar-expand-lg navbar-dark nav-color">
            <div className="container-fluid ">
                <a className="navbar-brand" href="/"><img src={logo} alt='nil' style={{ height:80 }} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item bline">
                        <a className="nav-link" href="/menu">Menu</a>
                    </li>
                    <li className="nav-item bline">
                        <a className="nav-link" href="/promo">Promo</a>
                    </li>
                    <li className="nav-item bline">
                        <a className="nav-link" href="/vendor">Vendors</a>
                    </li>
                    <li className="nav-item bline">
                        <a className="nav-link" href="/aboutus">About Us</a>
                    </li>
                    <div className='navbar_top_auth'>
                        { !loading && (<>{ isAuthenticated ? authLinks : logged }</>) }
                    </div>
                    <div className='navbar_top_auth'>
                        { !loading && (<>{ isAuthenticated ? null : signed }</>) }
                    </div>
                </ul>
                </div>
            </div>
        </nav>
    )
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    loading: PropTypes.bool
}

const mapStateToProps = state => ({
    loading: state.authReducer.loading,
    isAuthenticated: state.authReducer.token
});

export default connect(mapStateToProps, {logout})(Navbar);
