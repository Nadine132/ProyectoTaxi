import React from 'react';
import { Fab } from "@mui/material";
import whatsappIcon from '../Images/WhatsApp_icon_w_479.webp'; 

export default function Whatsapp() {
  return (
    <a
      style={{ textDecoration: "none", color: "white" }}
      href="https://api.whatsapp.com/send?phone=+34649830831&text=Hola, quiero reservar un viaje!!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar mensaje por WhatsApp"
    >
      <Fab
        size="large"
        sx={{
          position: "fixed",
          bottom: "50px",
          right: "35px",
          boxShadow: "none",
          backgroundColor: "#25D366",
          "&:hover": {
            backgroundColor: "#25D366",
            opacity: 0.85,
          },
        }}
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          width="55%"
        />
      </Fab>
    </a>
  );
}
