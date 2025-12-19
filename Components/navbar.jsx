import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as faMoonSolid } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonRegular } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next"; // use the hook
import i18n from "../src/i18n";

export default function Navbar() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    i18n.changeLanguage(selectedLang); // 🔑 change i18n language
  };

  return (
    <nav className="w-full bg-[#6B9080] shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl text-[#F8F6F2] font-bold">
          Logo
        </Link>
        <div className="flex items-center gap-4 text-xl cursor-pointer md:order-2">
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer text-3xl md:hidden"
          >
            ☰
          </label>

          <div className="flex items-center">
            <FontAwesomeIcon icon={faMoonSolid} />
            <span className="hidden">
              <FontAwesomeIcon icon={faMoonRegular} />
            </span>
          </div>

          <select
            className="
    bg-[#6B9080]
    text-[#F8F6F2]
    border border-[#A4C3B2]
    rounded-xl
    px-3 py-1
    text-base
    focus:outline-none
    focus:ring-2
    focus:ring-[#A4C3B2]
    cursor-pointer
  "
            value={language}
            onChange={handleLanguageChange}
          >
            <option className="text-black" value="uz">
              Uzbek
            </option>
            <option className="text-black" value="ru">
              Russian
            </option>
            <option className="text-black" value="en">
              English
            </option>
          </select>
        </div>

        <input type="checkbox" id="menu-toggle" className="hidden peer" />

        <ul className="bg-[#6B9080] absolute md:static w-full left-0 md:w-auto px-6 md:px-0 pt-4 md:pt-0 pb-4 md:pb-0 shadow-md md:shadow-none opacity-0 top-[-300px] peer-checked:opacity-100 peer-checked:top-16 transition-all duration-300 md:flex md:opacity-100 md:top-auto md:order-1">
          <Link to={"/"}>
            {" "}
            <li className="py-2 px-4 md:py-0 text-[#F8F6F2] cursor-pointer">
              {t("home")}
            </li>
          </Link>{" "}
          <Link to={"/about"}>
            {" "}
            <li className="py-2 px-4 md:py-0 text-[#F8F6F2] cursor-pointer">
              {t("about")}
            </li>
          </Link>
          <Link to={"/blog"}>
            {" "}
            <li className="py-2 px-4 md:py-0 text-[#F8F6F2] cursor-pointer">
              {t("blog")}
            </li>
          </Link>
          <Link to={"/contact"}>
            {" "}
            <li className="py-2 px-4 md:py-0 text-[#F8F6F2] cursor-pointer">
              {t("contact")}
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
