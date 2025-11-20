/**
 * DATOS PROFESIONALES DE LA DRA. BERENICE OCAMPO
 * 
 * Este archivo contiene toda la información que aparecerá en la tarjeta de presentación
 * Puedes modificar estos datos fácilmente sin tocar el código de los componentes
 */

export interface DatosProfesionales {
  nombre: string;
  titulo: string;
  especialidad: string;
  foto: string; // Ruta de la imagen en /public
  telefono: string;
  whatsapp: string;
  email: string;
  direccion: {
    calle: string;
    colonia: string;
    ciudad: string;
    estado: string;
    codigoPostal: string;
    completa: string; // Dirección completa en una línea
  };
  horario: {
    dias: string;
    horas: string;
    completo: string; // Horario completo en una línea
  };
  redesSociales: {
    facebook: string;
    instagram: string;
    maps: string;
  };
  formacionAcademica: {
    universidad: string;
    cedula: string;
    aniosExperiencia: number;
    certificaciones: string[];
  };
  slogan: string;
  descripcion: string;
  nombreConsultorio: string;
}

const getTotalYears = (): number => {
  const startYear = 2011; // Año en que comenzó la experiencia profesional
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

// DATOS TEMPORALES - REEMPLAZA CON LOS DATOS REALES
export const datosDoctora: DatosProfesionales = {
  // Datos Personales
  nombre: "Dra. Berenice Ocampo",
  titulo: "Doctora en Odontología",
  especialidad: "Endodoncista Certificada",
  foto: "/bereLogo01.jpg", // CAMBIAR por la foto real de la Dra. si existe
  
  // Contacto
  telefono: "7331069098",
  whatsapp: "7331069098",
  email: "smileocampo09@gmail.com", // CAMBIAR por el email real
  
  // Dirección
  direccion: {
    calle: "Vicente Guerrero #478", // CAMBIAR por la dirección real
    colonia: "Col. Lomas de la Selva",
    ciudad: "Cuernavaca",
    estado: "Morelos",
    codigoPostal: "62260",
    completa: "Vicente Guerrero #478 Col. Lomas de la Selva"
  },
  
  // Horario
  horario: {
    dias: "Solo por citas",
    horas: "9:00 AM - 6:00 PM",
    completo: "Solo por citas" // CAMBIAR si es necesario
  },
  
  // Redes Sociales
  redesSociales: {
    facebook: "https://www.facebook.com/dental.laspalmas.96",
    instagram: "https://www.instagram.com/dentallaspalmas/",
    maps: "https://maps.app.goo.gl/B79GTLEvKDKfL3B87"
  },
  
  // Formación Académica
  formacionAcademica: {
    universidad: "Benemerita Universidad Autónoma de Puebla", // CAMBIAR por la universidad real
    cedula: "8226908", // CAMBIAR por la cédula real o dejar vacío ""
    aniosExperiencia: getTotalYears(), // CAMBIAR por los años reales
    certificaciones: [
      "Especialidad en Endodoncia",
      "Certificación en Tratamientos de Conducto",
      "Diplomado en Odontología Avanzada"
    ] // CAMBIAR por las certificaciones reales
  },
  
  // Slogan y Descripción
  slogan: "Diseñando Sonrisas",
  descripcion: "Especialista en endodoncia con amplia experiencia en tratamientos de conducto, salvando dientes y devolviendo sonrisas. Utilizamos tecnología de punta para garantizar los mejores resultados en cada procedimiento.",
  
  // Nombre del consultorio
  nombreConsultorio: "Dental Las Palmas"
};

// Nombre del consultorio
export const nombreConsultorio = "Dental Las Palmas";
