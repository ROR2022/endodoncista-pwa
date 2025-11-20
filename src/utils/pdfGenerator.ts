import jsPDF from "jspdf";
import { toPng } from "html-to-image";
import { DatosProfesionales } from "@/api/dataProfesional";

/**
 * Genera un PDF de la tarjeta de presentación con enlaces clickeables
 * @param cardRef - Referencia al elemento HTML de la tarjeta
 * @param datos - Datos profesionales de la doctora
 */
export const generateBusinessCardPDF = async (
  cardRef: React.RefObject<HTMLDivElement>,
  datos: DatosProfesionales
): Promise<void> => {
  try {
    if (!cardRef.current) {
      throw new Error("No se pudo obtener la referencia de la tarjeta");
    }

    // 1. Generar imagen PNG de la tarjeta
    const imageDataUrl = await toPng(cardRef.current, {
      cacheBust: true,
      pixelRatio: 2,
      width: 800,
      height: 600,
    });

    // 2. Crear documento PDF (A4)
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // Dimensiones A4: 210 x 297 mm
    const pageWidth = 210;
    const pageHeight = 297;

    // 3. Configurar metadata del PDF
    doc.setProperties({
      title: `Tarjeta de Presentación - ${datos.nombre}`,
      subject: "Tarjeta de Presentación Digital",
      author: datos.nombreConsultorio,
      keywords: "endodoncia, dentista, tarjeta de presentación, Cuernavaca",
      creator: "Dental Las Palmas App",
    });

    // 4. Agregar título con diseño mejorado
    doc.setFillColor(25, 165, 162); // Verde turquesa
    doc.rect(0, 0, pageWidth, 30, "F");
    
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    doc.text(datos.nombreConsultorio.toUpperCase(), pageWidth / 2, 20, { align: "center" });

    // 5. Agregar imagen de la tarjeta (tamaño reducido para mejor espaciado)
    const imgWidth = 140; // mm (reducido de 160)
    const imgHeight = 105; // mm (mantiene proporción 800x600)
    const imgX = (pageWidth - imgWidth) / 2;
    const imgY = 38;

    doc.addImage(imageDataUrl, "PNG", imgX, imgY, imgWidth, imgHeight);

    // 6. Sección de Enlaces Rápidos
    let currentY = imgY + imgHeight + 10;

    // Línea separadora
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(20, currentY, pageWidth - 20, currentY);
    currentY += 8;

    doc.setFontSize(15);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(89, 0, 44); // Vino
    doc.text("ENLACES RAPIDOS", pageWidth / 2, currentY, { align: "center" });

    currentY += 8;

    // Función helper para crear botones de enlaces
    const createLinkButton = (
      icon: string,
      label: string,
      value: string,
      url: string,
      color: number[]
    ) => {
      const boxX = 25;
      const boxWidth = pageWidth - 50;
      const boxHeight = 8; // Reducido de 10 a 8

      // Fondo del botón
      doc.setFillColor(color[0], color[1], color[2]);
      doc.roundedRect(boxX, currentY - 6, boxWidth, boxHeight, 2, 2, "F");

      // Texto del icono
      doc.setFontSize(10); // Reducido de 11 a 10
      doc.setFont("helvetica", "bold");
      doc.setTextColor(255, 255, 255);
      doc.text(icon, boxX + 3, currentY - 1);

      // Etiqueta
      doc.setFont("helvetica", "bold");
      doc.text(label, boxX + 15, currentY - 1);

      // Valor con enlace
      doc.setFont("helvetica", "normal");
      const labelWidth = doc.getTextWidth(label);
      doc.textWithLink(value, boxX + 15 + labelWidth + 2, currentY - 1, {
        url: url,
      });

      currentY += boxHeight + 1.5; // Menos espacio entre botones
    };

    // Enlaces con diseño de botones
    createLinkButton(
      "f",
      "Facebook:",
      "Dental Las Palmas",
      datos.redesSociales.facebook,
      [24, 119, 242] // Azul Facebook
    );

    createLinkButton(
      "I",
      "Instagram:",
      "@dentallaspalmas",
      datos.redesSociales.instagram,
      [228, 64, 95] // Rosa Instagram
    );

    createLinkButton(
      "M",
      "Ubicacion:",
      "Ver en Google Maps",
      datos.redesSociales.maps,
      [66, 133, 244] // Azul Google
    );

    const whatsappUrl = `https://wa.me/${datos.whatsapp}?text=${encodeURIComponent(
      "Hola! Me gustaría agendar una cita."
    )}`;
    createLinkButton(
      "W",
      "WhatsApp:",
      datos.telefono,
      whatsappUrl,
      [37, 211, 102] // Verde WhatsApp
    );

    const emailUrl = `mailto:${datos.email}`;
    createLinkButton(
      "@",
      "Email:",
      datos.email,
      emailUrl,
      [234, 67, 53] // Rojo Gmail
    );

    const telUrl = `tel:${datos.telefono}`;
    createLinkButton(
      "T",
      "Telefono:",
      datos.telefono,
      telUrl,
      [96, 125, 139] // Gris azulado
    );

    currentY += 6; // Más espacio antes de la siguiente sección

    // 7. Información Adicional
    // Línea separadora
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(20, currentY, pageWidth - 20, currentY);
    currentY += 7;

    doc.setTextColor(89, 0, 44); // Vino
    doc.setFontSize(15);
    doc.setFont("helvetica", "bold");
    doc.text("INFORMACION ADICIONAL", pageWidth / 2, currentY, {
      align: "center",
    });

    currentY += 8;

    const infoStartX = 30;
    doc.setFontSize(9); // Reducido de 10 a 9
    doc.setTextColor(0, 0, 0);

    // Función helper para información
    const addInfoRow = (label: string, value: string) => {
      doc.setFont("helvetica", "bold");
      doc.text(label, infoStartX, currentY);
      doc.setFont("helvetica", "normal");
      doc.text(value, infoStartX + 45, currentY);
      currentY += 5.5; // Reducido de 6 a 5.5
    };

    // Dirección
    addInfoRow("Direccion:", datos.direccion.completa);

    // Horario
    addInfoRow("Horario:", datos.horario.completo);

    // Cédula
    if (datos.formacionAcademica.cedula) {
      addInfoRow("Cedula Prof.:", datos.formacionAcademica.cedula);
    }

    // Universidad
    addInfoRow("Universidad:", datos.formacionAcademica.universidad);

    // Años de experiencia
    addInfoRow(
      "Experiencia:",
      `${datos.formacionAcademica.aniosExperiencia} años`
    );

    // 8. Footer
    doc.setFontSize(9);
    doc.setTextColor(128, 128, 128);
    doc.setFont("helvetica", "italic");
    const footerText = `"${datos.slogan}" - Generado el ${new Date().toLocaleDateString(
      "es-MX"
    )}`;
    doc.text(footerText, pageWidth / 2, pageHeight - 10, { align: "center" });

    // 9. Guardar PDF
    doc.save("TarjetaDraBereniceOcampo.pdf");
  } catch (error) {
    console.error("Error al generar el PDF:", error);
    throw new Error(
      "No se pudo generar el PDF. Por favor, intenta de nuevo."
    );
  }
};
