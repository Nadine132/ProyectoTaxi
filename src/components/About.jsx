import React from 'react';
import styled from 'styled-components';
import { FaPhoneAlt, FaWhatsapp, FaTaxi } from 'react-icons/fa';
import fotoCoche from '../Images/fotoCoche.jpg';
import fotoTorre1 from '../Images/fotoTorre1.jpg';

const Section = styled.section`
  padding: 0 0 20px;
  text-align: center;
  color: #000;
  min-height: 100vh;
  background: #f4f4f4;
  width: 100%; /* Cambiado de 100vw a 100% */
  margin: 0;
  box-sizing: border-box;
  position: relative;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 0;
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const ContactContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const IconLink = styled.a`
  font-size: 2rem;
  color: #2c3e50;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }
`;

const CarImage = styled.img`
  width: 100%;
  max-width: 700px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
`;

const Paragraph = styled.p`
  color: #34495e;
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto 30px auto;
  padding: 0 20px;
`;

const MapContainer = styled.div`
  margin: 10px auto;
  height: 400px;
  width: 97%;
  max-width: 1600px;
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

const About = () => (
  <Section>
    <ImageContainer>
      <OverlayText>Disfruta de un viaje único con nosotros</OverlayText>
    </ImageContainer>
    <TitleContainer>
      <FaTaxi size={40} color="#2c3e50" />
      <Title>Taxi Nº41</Title>
    </TitleContainer>
    <ContactContainer>
      <IconLink href="tel:+34649830831" aria-label="Llamar">
        <FaPhoneAlt />
      </IconLink>
      <IconLink href="https://wa.me/34649830831" aria-label="WhatsApp">
        <FaWhatsapp />
      </IconLink>
    </ContactContainer>
    <CarImage src={fotoCoche} alt="Taxi en Torre del Mar" />
    <Paragraph>
      En Taxi Nº41 ofrecemos servicios de transporte de calidad en Torre del Mar y sus alrededores. Contamos con una flota moderna y un equipo de profesionales capacitados para brindarte el mejor servicio.
    </Paragraph>
    <Paragraph>
      Nos especializamos en viajes al aeropuerto, traslados locales y servicios especiales. Tu comodidad y seguridad son nuestra prioridad.
    </Paragraph>
    <MapContainer>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1572.3441789544278!2d-4.055708248049217!3d36.76205682986346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7228a4d5c1b6e7%3A0xa46d3d64f871ef1d!2sAv.%20de%20Andaluc%C3%ADa%2C%2076%2C%203A%2C%2029740%20Torre%20del%20Mar%2C%20M%C3%A1laga!5e0!3m2!1ses!2ses!4v1695068432452!5m2!1ses!2ses" 
        width="100%" 
        height="100%" 
        frameBorder="0" 
        allowFullScreen="" 
        aria-hidden="false" 
        tabIndex="0" 
        title="Localización de Taxi Nº41"
      ></iframe>
    </MapContainer>
  </Section>
);

export default About;
