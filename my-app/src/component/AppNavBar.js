import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,} from 'reactstrap';
import {Link} from 'react-router-dom'
export default class AppNavBar extends Component {    
    render() {
        return (
        <div>
            <Navbar color="light" className="mb-3" light>
              <NavbarBrand href="/" >
                      <img alt="logo-img" src={require('../img/logo.png')} />
                      
              </NavbarBrand>
              <NavbarToggler onClick={this.props.toggle}  />
              <Collapse isOpen={this.props.isOpen} navbar>
                <Nav className="text-center" navbar>
                  <NavItem>
                    <Link to="/guide"><div><strong>User Guide</strong></div></Link>
                  </NavItem>
                  <NavItem>
                    <NavLink target="_blank" href="https://github.com/ronfybish/Signature-Generator"><strong>My GitHub</strong></NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink target="_blank" href="https://www.linkedin.com/in/ron-fybish-9b0194157/"><strong>Linkedin Profile</strong></NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
        </div>
        )
    }
}