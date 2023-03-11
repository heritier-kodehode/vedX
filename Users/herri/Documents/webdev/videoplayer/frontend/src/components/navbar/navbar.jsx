import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo to='/'>My App</Logo>
      <NavLinks>
      <NavLinkStyled to='/' activeclassname='active'>
          Home
        </NavLinkStyled>
        <NavLinkStyled to='/login' activeclassname='active'>
          Login
        </NavLinkStyled>
        <NavLinkStyled to='/register' activeclassname='active'>
          Register
        </NavLinkStyled>
        <NavLinkStyled to='/graphic' activeclassname='active'>
          Graphic
        </NavLinkStyled>
        <NavLinkStyled to='/video' activeclassname='active'>
          Video
        </NavLinkStyled>
        <NavLinkStyled to='/presentation' activeclassname='active'>
          Presentation
        </NavLinkStyled>
      </NavLinks>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
 
  width: 100%;
  overflow: hidden;
`;

const Logo = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLinkStyled = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin-left: 1rem;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    font-weight: bold;
  }
`;

export default Navbar;
