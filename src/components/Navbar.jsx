import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageButton from "./LanguageButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("navbar");

  const about = t("menu_about");
  const projects = t("menu_projects");
  const activities = t("menu_activities");
  const certificates = t("menu_certificates");
  const contacts = t("menu_contacts");

  const menuItems = [
    { name: about, href: "#about" },
    { name: projects, href: "#projects" },
    { name: activities, href: "#activities" },
    { name: certificates, href: "#certificates" },
    { name: contacts, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-gray-300 bg-black/25 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <div className="flex flex-row space-x-3">
          <a href="#home" className="gabarito-semibold text-2xl">EEBLA</a>
          <div className="border-1 border-gray-500 opacity-50"></div>
          <LanguageButton />
        </div>
        

        {/* Menu */}
        <ul className="hidden lg:flex space-x-16 text-sm gabarito-medium">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-yellow-300 transition">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Buat navbar mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* menu navbar mobile */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out backdrop-blur-md ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <ul className="px-6 py-6 space-y-4 text-center">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)} // Tutup menu setelah klik
                className="block text-lg text-white font-medium hover:text-yellow-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
