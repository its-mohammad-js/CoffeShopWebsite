import { useTranslation } from "react-i18next";
import Productsinfo from "../../../assets/Products";
import { useNavigate } from "react-router-dom";

export default function MainMenu() {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="w-full py-4 my-4 flex flex-wrap items-center gap-8 px-16 justify-center">
      <h4
        className={`${
          language !== "fa" ? "text-start" : "text-end"
        } w-full my-2 md:my-4 text-2xl md:text-3xl font-bold text-[#8d2f2d]`}
      >
        {t("banners.allProducts")}
      </h4>

      {Productsinfo.map(({ category, id, name, thumbnailSrc, price }) => (
        <div
          onClick={() => {
            navigate(`/product/${id}`);
            window.scroll({ top: 0, behavior: "smooth" });
          }}
          className="flex flex-col flex-none items-center justify-center cursor-pointer"
        >
          <div className="size-64 rounded-xl flex-none mb-2 overflow-hidden">
            <img
              src={thumbnailSrc}
              alt="Thumbnail"
              className="size-full object-cover"
            />
          </div>
          <h4 className="text-lg text-gray-900 font-semibold">
            {name[language]}
          </h4>
          <p className="text-gray-600 my-1 font-semibold">
            {category[language]}
          </p>
          <p className="text-[#8d2f2d] font-semibold">${price}</p>
        </div>
      ))}
    </div>
  );
}
