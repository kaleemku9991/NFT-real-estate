import React, { Component } from 'react';
import home from '../home.png'

class Navbar extends Component {
  render() {
    const { account } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
          <a className="navbar-brand" href="/#"><strong>Kaleem Real Estate</strong></a>
          <img src={home} alt="/" />
          <ul className="navbar-nav ml-auto">
            <h4 className="nav-address">Account:</h4>
            <li className="nav-item">
               <strong className="nav-link nav-link-custom">{account}</strong>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar;
