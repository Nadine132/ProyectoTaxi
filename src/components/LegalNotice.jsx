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
  width: 100%; /* Cambiado para evitar el scroll lateral */
  box-sizing: border-box;
`;

const Title = styled.h2`
  margin-bottom: 40px;
  color: #222;
  font-size: 2.8rem;
  font-weight: 700;
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

const LegalNotice = () => (
  <Section>
    <Title>Aviso Legal</Title>
    <Paragraph>
      Información del Responsable: Daniel Espejo, DNI: 53895376M, Torre del Mar, Málaga, España.
    </Paragraph>
    <Paragraph>
      Este aviso legal regula el acceso y uso de la página web taxi-torre-del-mar.com. El uso de esta página web implica la aceptación de las condiciones de uso.
    </Paragraph>
    <Paragraph>
      El responsable del sitio web no se hace responsable de los posibles daños derivados del uso de esta página web o de la imposibilidad de acceder a la misma.
    </Paragraph>
  </Section>
);

export default LegalNotice;
