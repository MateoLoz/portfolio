import { useState } from "react";

export default function useDownloadCv() {
  const [cvButton, setCvButton] = useState({
    message: "Download CV",
    value: false,
  });

  const handleCv = (e) => {
    e.preventDefault();
    setCvButton((prev) => ({
      ...prev,
      value: true,
      message: "Downloading...",
    }));

    try {
      const link = document.createElement("a");
      link.href = "/cv/Mateo-Agustin-Lozano-Guardia-CV-EN.docx"; // archivo en public/cv/
      link.download = "Mateo-Lozano-Guardia-CV-EN.docx";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        setCvButton((prev) => ({
          ...prev,
          value: false,
          message: "Downloaded!",
        }));
      }, 1200);
    } catch (err) {
      console.error(err);
      setCvButton((prev) => ({
        ...prev,
        value: false,
        message: "Download failed!",
      }));
    }
  };

  return { handleCv, cvButton };
}
