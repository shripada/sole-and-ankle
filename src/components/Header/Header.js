import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <HeaderI>
      <SuperHeader />
      <MainHeader>
        <Logo
          styles={{
            position: 'absolute',
            top: '0',
            left: '0',
            bottom: 0,
            margin: 'auto',
          }}
        />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
      </MainHeader>
    </HeaderI>
  );
};

const HeaderI = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1024px;
`;
const MainHeader = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  padding: 21px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  align-items: baseline;
  justify-content: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  margin-left: 48px;
  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
