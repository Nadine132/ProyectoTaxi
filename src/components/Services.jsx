import React from 'react';
import styled from 'styled-components';
import fotoTorre1 from '../Images/fotoTorre1.jpg';

const Section = styled.section`
  padding: 0 0 80px;
  text-align: center;
  color: #000;
  min-height: 100vh;
  background: #f4f4f4;
  width: 100%; /* Cambiado de 100vw a 100% */
  margin: 0;
  box-sizing: border-box;
  position: relative;
`;

const Title = styled.h2`
  margin-bottom: 30px;
  color: #333;
  font-size: 2.5rem;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-size: 1.25rem;
  color: #555;
  margin: 15px 0;
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #f1f1f1;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  margin: 40px auto 80px auto;
  width: 100%; /* Cambiado de 100vw a 100% */
  height: 400px;
  background: url(${fotoTorre1}) no-repeat center center;
  background-size: cover;
  border-radius: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const OverlayText = styled.div`
  position: absolute;
  bottom: 5%;
  right: 5%;
  color: #fff;
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 20px;

  /* Sin fondo */
  background-color: rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    font-size: 1.2rem;
    bottom: 10%;
    right: 5%;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    bottom: 15%;
    right: 5%;
  }
`;

const Services = () => (
  <Section id="services">
    <ImageContainer>
      <OverlayText>Disfruta de un viaje único con nosotros</OverlayText>
    </ImageContainer>
    <Title>Nuestros Servicios</Title>
    <List>
      <ListItem>Traslados al Aeropuerto</ListItem>
      <ListItem>Viajes Locales</ListItem>
      <ListItem>Viajes de Larga Distancia</ListItem>
      <ListItem>Transporte para Eventos Especiales</ListItem>
    </List>
  </Section>
);

export default Services;
