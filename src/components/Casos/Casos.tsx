import React from "react";
import CaseCard from "./CaseCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Publicaciones from "./Publicaciones";

const dataCases = [
  {
    title: "",
    description: `Buenos días! Les muestro un caso de la importancia de las radiografías en muchas áreas, en este caso en endodoncia en la cual, no solo basta una radiografía panorámica o periapical.
                    En este caso se observaba en su panorámica y en la primer periapical que tomé que el apice de su raíz terminaba antes, e inicie, volví a tomar radiografías y fue cuando me di cuenta que su longitud era más larga y bueno confirmando con el localizador.😉😊`,
    image: "/case250423.jpg",
  },
  {
    description: `Pacientito que asistió ya que se cayó de la moto y se fracturó el diente frontal, se le realizó su endodoncia, su poste y se le colocó una Corona libre de metal 😉`,
    image: "/case091122.jpg",
  },
  {
    
    description: `Por qué también a veces son necesarias las endodoncias en los peques. Endodoncia de la primer molar inferior y es que a veces los papis no se percatan de la erupción (salida) de estás primeras molares, ya que no les dolió al salir o por qué creen que se les tiene que caer algún diente para que salgan, y en las primeras molares no es así. Es por eso que siempre se recomienda llevar a los peques al dentista cada 6 meses para su limpieza respectiva revisión. 🤗👍😊`,
    image: "/case110422.jpg",
  },
];

const Casos = () => {
  return (
    <div style={{height:'70vh', overflowY:'auto', paddingBottom:'30px', overflowX:'hidden'}}>
      <Publicaciones />
      <Box
        sx={{
          marginTop: "20px",
          textAlign: "center",
          bgcolor: "warning.main",
          border: "1px solid",
          borderColor: "info.main",
          color: "warning.contrastText",
          p: 2,
          borderRadius: 1,
        }}
      >
        <Typography variant="h6">
          Conoce algunos de los casos clinicos que hemos atendido:
        </Typography>
      </Box>
      <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100vw',
        gap: '20px',
        marginTop: '5vh'
      }}
      >
        {dataCases.map((dataCard, index) => (
          <CaseCard key={dataCard.image} dataCard={dataCard} />
        ))}
      </div>
      
    </div>
  );
};

export default Casos;


/*
<iframe 
src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fdental.laspalmas.96%2Fvideos%2F439642408996613%2F&show_text=true&width=267&t=0" 
width="267" 
height="591" 
style="border:none;overflow:hidden" 
scrolling="no" 
frameborder="0" 
allowfullscreen="true" 
allow="autoplay; 
clipboard-write; 
encrypted-media; 
picture-in-picture; 
web-share" allowFullScreen="true">
</iframe>
*/