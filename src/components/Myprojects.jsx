import { useState } from "react";
import project_1 from "../assets/projects/profile_design_figma.png";
import project_2 from "../assets/projects/web_cuaca.jpg";
import project_3 from "../assets/projects/web_laundry.png";
import project_4 from "../assets/projects/web_regenarasi.png";
import project_5 from "../assets/projects/web_using_firebase.png";
import project_6 from "../assets/projects/web_cv.png";
import project_7 from "../assets/projects/desktop_nasabah.png";
import project_8 from "../assets/projects/desktop_rental.png";
import project_9 from "../assets/projects/web_anggota_keluarga.png";

export default function Myprojects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [projects] = useState([
    {
      id: 1,
      title: "Profile Design",
      img: project_1,
      link: "https://www.figma.com/design/uLzhMkbffYqcwFgUOGZkX7/Profiile-Website-Design?node-id=0-1&t=zBWXSmCrPbw3G4Zi-1",
      description:
        "Merancang profile design dengan menggunakan tool figma, saya membuatnya dengan memperhatikan ukuran komponen didalamnya dan jarak ruang,  sehingga menampilkan desain yang siap pakai.",
    },
    {
      id: 2,
      title: "Website Cuaca",
      img: project_2,
      link: "https://github.com/eeblaqoshu/weather-app",
      description:
        "Website cuaca yang bisa memilih daerah dengan library react dan memanfaatkan API OpenWeather, website ini menampilkan informasi cuaca secara real-time.",
    },
    {
      id: 3,
      title: "Website Laundry",
      img: project_3,
      link: "https://github.com/eeblaqoshu/Laundry",
      description:
        "Website bisnis laundry yang dibuat dengan PHP sebagai backend dan MySQL sebagai database, serta styling menggunakan boostrap 5.3, website ini memiliki fitur untuk memesan layanan laundry secara online, melihat status pesanan, dan mengelola data pelanggan.",
    },
    {
      id: 4,
      title: "Website E-Voting Regenerasi PCC",
      img: project_4,
      link: "https://regenerasi2026.ukmpcc.org",
      description:
        "Merancang dan membuat website untuk kegiatan regenerasi UKM PCC, website ini menampilkan proses pemilihan admin PCC tahun 2026.",
    },
    {
      id: 5,
      title: "Website Add Items & Login with Firebase",
      img: project_5,
      description:
        "Membuat website sederhana untuk mendalami penggunaan firebase sebagai menyimpan data login dan data - data yang bersifat pribadi.",
    },
    {
      id: 6,
      title: "Website CV",
      img: project_6,
      link: "https://cvbahrul.pages.dev/",
      description:
        "Sebuah website curriculum vitae yang dibuat dengan library React dan Tailwind CSS, website ini menampilkan informasi pribadi dan projek - projek yang sudah saya kerjakan saat menjalani proses magang di PT Telkom Semarang.",
    },
  ]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  return (
    <div className="bg-[#0C1826] px-8 md:px-14 py-6 md:py-14 border-t border-white md:border-gray-500 space-y-10">
      <h3 className="gabarito-medium text-4xl text-center text-yellow-500">
        Projek Ku
      </h3>

      {/* Tampilan Desktop */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Tampilan Mobile */}
      <div className="md:hidden flex flex-col items-center">
        <div className="w-full transition-all duration-500 ease-in-out">
          <ProjectCard project={projects[currentIndex]} />
        </div>
      </div>

      {/* Navigasi Khusus Mobile */}
      <div className="md:hidden mt-8 flex flex-col items-center space-y-4 w-full">
        <div className="flex items-center justify-between w-full max-w-[200px">
          {/* tombol kembali */}
          <button
            onClick={prevProject}
            className="p-3 rounded-full bg-[#222F3E] text-white hover:bg-yellow-500 transition-colors"
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
          <div className="text-yellow-500 font-bold text-lg gabarito-normal">
            {currentIndex + 1}{" "}
            <span className="text-gray-500 text-sm">/ {projects.length}</span>
          </div>
          <button
            onClick={nextProject}
            className="p-3 rounded-full bg-[#222F3E] text-white hover:bg-yellow-500 transition-colors"
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
        {/* Indikator Titik */}
        <div className="flex space-x-2">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                index === currentIndex ? "w-8 bg-yellow-500" : "w-2 bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="group">
      <div
        className="h-full flex flex-col px-6 py-4 bg-[#222F3E] rounded-xl
            transition-all duration-300 ease-out hover:bg-[#486280] hover:-translate-y-2 hover:shadow-2xl"
      >
        <div className="overflow-hidden rounded-lg mb-4">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h4 className="text-white gabarito-medium text-center mb-3 text-xl">
          {project.title}
        </h4>
        <p className="text-gray-300 gabarito-normal text-start flex-grow leading-relaxed">
          {project.description}
        </p>
        <a href={project.link} target="_blank" className="text-gray-200 mt-2 bottom-0 gabarito-medium text-start hover:text-yellow-500 flex-grow leading-relaxed">
         Lihat Projek
        </a>
      </div>
    </div>
  );
}
