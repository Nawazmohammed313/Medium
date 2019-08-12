import React from "react";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogout (e) {
      e.preventDefault();
      this.props.logout();
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">Well Done</div>
          {this.props.loggedIn ? (
            <div className="navbar-profile"><button onClick={this.props.handleLogout}>logout</button></div>
          ) : (
            <div className="navbar-auth-container">
                <div className="navbar-signin"><a href='/login'>Sign In</a></div>
                <div className="navbar-signup"><a href='/signup'>Sign Up</a></div>
            </div>
          )}
        </div>
      </nav>
    );
  }
}

export default NavBar;
