import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import sertifikat_1 from "../assets/Certificates/sertifikat_magang.jpeg";
import sertifikat_2 from "../assets/Certificates/sertifikat_gtp.jpeg";
import sertifikat_3 from "../assets/Certificates/sertifikat_sharing_cybersecurity.jpeg";
import sertifikat_4 from "../assets/Certificates/sertifikat_android_study_jams.jpeg";
import sertifikat_5 from "../assets/Certificates/sertifikat_kompetensi.jpeg";

export default function MyCertificates() {
  const { t } = useTranslation("certificates");
  const [currentIndex, setCurrentIndex] = useState(0);

  const translateCertificates = t("mycertificates", { returnObjects: true });
  const certificatesAssets = [
    { id: 1, img: sertifikat_1 },
    { id: 2, img: sertifikat_2 },
    { id: 3, img: sertifikat_3 },
    { id: 4, img: sertifikat_4 },
    { id: 5, img: sertifikat_5 },
  ];

  const certificates = translateCertificates.map((item, index) => ({
    ...item,
    ...certificatesAssets[index]
  }));

  const isSliderRequired = certificates.length > 4;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1,
    );
  };

  return (
    <section
      id="certificates"
      className="bg-[#0C1826] px-8 md:px-14 py-6 md:py-14 border-t border-white md:border-gray-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h3 className="gabarito-medium text-4xl text-center text-yellow-500 mb-12">
          {t("title")}
        </h3>

        {/* --- TAMPILAN DESKTOP --- */}
        <div className="hidden md:block">
          <div className="hidden md:grid grid-cols-2 gap-10">
            {certificates.map((cert) => (
              <CertificateCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>

        {/* --- TAMPILAN MOBILE (SLIDER) --- */}
        <div className="md:hidden flex flex-col items-center">
          <div className="w-full">
            <CertificateCard cert={certificates[currentIndex]} />
          </div>

          {/* Navigasi Mobile */}
          <div className="mt-8 flex flex-col items-center space-y-5 w-full">
            <div className="flex items-center justify-between w-full max-w-[220px]">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-[#222F3E] text-white active:bg-yellow-500 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="text-yellow-500 font-bold text-xl">
                {currentIndex + 1}{" "}
                <span className="text-gray-500 text-sm">
                  / {certificates.length}
                </span>
              </div>

              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-[#222F3E] text-white active:bg-yellow-500 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Dots Indikator */}
            <div className="flex space-x-2">
              {certificates.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-8 bg-yellow-500"
                      : "w-2 bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Komponen Card Kecil
function CertificateCard({ cert }) {
  const { t } = useTranslation("certificates");
  const [showDesc, setShowDesc] = useState(false);
  return (
    <div className="flex flex-col space-y-4 group">
      <h3 className="text-white text-start gabarito-medium text-xl md:text-2xl min-h-[3.5rem] md:min-h-0">
        • {cert.title}
      </h3>
      <div
        onClick={() => setShowDesc(!showDesc)}
        className="relative overflow-hidden rounded-xl border border-gray-700 shadow-lg"
      >
        <img
          src={cert.img}
          alt={cert.title}
          className="w-full object-cover h-64 md:h-72 transition-all duration-500 group-hover:scale-110"
        />
        <AnimatePresence>
          {showDesc && (
            <motion.div
              // Animasi masuk dari bawah
              initial={{ y: "100%" }}
              // Posisi diam di tengah
              animate={{ y: 0 }}
              // Animasi keluar ke arah atas
              exit={{ y: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 bg-black/45 backdrop-blur-sm flex items-center justify-center p-6"
            >
              <div className="text-center">
                <p className="text-white gabarito-normal text-sm md:text-base leading-relaxed">
                  {cert.desc}
                </p>
                <span className="text-yellow-500 text-xs mt-4 block font-bold uppercase tracking-tighter">
                  {t("close")}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
