import { useTranslation } from "react-i18next";
import Productsinfo from "../../../assets/Products";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLanguage } from "../../../i18n/LanguageProvider";

export default function ProductInfo() {
  const {
    i18n: { language },
  } = useTranslation();
  const params = useParams();
  const { products, loading } = useLanguage();
  const isFarsi = language === "fa";
  const [productData, setProductData] = useState();

  useEffect(() => {
    setProductData(products?.find((product) => product?.id === params?.id));
  }, [params, products]);

  if (loading) return <>loading</>;

  if (!loading && productData)
    return (
      <div
        className={`${
          language === "fa" && "md:flex-row-reverse"
        } flex px-4 py-2 md:px-6 md:py-6 gap-4 flex-col md:flex-row`}
      >
        <div className="w-full md:w-2/5 h-64 md:h-96 rounded-xl flex-none overflow-hidden">
          <img
            src={productData?.thumbnailSrc}
            alt="thumbnail"
            className="size-full object-cover"
          />
        </div>

        <div
          dir={isFarsi ? "rtl" : "ltr"}
          className={`${
            language === "fa" && ""
          } h-96 flex flex-col text-gray-950 justify-between py-2 px-2`}
        >
          <div className="space-y-2">
            <p className="text-sm">{productData?.[`category__${language}`]}</p>
            <h6 className="text-2xl font-bold">
              {productData?.[`name__${language}`]}
            </h6>
            <div className=""></div>
            <hr className="my-2" />
            <p className="text-start">{productData?.[`desc__${language}`]}</p>
          </div>

          <div className="">
            <hr className="my-2" />
            <p className="flex items-center text-lg font-semibold">
              <p>{productData.price} &nbsp;</p>
              <span>{isFarsi ? "تومان" : " Toman"}</span>
            </p>
          </div>
        </div>
      </div>
    );
}
