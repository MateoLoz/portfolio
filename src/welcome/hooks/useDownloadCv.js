import { useState } from "react";

export default function useDownloadCv() {
  const [cvButton, setCvButton] = useState({
    message: "Download CV",
    value: false,
  });

  const handleCv = (e) => {
    e.preventDefault();
    setCvButton({ value: true, message: "Downloading..." });

    try {
      const link = document.createElement("a");
      link.href = "/cv/Mateo_Lozano_Guardia_CV_v2.pdf"; // Ruta absoluta desde /public
      link.download = "Mateo_Lozano_Guardia_CV_v2.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        setCvButton({ value: false, message: "Downloaded!" });
      }, 1200);
    } catch (err) {
      console.error(err);
      setCvButton({ value: false, message: "Download failed!" });
    }
  };

  return { handleCv, cvButton };
}
