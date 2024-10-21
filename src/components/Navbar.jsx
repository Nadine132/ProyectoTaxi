import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTaxi } from '@fortawesome/free-solid-svg-icons'; // Icono de taxi

const Nav = styled.nav`
  background-color: #444;
  padding: 15px 0;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Logo = styled.h1`
  font-size: 1.75rem;
  margin: 0;
  display: flex;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
`;

const NavLink = styled(Link)` 
  color: #fff;
  width: fit-content;
  text-decoration: none;
  font-size: 14px;
  margin: 0 15px;
  transition: color 0.3s ease;
  &:hover {
    color: #3498db; /* Color azul al pasar el ratón */
  }
`;

const Navbar = () => (
  <Nav>
    <Logo>
      <FontAwesomeIcon icon={faTaxi} size="lg" style={{ margin: '0 10px', color: '#fff' }} />
      Taxi Nº41
    </Logo>
    <NavLinks>
      <NavLink to="/about">Sobre Nosotros</NavLink>
      <NavLink to="/services">Servicios</NavLink>
      <NavLink to="/contact">Contacto</NavLink>
      {/* Eliminamos los enlaces de Aviso Legal y Política de Privacidad */}
    </NavLinks>
  </Nav>
);

export default Navbar;
