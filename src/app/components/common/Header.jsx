import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout, logout_success } from '../../actions/auth';

const Header = ({isLoggedIn, logout}) => {

  const onLogout = (e) => {
    logout();
    e.preventDefault();
  }

  const makeList = () => {
    return ( 
      <ul className="right hide-on-med-and-down">
        <li key="1">
          <Link to="/">Home</Link>
        </li>
        {(isLoggedIn) &&
          <li>
            <Link to="/logout" onClick={(e) => onLogout(e)} >Logout</Link>
          </li> 
        }
        {(!isLoggedIn) &&
          <li key="2">
            <Link to="/login">Login</Link>
          </li> 
        }
        {(!isLoggedIn) &&
          <li key="3">
            <Link to="/signup">Signup</Link>
          </li> 
        }
      </ul>
    );
  };

  return (
    <nav className="light-blue lighten-1" role="navigation">
      <div className="nav-wrapper container">
        <a id="logo-container" href="/" className="brand-logo">BarMeetup</a>
        {makeList()}
      </div>
    </nav>
  )
}

const mapStateToProps = (state, ownProps) => {
  console.log('Header mapStateToProps', state);
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => { 
          dispatch(logout());
          dispatch(logout_success()); 
        }
    }
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);