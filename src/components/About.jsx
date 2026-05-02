import { useTranslation } from "react-i18next";
import me from "../assets/image/Group 17.png";

export default function About() {
  const { t } = useTranslation("about");
  return (
    <div className="bg-[#0C1826] px-8 md:px-4 py-6 md:py-14 border-t border-white md:border-gray-500">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row space-x-14 items-center lg:items-start gap-2 md:gap-10">
        <h3 className="lg:hidden w-full text-center mx-auto justify-center gabarito-medium text-yellow-500 text-3xl">
          {t("title_head")}
        </h3>

        {/* FOTO */}
        <div className="flex-shrink-0 inline-block bottom-0 mx-auto md:mx-0 px-2 md:px-2 -mt-10 md:-mt-20">
          {/* IMAGE */}
          <img
            src={me}
            alt="Profile"
            className="relative object-cover z-10 md:max-w-md transition-all duration-300 ease-out hover:scale-105"
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col space-y-5 max-w-2xl mt-4 md:mt-0">
          <div className="flex flex-col space-y-2 text-start px-2 md:px-0">
            <h3 className="text-yellow-500 text-4xl gabarito-medium">
              {t("title_sub_head_about")}
            </h3>
            <p className="text-white text-md md:text-lg leading-relaxed gabarito-normal">
              {t("description_sub_head_about")}
            </p>
          </div>

          <div className="flex flex-col md:flex-row space-x-6 mt-4">
            {/* KIRI */}
            <div className="flex flex-col space-y-4 text-start">
              <div className="flex flex-col space-y-2">
                <h4 className="text-yellow-500 text-2xl gabarito-medium">
                  {t("title_sub_head_pendidikan")}
                </h4>
                <ul className="text-white text-lg md:text-xl gabarito-normal">
                  {/* <li className="mb-1">• TK AL - FIRDAUS (2011 - 2013)</li> */}
                  <li className="mb-1">• MIT NURUL ISLAM (2013 - 2019)</li>
                  <li className="mb-1">• SMP N 23 SEMARANG (2019 - 2022)</li>
                  <li className="mb-1">• SMK N 3 KENDAL (2022 - 2025)</li>
                  <li className="mb-1">{t("content_sub_head_kuliah_pendidikan")}</li>
                </ul>
              </div>

              <div className="flex flex-col space-y-2">
                <h4 className="text-yellow-500 text-2xl gabarito-medium">
                  {t("organization_sub_head")}
                </h4>
                <ul className="text-white text-lg md:text-xl gabarito-normal">
                  <li className="mb-1">{t("content_sub_head_ecc_organization")}</li>
                  <li className="mb-1">{t("content_sub_head_library_organization")}</li>
                  <li className="mb-1">• Aozora Kurabu (2024)</li>
                  <li className="mb-1">{t("content_sub_head_ukm_organization")}</li>
                </ul>
              </div>
            </div>

            {/* GARIS */}
            <div className="md:border-l border-gray-400 opacity-50"></div>

            {/* KANAN */}
            <div className="space-y-2 text-start mt-2 md:mt-0">
              <h4 className="text-yellow-500 text-2xl gabarito-medium">
                {t("title_sub_head_hardskill")}
              </h4>

              <div className="flex space-x-4">
                <ul className="text-white text-lg md:text-xl gabarito-normal">
                  <li>• HTML</li>
                  <li>• CSS</li>
                  <li>• PHP</li>
                  <li>• Java</li>
                  <li>• MySQL</li>
                  <li>• MongoDB</li>
                  <li>• React</li>
                  <li>• NodeJS</li>
                  <li>• Firebase</li>
                </ul>

                <ul className="text-white text-lg md:text-xl gabarito-normal">
                  <li>• Git</li>
                  <li>• Bootstrap</li>
                  <li>• Tailwind</li>
                  <li>• Laravel</li>
                  <li>• Figma</li>
                  <li>• C</li>
                  <li>• C++</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
