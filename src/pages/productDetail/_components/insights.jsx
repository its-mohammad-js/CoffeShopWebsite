import { useTranslation } from "react-i18next";
import Productsinfo from "../../../assets/Products";

// const productCardsData = [Productsinfo[0]];

export default function Insights() {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const isFarsi = language === "fa";

  return (
    <div className="my-6 md:my-8 pt-24 relative">
      <div
        className={`${
          isFarsi ? "rounded-tl-full right-0" : "rounded-tr-full"
        } absolute h-24 w-2/3 md:w-1/3 bg-gray-200 top-0`}
      ></div>
      <div className="w-full bg-gray-200 py-12">
        <div
          dir={language === "fa" ? "rtl" : "ltr"}
          className="w-11/12 h-full mx-auto"
        >
          <div className="flex items-center font-semibold gap-x-2 text-[#8d2f2d]">
            <h4 className="text-2xl">{t("insights.title")}</h4>
            <p className="text-6xl font-bold">/</p>
            <span className="w-64">{t("insights.subtitle")}</span>
          </div>

          <div className="flex items-center justify-evenly py-8 overflow-auto gap-8 px-4">
            {[0, 0, 0].map(() => (
              <div className="w-64 rounded-lg h-80 flex-none bg-gray-400"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
