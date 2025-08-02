import { useState } from "react";

export default function useDownloadCv() {
  const [cvButton, setCvButton] = useState({
    message: "Download CV",
    value: false,
  });

  const handleCv = (e) => {
    e.preventDefault();
    setCvButton((prev) => ({ ...prev, value: true, message: "Downloading.." }));

    try {
      setTimeout(() => {
        setCvButton((prev) => ({
          ...prev,
          value: false,
          message: "Downloaded!",
        }));
      }, [1200]);
    } catch (err) {
      setCvButton((prev) => ({ ...prev, value: false, message: err.message }));
    }
  };

  return { handleCv, cvButton };
}
