import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GTP from "../assets/ordinary/GTP.jpeg";
import PKL from "../assets/ordinary/magang.jpeg";
import UKK_SMK from "../assets/ordinary/UKK_SMK.jpeg";
import REGENERASI from "../assets/ordinary/regenerasi.jpeg";

export default function MyActivities() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activities = [
    {
      id: 1,
      title: "Kegiatan Magang pada PT Telkom Semarang",
      img: PKL,
      alt: "magang",
      desc: "Mempelajari bidang web development dengan menggunakan React dan NodeJs, serta mendalami database MongoDB, telah dilaksanakan pada 2 September 2024 hingga 20 Februari 2025.",
    },
    {
      id: 2,
      title: "Kegiatan GTP (Goes To Public) PCC",
      img: GTP,
      alt: "GTP",
      desc: "Berpartisipasi dalam program pelatihan web development pada SMAN 9 Semarang dan bakti sosial di Panti Asuhan Manarul Mabrur, berperan sebagai PJ Humas, telah dilaksanakan pada 13 Maret 2026.",
    },
    {
      id: 3,
      title: "Kegiatan Uji Kompetensi Keahlian RPL",
      img: UKK_SMK,
      alt: "UKK SMK",
      desc: "Ujian praktek akhir untuk memvalidasi kemampuan teknis di bidang Rekayasa Perangkat Lunak, telah dilaksanakan pada 19 - 20 November 2024",
    },
    {
      id: 4,
      title: "Kegiatan Regenerasi PCC",
      img: REGENERASI,
      alt: "Regenerasi PCC",
      desc: "Proses pemilihan penerus admin PCC melalui website e-voting, berperan sebagai anggota Sie Web, telah dilaksanakan pada 12 April 2026.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === activities.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? activities.length - 1 : prev - 1));
  };

  return (
    <section
      id="activities"
      className="bg-[#0C1826] px-8 md:px-14 py-6 md:py-14 border-t border-white md:border-gray-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h3 className="gabarito-medium text-4xl text-center text-yellow-500 mb-12">
          Kegiatan Ku
        </h3>

        {/* --- TAMPILAN DESKTOP --- */}
        <div className="hidden md:grid grid-cols-2 gap-10">
          {activities.map((act) => (
            <ActivityCard key={act.id} activity={act} />
          ))}
        </div>

        {/* --- TAMPILAN MOBILE --- */}
        <div className="md:hidden flex flex-col items-center">
          <div className="w-full">
            <ActivityCard activity={activities[currentIndex]} />
          </div>

          {/* Navigasi & Indikator */}
          <div className="mt-8 flex flex-col items-center space-y-5 w-full">
            <div className="flex items-center justify-between w-full max-w-[220px]">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-[#222F3E] text-white active:bg-yellow-500 transition-colors shadow-lg"
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

              <div className="text-yellow-500 font-bold text-xl tracking-widest">
                {currentIndex + 1}{" "}
                <span className="text-gray-500 text-sm">
                  / {activities.length}
                </span>
              </div>

              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-[#222F3E] text-white active:bg-yellow-500 transition-colors shadow-lg"
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

            <div className="flex space-x-2">
              {activities.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 transition-all duration-300 rounded-full ${index === currentIndex ? "w-8 bg-yellow-500" : "w-2 bg-gray-600"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ActivityCard({ activity }) {
  // 2. State lokal untuk toggle deskripsi per kartu
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div className="flex flex-col space-y-4 group">
      <h3 className="text-white text-start gabarito-medium text-xl md:text-2xl min-h-[3.5rem] md:min-h-0">
        • {activity.title}
      </h3>

      {/* Container Gambar dengan Klik Event */}
      <div
        onClick={() => setShowDesc(!showDesc)}
        className="relative overflow-hidden rounded-xl shadow-2xl border border-gray-700 bg-[#16212e] cursor-pointer"
      >
        <img
          src={activity.img}
          alt={activity.alt}
          className="w-full object-cover h-64 md:h-80 transition-all ease-out duration-500 group-hover:scale-110"
        />

        {/* 3. Overlay Deskripsi dengan Framer Motion */}
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
                <p className="text-white gabarito-medium text-sm md:text-base leading-relaxed">
                  {activity.desc}
                </p>
                <span className="text-yellow-500 gabarito-normal text-xs mt-4 block font-bold uppercase tracking-tighter">
                  Tutup
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
