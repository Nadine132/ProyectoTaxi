import React from 'react';
import styled from 'styled-components';
import fotoTorre1 from '../Images/fotoTorre1.jpg';
import fotoCoche from '../Images/fotoCoche.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Section = styled.section`

  text-align: center;
  color: #000;
  min-height: 100vh;
  background: #f4f4f4;
  width: 100%; 
  margin: 0;
  box-sizing: border-box;
  position: relative;
`;

const Title = styled.h2`
  margin-bottom: 30px;
  color: #333;
  font-size: 2.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Button = styled.a`
  padding: 12px 24px;
  background-color: #007bff;
  border: none;
  border-radius: 25px;
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-top: 20px;
  
  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
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

const CarImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  margin: 60px auto;
  display: block;
`;

const LastParagraph = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const PaymentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const PaymentItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
`;

const Icon = styled(FontAwesomeIcon)`
  color: #007bff;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #0056b3;
  }
`;

const Contact = () => {
  const phoneNumber = '649830831';
  const message = 'Hola, me gustaría obtener más información sobre los servicios de taxi.';
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Section>
      <ImageContainer>
        <OverlayText>Disfruta de un viaje único con nosotros</OverlayText>
      </ImageContainer>
      <Title>Contáctanos</Title>
      <Paragraph>
        En Taxis Torre del Mar partimos del objetivo básico de ofrecer la máxima comodidad a nuestros pasajeros en los taxis que ponemos a su disposición.
      </Paragraph>
      <Button href={whatsappURL} target="_blank" rel="noopener noreferrer" aria-label="Enviar mensaje por WhatsApp">
        Reserva tu Viaje por WhatsApp
      </Button>
      <CarImage src={fotoCoche} alt="Taxi en Torre del Mar" />
      <LastParagraph>
        <PaymentSection>
          Aceptamos
          <PaymentItem>
            <Icon icon={faMoneyBillWave} title="Pago en efectivo" />
            <span>Pago en efectivo</span>
          </PaymentItem>
          <PaymentItem>
            <Icon icon={faCreditCard} title="Pago con tarjeta" />
            <span>Pago con tarjeta</span>
          </PaymentItem>
        </PaymentSection>
        <Paragraph>
          Llámenos cuando precise nuestros servicios de transporte. Contamos con una flota de vehículos muy seguros y con profesionales expertos en la conducción.
        </Paragraph>
      </LastParagraph>
    </Section>
  );
};

export default Contact;
