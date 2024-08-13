"use client"
import { Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function WhatsAppButton() {
  const phoneNumber = '+527777937484'; 

  const handleClick = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <Button
      variant="contained"
      color="success"
      startIcon={<WhatsAppIcon />}
      onClick={handleClick}
      sx={{ textTransform: 'none', position: 'fixed', bottom: 66, right: 16 }}
    >
      Contact Us on WhatsApp
    </Button>
  );
}
