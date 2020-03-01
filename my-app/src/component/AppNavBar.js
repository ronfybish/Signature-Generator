import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

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
                    <NavLink href="/components/">Components</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
        </div>
        )
    }
}