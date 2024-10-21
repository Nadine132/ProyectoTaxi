import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding: 60px 20px;
  background-color: #f9f9f9;
  text-align: center;
  width: 100%; /* Evitar el scroll lateral */
  box-sizing: border-box;
`;

const Title = styled.h2`
  margin-bottom: 40px;
  color: #222;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;

const PrivacyPolicy = () => (
  <Section>
    <Title>Política de Privacidad</Title>
    <Paragraph>
      En taxi-torre-del-mar.com, la privacidad de nuestros usuarios es importante. Esta política de privacidad establece cómo recogemos, usamos y protegemos tu información personal.
    </Paragraph>
    <Paragraph>
      Recogemos información personal que proporcionas al contactarnos o al utilizar nuestros servicios. Usamos esta información para proporcionar y mejorar nuestros servicios.
    </Paragraph>
    <Paragraph>
      Nos comprometemos a proteger tu información personal y no la compartiremos con terceros sin tu consentimiento, excepto cuando sea necesario para cumplir con la ley.
    </Paragraph>
    <Paragraph>
      Puedes ponerte en contacto con nosotros en cualquier momento para actualizar o eliminar tu información personal.
    </Paragraph>
  </Section>
);

export default PrivacyPolicy;
