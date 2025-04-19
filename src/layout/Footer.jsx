import { useTranslation } from "react-i18next";
import { BsInstagram, BsTelegram, BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const isRtl = language === "fa";

  return (
    <div className="bg-[#8d2f2d] px-6">
      <div
        className={`${
          isRtl && ""
        } flex flex-col mx-auto 2xl:max-w-[1440px] md:flex-row py-4 justify-between`}
      >
        {/* logo and routes */}
        <div
          className={`${
            isRtl && "items-end first:[&>div]:items-end md:items-start "
          } flex flex-col w-full md:w-1/2 space-y-4 md:justify-between`}
        >
          {/* logo */}
          <div className="cursor-pointer my-6 mx-4">
            <img
              src="/CoffeeLogo.png"
              alt="logo"
              className="size-16 md:size-24 rounded-full"
            />
          </div>
          {/* routes */}
          <div className="flex flex-col md:grid grid-cols-2 grid-rows-2 w-72 text-gray-300 gap-2 [&>button]:text-start">
            <button className="font-normal cursor-pointer w-fit">
              {t("navbar.menu")}
            </button>
            <button className="font-normal cursor-pointer w-fit">
              {t("navbar.about")}
            </button>
            <button className="font-normal cursor-pointer w-fit">
              {t("navbar.contact")}
            </button>
            <button className="font-normal cursor-pointer w-fit">
              Example@email.com
            </button>
          </div>
        </div>
        {/* description and social's */}
        <div className="flex w-full flex-col md:flex-row md:w-1/3 pb-2 pt-6 gap-12 items-center justify-between">
          <p className={`${isRtl && "text-end"} text-gray-200`}>
            {t("navbar.footerDesc")}
          </p>

          <div className="space-y-2 md:pt-12 flex md:flex-col items-center gap-4">
            <div className="text-2xl p-2 bg-gray-200 rounded-full">
              <BsTelegram />
            </div>
            <div className="text-2xl p-2 bg-gray-200 rounded-full">
              <BsWhatsapp />
            </div>
            <div className="text-2xl p-2 bg-gray-200 rounded-full">
              <BsInstagram />
            </div>
          </div>
        </div>
      </div>
      <p className={`text-gray-200 py-2`}>
        © 2025 All rights reserved. | Privacy Policy | Terms of Use
      </p>
    </div>
  );
}
