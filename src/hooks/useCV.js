import { useContext } from "react"
import { CvContext } from "../context/CvContext"

export function useCV () {

    const {download,SetDownloaded} = useContext(CvContext)

const descargarCv = (e, code) => {
  SetDownloaded((prevState) => ({
    ...prevState,
    code: code,
  }));

  let anchor = document.createElement('a');

  if (code === 'en') {
    anchor.href = '../cv/Mateo-Lozano-Guardia-CV-EN.docx';
    anchor.download = 'Mateo-Lozano-Guardia-CV-EN.docx';
     SetDownloaded((prevState) => ({
      ...prevState,
      message: 'CV Downloaded ✔️',
    }));
  } else if (code === 'esp') {
    anchor.href = '../cv/Mateo-cv.docx';
    anchor.download = 'Mateo-cv.docx';
        SetDownloaded((prevState) => ({
      ...prevState,
      message: 'CV Descargado ✔️',
    }));
  } else {
    return; // código inválido
  }

  document.body.appendChild(anchor);  // Necesario para que funcione en algunos navegadores
  anchor.click();                     // Simula el clic para descargar
  document.body.removeChild(anchor); // Limpia el DOM





};


    return {descargarCv,download}
}