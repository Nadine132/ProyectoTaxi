import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdLocalTaxi } from 'react-icons/md';

const FooterContainer = styled.footer`
  background-color: #1e1e1e;
  color: #f5f5f5;
  padding: 30px 20px;
  text-align: center;
  font-size: 0.9rem;
  border-top: 4px solid #444;
  width: 100%; /* Asegúrate de que este sea 100% */
  margin: 0;
  box-sizing: border-box;
  position: relative;
  overflow: hidden; /* Agregado para evitar el scroll lateral */
`;

const FooterTitle = styled.h2`
  margin: 0 0 15px;
  font-size: 1.6rem;
  color: #f5f5f5;
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.p`
  margin: 10px 0;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const FooterLink = styled.a`
  color: #3498db;
  text-decoration: none;
  padding: 0 10px; /* Cambiado de margin a padding para evitar el desbordamiento */
  font-size: 0.9rem;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  
  &:hover {
    color: #f5f5f5;
    border-bottom: 2px solid #f5f5f5;
  }
`;

const FooterIcon = styled(MdLocalTaxi)`
  margin-right: 10px;
  color: #f5f5f5;
`;

const Footer = () => (
  <FooterContainer>
    <FooterTitle>
      <FooterIcon size={28} />
      Taxi Torre del Mar Nº41
    </FooterTitle>
    <FooterText>Contacta con nosotros:</FooterText>
    <FooterText>
      <FooterLink href="tel:+34649830831">Llamar: 649 830 831</FooterLink> | 
      <FooterLink href="https://wa.me/34649830831?text=Hola%2C%20me%20interesa%20un%20traslado%20con%20Taxi%20N%C2%BA41." target="_blank" rel="noopener noreferrer">WhatsApp</FooterLink> | 
      <FooterLink href="mailto:taxi41torredelmar@gmail.com">Email: taxi41torredelmar@gmail.com</FooterLink>
    </FooterText>
    <FooterText>
      <FooterLink as={Link} to="/legal-notice">Aviso Legal</FooterLink> | 
      <FooterLink as={Link} to="/privacy-policy">Política de Privacidad</FooterLink>
    </FooterText>
  </FooterContainer>
);

export default Footer;
