import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../i18n/LanguageProvider";
import { useEffect, useState } from "react";
import ProductsLoader from "./ProductCardLoader";

export default function MainMenu() {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const navigate = useNavigate();
  const { menuFilter, setFilter, loadig, products } = useLanguage();
  const [filteredProducts, setProducts] = useState(products);

  useEffect(() => {
    if (loadig) return;
    if (!menuFilter || menuFilter === null) {
      setProducts(products);
    } else {
      setProducts(
        products.filter(
          (product) => product[`category__${language}`] == menuFilter
        )
      );
    }
  }, [menuFilter, products]);

  if (loadig) return <ProductsLoader />;

  if (!loadig && filteredProducts?.length)
    return (
      <div className="w-full py-4 my-4 flex flex-wrap items-center gap-8 px-16 justify-center">
        <h4
          className={`${
            language !== "fa" ? "text-start" : "text-end"
          } w-full my-2 md:my-4  text-2xl md:text-3xl font-bold text-[#8d2f2d]`}
        >
          <span
            onClick={() => setFilter(null)}
            className="cursor-pointer hover:underline"
          >
            {t("banners.allProducts")}
          </span>
          <span className={`${!menuFilter && "hidden"} text-2xl`}>
            {" "}
            / {menuFilter}
          </span>
        </h4>

        {filteredProducts.map((product) => (
          <div
            onClick={() => {
              navigate(`/product/${product.id}`);
              window.scroll({ top: 0, behavior: "smooth" });
            }}
            className="flex flex-col flex-none items-center justify-center cursor-pointer"
          >
            <div className="size-64 rounded-xl bg-gray-100 flex-none mb-2 overflow-hidden">
              <img
                src={product.thumbnailSrc}
                alt="Thumbnail"
                className="size-full object-cover"
              />
            </div>
            <h4 className="text-lg text-gray-900 font-semibold">
              {product[`name__${language}`]}
            </h4>
            <p className="text-gray-600 my-1 font-semibold">
              {product[`category__${language}`]}
            </p>
            <p className="text-[#8d2f2d] font-semibold">${product.price}</p>
          </div>
        ))}
      </div>
    );
}
