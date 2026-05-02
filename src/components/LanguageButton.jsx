import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import indonesia from "../assets/flags/indonesia.png";
import inggris from "../assets/flags/inggris.png";
import spanyol from "../assets/flags/spanyol.png";
import { button } from "framer-motion/client";

export default function LanguageButton() {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", icon: inggris },
    { code: "id", icon: indonesia },
    { code: "sp", icon: spanyol },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentLanguage = i18n.language.split("-")[0]; // Mendapatkan kode bahasa utama (misalnya "en" dari "en-US")
    const index = languages.findIndex((lang) => lang.code === currentLanguage);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  }, [i18n.language, languages]);

  const handleToggleLanguage = () => {
    const nextIndex = (currentIndex + 1) % languages.length;
    const nextLanguage = languages[nextIndex].code;
    setCurrentIndex(nextIndex);
    i18n.changeLanguage(languages[nextIndex].code);
  };

  return (
    <button
      onClick={handleToggleLanguage}
      className="h-8 w-8 hover:scale-110 transition duration-200 flex justify-center items-center"
    >
      <img
        src={languages[currentIndex].icon}
        alt={languages[currentIndex].code}
        className="w-full h-full object-cover"
      />
    </button>
  );
}
