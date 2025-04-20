import { useTranslation } from "react-i18next";
import { useLanguage } from "../i18n/LanguageProvider";
import { navList } from "./layout.const";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import useOutSideClick from "../hooks/useOutSideClick";
import { RiMenu2Line } from "react-icons/ri";
import { CgClose } from "react-icons/cg";

export default function Navbar() {
  const { t } = useTranslation();
  const { toggleLanguage, isRTL, language } = useLanguage();
  const navigate = useNavigate();
  const [menuIsShow, setMenu] = useState(false);
  const menuRef = useRef();
  useOutSideClick(menuRef, () => setMenu(false), !menuIsShow);
  const [mobileMenu, setMobilemenu] = useState(false);

  function onChangeLang() {
    toggleLanguage();
    setMenu(false);
    setMobilemenu(false);
  }

  return (
    <div
      className={`${
        isRTL && "flex-row-reverse"
      } flex relative items-center justify-between px-4 md:px-10 py-2`}
    >
      <div
        onClick={() => {
          navigate("/");
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="cursor-pointer"
      >
        <img
          src="/CoffeeLogo.png"
          alt="logo"
          className="size-16 md:size-24 rounded-full"
        />
      </div>
      {/* mobile menu */}
      <div className="md:hidden">
        <button
          onClick={() => setMobilemenu(true)}
          className="text-[#8D2F2D] text-xl"
        >
          <RiMenu2Line className="text-3xl" />
        </button>

        <div
          className={`${
            mobileMenu
              ? "visible opacity-100 translate-x-0"
              : "invisible opacity-0 translate-x-10"
          } flex flex-col fixed z-50 transition-all font-semibold text-lg bg-gray-50 gap-y-4 w-full top-0 py-12 left-0 h-screen`}
        >
          <button
            onClick={() => setMobilemenu(false)}
            className="absolute top-4 right-4 text-2xl text-[#8D2F2D]"
          >
            <CgClose />
          </button>

          <button>{t("navbar.menu")}</button>
          <button>{t("navbar.about")}</button>
          <button
            onClick={() =>
              language !== "fa" ? onChangeLang() : setMenu(false)
            }
          >
            فارسی
          </button>
          <button
            onClick={() =>
              language === "fa" ? onChangeLang() : setMenu(false)
            }
          >
            English
          </button>
        </div>
      </div>
      {/* desktop menu */}
      <div
        className={`${
          isRTL && "flex-row-reverse"
        }  items-center gap-6 hidden md:flex`}
      >
        {/* routes */}
        {navList.map(({ title, path }) => (
          <button
            onClick={() => navigate(path)}
            className="cursor-pointer text-lg font-semibold"
          >
            {t(`${title}`)}
          </button>
        ))}
        {/* change lang btn */}
        <div ref={menuRef} className="relative flex items-center text-center">
          <button
            onClick={() => setMenu(!menuIsShow)}
            className={`${
              isRTL && "flex-row-reverse"
            } cursor-pointer text-lg font-semibold flex items-center gap-x-2`}
          >
            <p>{t("navbar.changelng")}</p>
            <IoChevronDown
              className={`${menuIsShow && "rotate-180"} mt-0.5 transition-all`}
            />
          </button>

          <div
            className={`${
              menuIsShow ? "opacity-100 visible" : "opacity-0 invisible "
            } absolute flex z-50 gap-y-2 flex-col px-2 top-full w-32 transition-all py-2 items-center justify-center rounded-md right-0 mt-2 shadow-2xl bg-gray-100`}
          >
            <button
              onClick={() =>
                language !== "fa" ? onChangeLang() : setMenu(false)
              }
              className={`${
                language === "fa" && "bg-gray-200"
              } px-2 py-1 size-full rounded-md hover:bg-gray-200 cursor-pointer`}
            >
              فارسی
            </button>
            <button
              onClick={() =>
                language === "fa" ? onChangeLang() : setMenu(false)
              }
              className={`${
                language !== "fa" && "bg-gray-300"
              } px-2 py-1 size-full rounded-md hover:bg-gray-200 cursor-pointer`}
            >
              English
            </button>
          </div>
        </div>
      </div>
      {/* contact button */}
      <div className="hidden md:block">
        <button className="bg-[#8D2F2D] cursor-pointer text-gray-100 px-4 py-2 rounded-2xl font-semibold">
          {t("navbar.contact")}
        </button>
      </div>
    </div>
  );
}
