"use client";
import React, { useRef } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  Button,
  Divider,
  Chip,
  Stack,
  Container,
  Grid,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ShareIcon from "@mui/icons-material/Share";
import DownloadIcon from "@mui/icons-material/Download";
import ImageIcon from "@mui/icons-material/Image";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { toPng } from "html-to-image";
import { datosDoctora } from "@/api/dataProfesional";
import DownloadableCard from "./DownloadableCard";
import { generateBusinessCardPDF } from "@/utils/pdfGenerator";

const BusinessCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  
  const handleWhatsApp = () => {
    const whatsappLink = `https://wa.me/${datosDoctora.whatsapp}?text=${encodeURIComponent(
      "Hola! Me gustaría agendar una cita."
    )}`;
    window.open(whatsappLink, "_blank");
  };

  const handlePhone = () => {
    window.location.href = `tel:${datosDoctora.telefono}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${datosDoctora.email}`;
  };

  const handleMaps = () => {
    window.open(datosDoctora.redesSociales.maps, "_blank");
  };

  const handleFacebook = () => {
    window.open(datosDoctora.redesSociales.facebook, "_blank");
  };

  const handleInstagram = () => {
    window.open(datosDoctora.redesSociales.instagram, "_blank");
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: datosDoctora.nombre,
          text: `${datosDoctora.especialidad} - ${datosDoctora.slogan}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback: copiar al portapapeles
      navigator.clipboard.writeText(window.location.href);
      alert("Enlace copiado al portapapeles");
    }
  };

  const handleDownloadVCard = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${datosDoctora.nombre}
TITLE:${datosDoctora.especialidad}
TEL;TYPE=CELL:${datosDoctora.telefono}
EMAIL:${datosDoctora.email}
ADR:;;${datosDoctora.direccion.completa}
URL:${datosDoctora.redesSociales.facebook}
NOTE:${datosDoctora.descripcion}
END:VCARD`;

    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "DraBereniceOcampo.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const handleDownloadCard = async () => {
    if (cardRef.current === null) {
      return;
    }

    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2, // Alta resolución
        width: 800,
        height: 600,
      });

      const link = document.createElement("a");
      link.download = "TarjetaDraBereniceOcampo.png";
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Error al generar la imagen:", error);
      alert("Hubo un error al descargar la tarjeta. Por favor, intenta de nuevo.");
    }
  };

  const handleDownloadPDF = async () => {
    try {
      await generateBusinessCardPDF(cardRef, datosDoctora);
    } catch (error) {
      console.error("Error al generar el PDF:", error);
      alert("Hubo un error al descargar el PDF. Por favor, intenta de nuevo.");
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Card
        elevation={8}
        sx={{
          borderRadius: 4,
          overflow: "visible",
          position: "relative",
          background: "linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)",
        }}
      >
        {/* Header con foto y nombre */}
        <Box
          sx={{
            bgcolor: "success.main",
            color: "white",
            py: 4,
            px: 3,
            textAlign: "center",
            position: "relative",
          }}
        >
          <Avatar
            src={datosDoctora.foto}
            alt={datosDoctora.nombre}
            sx={{
              width: 150,
              height: 150,
              margin: "0 auto",
              border: "5px solid white",
              boxShadow: 3,
              mb: 2,
            }}
          />
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {datosDoctora.nombre}
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            {datosDoctora.especialidad}
          </Typography>
          <Chip
            label={datosDoctora.slogan}
            sx={{
              mt: 2,
              bgcolor: "secondary.secondary",
              color: "white",
              fontWeight: "bold",
              fontSize: "1rem",
              py: 2.5,
            }}
          />
        </Box>

        <CardContent sx={{ px: 4, py: 3 }}>
          {/* Descripción */}
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="center"
            sx={{ mb: 3, fontStyle: "italic" }}
          >
            {datosDoctora.descripcion}
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Información de Contacto */}
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            📞 Información de Contacto
          </Typography>
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                  "&:hover": { color: "primary.main" },
                }}
                onClick={handlePhone}
              >
                <PhoneIcon color="primary" />
                <Typography>{datosDoctora.telefono}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer",
                  "&:hover": { color: "primary.main" },
                }}
                onClick={handleEmail}
              >
                <EmailIcon color="primary" />
                <Typography sx={{ wordBreak: "break-all" }}>
                  {datosDoctora.email}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1,
                  cursor: "pointer",
                  "&:hover": { color: "primary.main" },
                }}
                onClick={handleMaps}
              >
                <LocationOnIcon color="primary" />
                <Typography>{datosDoctora.direccion.completa}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <AccessTimeIcon color="primary" />
                <Typography>{datosDoctora.horario.completo}</Typography>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* Formación Académica */}
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            🎓 Formación Académica
          </Typography>
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <SchoolIcon color="secondary" />
              <Typography>{datosDoctora.formacionAcademica.universidad}</Typography>
            </Box>
            {datosDoctora.formacionAcademica.cedula && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <WorkspacePremiumIcon color="secondary" />
                <Typography>
                  Cédula Profesional: {datosDoctora.formacionAcademica.cedula}
                </Typography>
              </Box>
            )}
            <Typography color="text.secondary" sx={{ ml: 4 }}>
              {datosDoctora.formacionAcademica.aniosExperiencia} años de
              experiencia
            </Typography>
            {datosDoctora.formacionAcademica.certificaciones.length > 0 && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" fontWeight="bold" sx={{ mb: 1 }}>
                  Certificaciones:
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {datosDoctora.formacionAcademica.certificaciones.map(
                    (cert, index) => (
                      <Chip
                        key={index}
                        label={cert}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    )
                  )}
                </Stack>
              </Box>
            )}
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Redes Sociales */}
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            🌐 Redes Sociales
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
            <IconButton
              color="primary"
              onClick={handleFacebook}
              sx={{
                bgcolor: "#1877f2",
                color: "white",
                "&:hover": { bgcolor: "#145dbf" },
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="secondary"
              onClick={handleInstagram}
              sx={{
                bgcolor: "#E4405F",
                color: "white",
                "&:hover": { bgcolor: "#d62954" },
              }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              onClick={handleMaps}
              sx={{
                bgcolor: "#4285F4",
                color: "white",
                "&:hover": { bgcolor: "#3367d6" },
              }}
            >
              <LocationOnIcon />
            </IconButton>
          </Stack>

          {/* Botón de WhatsApp destacado */}
          <Button
            fullWidth
            variant="contained"
            size="large"
            startIcon={<WhatsAppIcon />}
            onClick={handleWhatsApp}
            sx={{
              bgcolor: "#25D366",
              color: "white",
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: "bold",
              "&:hover": { bgcolor: "#1ebd59" },
              mb: 2,
            }}
          >
            Contactar por WhatsApp
          </Button>

          {/* Botones de Compartir y Descargar */}
          <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<ShareIcon />}
              onClick={handleShare}
            >
              Compartir
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<DownloadIcon />}
              onClick={handleDownloadVCard}
            >
              Guardar Contacto
            </Button>
          </Stack>

          <Divider sx={{ my: 4 }} />

          {/* Sección de Descarga de Tarjeta Digital */}
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              📥 Descarga mi Tarjeta Digital
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Guarda mi tarjeta de presentación como imagen para compartir en
              redes sociales o tenerla siempre a mano.
            </Typography>

            {/* Preview de la tarjeta */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 3,
                width: "100%",
                maxWidth: "600px",
                maxHeight: { xs: 400, sm: 500 },
                margin: "0 auto 24px auto",
                overflow: "auto",
                borderRadius: 2,
                backgroundColor: "#f5f5f5",
                p: 2,
                // Estilos personalizados para el scrollbar
                "&::-webkit-scrollbar": {
                  width: "8px",
                  height: "8px",
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "#e0e0e0",
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "primary.main",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                },
              }}
            >
              <Box
                sx={{
                  transform: { xs: "scale(0.55)", sm: "scale(0.7)" },
                  transformOrigin: "center center",
                  borderRadius: 2,
                  boxShadow: 3,
                  overflow: "hidden",
                  minWidth: "800px",
                  minHeight: "600px",
                }}
              >
                <DownloadableCard cardRef={previewRef} />
              </Box>
            </Box>

            {/* Botón de descarga destacado */}
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Elige tu formato:
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                startIcon={<ImageIcon />}
                onClick={handleDownloadCard}
                sx={{
                  bgcolor: "secondary.secondary",
                  color: "white",
                  py: 1.5,
                  px: 4,
                  fontSize: "1rem",
                  fontWeight: "bold",
                  "&:hover": { bgcolor: "secondary.dark" },
                  flex: 1,
                }}
              >
                Descargar PNG
              </Button>
              <Button
                variant="contained"
                size="large"
                startIcon={<PictureAsPdfIcon />}
                onClick={handleDownloadPDF}
                sx={{
                  bgcolor: "#d32f2f",
                  color: "white",
                  py: 1.5,
                  px: 4,
                  fontSize: "1rem",
                  fontWeight: "bold",
                  "&:hover": { bgcolor: "#b71c1c" },
                  flex: 1,
                }}
              >
                Descargar PDF
              </Button>
            </Stack>
            <Typography
              variant="caption"
              display="block"
              sx={{ mt: 2, color: "text.secondary" }}
            >
              PNG: Imagen de alta resolución (800x600px) | PDF: Documento con
              enlaces clickeables
            </Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Tarjeta oculta para generar la imagen */}
      <Box sx={{ position: "absolute", left: "-9999px", top: 0 }}>
        <DownloadableCard cardRef={cardRef} />
      </Box>
    </Container>
  );
};

export default BusinessCard;
