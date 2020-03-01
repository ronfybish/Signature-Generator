import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink ,Container} from 'reactstrap';

export default class AppNavBar extends Component {    
    render() {
        return (
        <div>
            <Navbar color="light" className=" mb-3" light>
              <NavbarBrand href="/" className="mx-auto">
                      <img src={require('../img/logo.png')} />
              </NavbarBrand>
              <NavbarToggler onClick={this.props.toggle} className="mr-2" />
              <Collapse isOpen={this.props.isOpen} navbar>
                <Nav navbar>
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