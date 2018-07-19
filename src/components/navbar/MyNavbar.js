import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import styled from 'styled-components';

const Logo = styled.h5`
  font-weight: 300;
  color: #259a35;
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  margin-bottom: 0;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
`;

let navStyle = {
  backgroundColor: 'white',
  color: 'green',
  boxShadow: ' 0 5px 15px #9e9e9e'
};
class MyNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar style={navStyle} light fixed="top" expand="sm">
          <Link to="/">
            <Logo>Recipes Logo</Logo>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={{ color: 'white' }} href="/components/">
                  Components
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: 'white' }} href="#">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

NavbarToggler.propTypes = {};

export default MyNavbar;
