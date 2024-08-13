import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
//import { relative } from "path";
//import { title } from 'process';
//import { title } from 'process';

/*
Limpieza dental (profilaxis)
Resinas
Endodoncias
Blanqueamiento
Extracciones
Cirugías 
Ortodoncia 
Periodoncia
*/

const dataServicios = [
  {
    title: "Limpieza dental (profilaxis)",
    description:
      "La limpieza dental es un procedimiento que se realiza para eliminar la placa bacteriana y el sarro que se acumula en los dientes. La placa bacteriana es una capa pegajosa e incolora que se forma en los dientes y las encías. Si no se elimina, puede endurecerse y convertirse en sarro, que es una sustancia amarillenta que se adhiere a los dientes y las encías. La limpieza dental se realiza para prevenir la caries dental, la enfermedad de las encías y otros problemas dentales.",
    imageUrl: "/limpieza.jpeg",
  },
  {
    title: "Resinas",
    description:
      "Las resinas dentales son materiales compuestos que se utilizan para restaurar los dientes dañados por caries o lesiones. Las resinas dentales se pueden utilizar para rellenar cavidades, reparar dientes rotos o astillados, restaurar dientes desgastados o decolorados, y mejorar la apariencia de los dientes.",
    imageUrl: "/resinas.jpeg",
  },
  {
    title: "Endodoncias",
    description:
      "La endodoncia es un procedimiento dental que se realiza para tratar las infecciones de la pulpa dental, que es el tejido blando que se encuentra en el interior de los dientes. Durante una endodoncia, el dentista elimina la pulpa infectada, limpia y desinfecta el conducto radicular, y sella el diente para prevenir futuras infecciones.",
      imageUrl: "/case250423.jpg"
  },
  {
    title: "Blanqueamiento",
    description:
      "El blanqueamiento dental es un procedimiento que se realiza para aclarar el color de los dientes y eliminar las manchas y decoloraciones. El blanqueamiento dental se puede realizar en el consultorio del dentista o en casa con un kit de blanqueamiento dental.",
    imageUrl: "/blanqueamiento.jpeg",
  },
  {
    title: "Extracciones",
    description:
      "La extracción dental es un procedimiento que se realiza para eliminar un diente que está dañado, infectado o no se puede salvar. Las extracciones dentales se pueden realizar por varias razones, como la caries dental, la enfermedad de las encías, los dientes impactados o la ortodoncia.",
    imageUrl: "/extracciones.jpg",
  },
  {
    title: "Cirugías",
    description:
      "Las cirugías dentales son procedimientos que se realizan para tratar problemas dentales y maxilofaciales. Algunas de las cirugías dentales más comunes incluyen la extracción de dientes impactados, la colocación de implantes dentales, la cirugía de las encías y la cirugía ortognática.",
    imageUrl: "/cirugias.png",
  },
  {
    title: "Ortodoncia",
    description:
      "La ortodoncia es una especialidad de la odontología que se encarga de prevenir, diagnosticar y corregir las malposiciones dentales y las alteraciones de la mordida. La ortodoncia se realiza con aparatos dentales como los brackets, los alineadores transparentes y los retenedores.",
    imageUrl: "/ortodoncia.jpeg",
  },
  {
    title: "Periodoncia",
    description:
      "La periodoncia es una especialidad de la odontología que se encarga de prevenir, diagnosticar y tratar las enfermedades de las encías y los tejidos de soporte de los dientes. Algunos de los tratamientos periodontales más comunes incluyen la limpieza dental profunda, la cirugía de las encías y el injerto de tejido blandos.",
      imageUrl: "/periodoncia.jpg"
  },
];

function Servicios() {
  return (
    <div style={{ marginTop: "20px", height:'60vh', overflow:'auto', paddingBottom:'30px' }}>
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
          Te ofrecemos los siguientes servicios:
        </Typography>
      </Box>
      <div
        style={{
          width: "75vw",
          marginTop: "20px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {dataServicios.map((servicio, index) => (
          <Accordion key={servicio.title}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <span style={{ fontWeight: "bolder" }}>{servicio.title}</span>
            </AccordionSummary>
            <AccordionDetails style={{position:'relative'}}>
            {servicio.imageUrl && (
                  <Image
                  
                    src={servicio.imageUrl}
                    alt={servicio.title}
                    width={300}
                    height={300}
                    style={{
                      position:'relative', 
                      margin:'10px',
                      borderRadius:'10px',
                      boxShadow:'0 0 10px rgba(0,0,0,0.5)',
                      float:index%2===0?'right':'left', 
                      maxWidth:'50%', 
                      objectFit:'contain'}}
                  />
                )}
                <p style={{textAlign:'justify',position:'relative'}}>{servicio.description}</p>
                
              
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default Servicios;
