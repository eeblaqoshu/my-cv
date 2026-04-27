import { useState } from "react";
import me from "../assets/Contact/me.png";
import gmailIcon from "../assets/Icons/Gmail.png";
import instagramIcon from "../assets/Icons/Instagram.png";
import githubIcon from "../assets/Icons/GitHub.png";
import linkedinIcon from "../assets/Icons/LinkedIn.png";

export default function Contact() {
  const [active, setActive] = useState(null);

  const contacts = [
    {
      id: "gmail",
      name: "mqolbishufi@gmail.com",
      icon: gmailIcon,
      bg: "bg-[#FF3737]",
      iconBg: "bg-[#FF8383]",
      side: "left",
      link: "mailto:mqolbishufi@gmail.com",
    },
    {
      id: "github",
      name: "eeblaqoshu",
      icon: githubIcon,
      bg: "bg-[#080616]",
      iconBg: "bg-[#1A1953]",
      side: "left",
      link: "https://github.com/eeblaqoshu",
    },
    {
      id: "linkedin",
      name: "Muhammad Bahrul Qolbi Shufi",
      icon: linkedinIcon,
      bg: "bg-[#124170]",
      iconBg: "bg-[#406AAF]",
      side: "right",
      link: "https://www.linkedin.com/in/muhammad-bahrul-qolbi-shufi-618498316/",
    },
    {
      id: "instagram",
      name: "albee.bq",
      icon: instagramIcon,
      bg: "bg-[#831C91]",
      iconBg: "bg-[#D552A3]",
      side: "right",
      link: "https://www.instagram.com/albee.bq/",
    },
  ];

  return (
    <div
      id="contact"
      className="bg-[#0C1826] px-6 md:px-14 py-10 md:py-12 border-t border-white min-h-screen flex flex-col items-center justify-center space-y-12 overflow-hidden"
    >
      <h3 className="gabarito-medium text-4xl text-center text-yellow-500 font-bold">
        Contact Me
      </h3>

      <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-5 md:gap-0">
        {/* --- TAMPILAN DESKTOP --- */}
        <div className="hidden md:flex flex-col space-y-8 items-end z-20 w-auto">
          {contacts
            .filter((c) => c.side === "left")
            .map((contact) => (
              <ContactItem
                key={contact.id}
                contact={contact}
                isActive={active === contact.id}
                setActive={setActive}
              />
            ))}
        </div>

        {/* Foto Profil: Muncul di semua device */}
        <div className="relative mx-0 md:mx-10 order-first md:order-none">
          <div className="absolute inset-0 bg-blue-500/20 blur-[50px] rounded-full"></div>
          <img
            src={me}
            alt="me"
            className="relative w-52 h-52 md:w-80 md:h-80 object-cover rounded-full shadow-2xl z-10"
          />
        </div>

        <div className="hidden md:flex flex-col space-y-8 items-start z-20 w-auto">
          {contacts
            .filter((c) => c.side === "right")
            .map((contact) => (
              <ContactItem
                key={contact.id}
                contact={contact}
                isActive={active === contact.id}
                setActive={setActive}
              />
            ))}
        </div>

        {/* --- TAMPILAN MOBILE STATIS --- */}
        <div className="flex md:hidden flex-col space-y-4 w-full px-2 gabarito-medium">
          <h4 className="text-center text-white text-xl gabarito-normal">How Do I Know You?</h4>
          {contacts.map((contact) => (
            <a
              href={contact.link}
              key={contact.id}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center w-full rounded-full p-1 shadow-lg transition-all duration-300 transform hover:scale-108 active:scale-95 active:opacity-90`}
            >
              <div
                className={`p-3 rounded-full flex-shrink-0 hover:${contact.bg} transition-all duration-300`}
              >
                <img
                  src={contact.icon}
                  alt={contact.id}
                  className="w-5 h-5 object-contain"
                />
              </div>
              <span className="text-white text-center hover:text-yellow-500 text-xs font-medium px-4 truncate">
                {contact.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      <h3 className="gabarito-medium text-center text-white text-lg md:text-xl italic opacity-80 px-4">
        “I may not be perfect yet, but I'm improving every day.”
      </h3>
    </div>
  );
}

// Komponen Desktop Item
function ContactItem({ contact, isActive, setActive }) {
  const isLeft = contact.side === "left";
  return (
    <div
      onClick={() => setActive(isActive ? null : contact.id)}
      className={`group relative flex items-center cursor-pointer transition-all duration-500 
        ${isLeft ? "flex-row-reverse" : "flex-row"}`}
    >
      <div
        className={`relative z-30 p-4 rounded-full shadow-lg transform transition-transform group-hover:scale-110 ${contact.iconBg}`}
      >
        <img
          src={contact.icon}
          alt={contact.id}
          className="w-8 h-8 object-contain"
        />
      </div>

      <a href={contact.link} target="_blank" rel="noopener noreferrer"
        className={`overflow-hidden transition-all duration-500 ease-in-out flex items-center ${contact.bg} 
          ${isActive ? "max-w-[400px] opacity-100" : "max-w-0 opacity-0"}
          ${isLeft ? "rounded-l-full pr-12 -mr-8" : "rounded-r-full pl-12 -ml-8"}
        `}
      >
        <div className="whitespace-nowrap px-6 py-3 text-white font-medium text-base">
          {contact.name}
        </div>
      </a>
    </div>
  );
}