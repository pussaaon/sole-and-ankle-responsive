/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { COLORS, WEIGHTS } from '../../constants.js'

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <OverLay>
      <Content>        
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Close Menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </OverLay>
  );
};

const OverLay = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  background: hsl(220deg 5% 40% / 80%);
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Content = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  background: white;
  width: 300px;
  height: 100%;
  padding: 32px;

  display: flex;  
  flex-direction: column;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: calc(18 / 16 * 1rem);
  text-transform: uppercase;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Filler = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;

  a {
    text-decoration: none;
    color: ${COLORS.gray[700]};
    font-size: calc(14 / 16 * 1rem);
    line-height: calc(16.44 / 16 * 1rem);
  }
`;


export default MobileMenu;
