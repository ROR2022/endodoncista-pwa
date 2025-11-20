import React from "react";
import { Box, Typography } from "@mui/material";
import { datosDoctora } from "@/api/dataProfesional";

interface DownloadableCardProps {
  cardRef: React.RefObject<HTMLDivElement>;
}

const DownloadableCard: React.FC<DownloadableCardProps> = ({ cardRef }) => {
  return (
    <Box
      ref={cardRef}
      sx={{
        width: "800px",
        height: "600px",
        background: "linear-gradient(135deg, #19a5a2 0%, #14807e 100%)",
        position: "relative",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Header con logo/foto */}
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.95)",
          padding: "30px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          borderBottom: "5px solid #59002c",
        }}
      >
        <Box
          component="img"
          src={datosDoctora.foto}
          alt={datosDoctora.nombre}
          sx={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "4px solid #59002c",
            objectFit: "cover",
          }}
        />
        <Box>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "#59002c",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            DENTAL LAS PALMAS
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#666",
              margin: 0,
              marginTop: "5px",
            }}
          >
            {datosDoctora.nombreConsultorio}
          </Typography>
        </Box>
      </Box>

      {/* Contenido principal */}
      <Box
        sx={{
          padding: "30px 50px 35px 50px",
          color: "white",
        }}
      >
        {/* Nombre y especialidad */}
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "6px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            lineHeight: 1.1,
          }}
        >
          {datosDoctora.nombre}
        </Typography>
        <Typography
          sx={{
            fontSize: "22px",
            marginBottom: "20px",
            opacity: 0.95,
            fontStyle: "italic",
          }}
        >
          {datosDoctora.especialidad}
        </Typography>

        {/* Línea divisora */}
        <Box
          sx={{
            width: "100%",
            height: "2px",
            background: "rgba(255,255,255,0.5)",
            marginBottom: "20px",
          }}
        />

        {/* Información de contacto */}
        <Box sx={{ fontSize: "20px", lineHeight: 1.8 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "8px" }}>
            <Typography sx={{ fontSize: "24px" }}>📞</Typography>
            <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
              {datosDoctora.telefono}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "8px" }}>
            <Typography sx={{ fontSize: "24px" }}>📧</Typography>
            <Typography sx={{ fontSize: "18px", fontWeight: "500" }}>
              {datosDoctora.email}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-start", gap: "15px", marginBottom: "8px" }}>
            <Typography sx={{ fontSize: "24px" }}>📍</Typography>
            <Box>
              <Typography sx={{ fontSize: "18px", fontWeight: "500" }}>
                {datosDoctora.direccion.calle}
              </Typography>
              <Typography sx={{ fontSize: "16px", opacity: 0.9 }}>
                {datosDoctora.direccion.colonia}, {datosDoctora.direccion.ciudad}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <Typography sx={{ fontSize: "24px" }}>🕐</Typography>
            <Typography sx={{ fontSize: "18px", fontWeight: "500" }}>
              {datosDoctora.horario.completo}
            </Typography>
          </Box>
        </Box>

        {/* Línea divisora */}
        <Box
          sx={{
            width: "100%",
            height: "2px",
            background: "rgba(255,255,255,0.5)",
            marginTop: "20px",
            marginBottom: "15px",
          }}
        />

        {/* Slogan */}
        <Typography
          sx={{
            fontSize: "26px",
            fontWeight: "bold",
            textAlign: "center",
            fontStyle: "italic",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            lineHeight: 1.2,
          }}
        >
          &quot;{datosDoctora.slogan}&quot;
        </Typography>
      </Box>
    </Box>
  );
};

export default DownloadableCard;
