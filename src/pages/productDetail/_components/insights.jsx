import { useTranslation } from "react-i18next";
import Productsinfo from "../../../assets/Products";
import { useNavigate } from "react-router-dom";

const productCardsData = [
  Productsinfo[4],
  Productsinfo[20],
  Productsinfo[12],
  Productsinfo[14],
];

export default function Insights() {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const isFarsi = language === "fa";
  const navigate = useNavigate();

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
            {productCardsData.map(({ thumbnailSrc, name, desc, id }) => (
              <div className="w-64 rounded-lg flex-none bg-gray-100 overflow-hidden p-2.5 space-y-2">
                <div className="w-full h-48 overflow-hidden rounded-xl">
                  <img
                    src={thumbnailSrc}
                    alt="thumbnail"
                    className="size-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold">{name[language]}</h4>
                <p className="line-clamp-3 text-sm">{desc[language]}</p>
                <button
                  onClick={() => {
                    navigate(`/product/${id}`);
                    window.scroll({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="bg-[#8D2F2D] mt-3 text-gray-200 px-2 cursor-pointer py-1 w-2/3 rounded-xl"
                >
                  {t("insights.btnTitle")}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
