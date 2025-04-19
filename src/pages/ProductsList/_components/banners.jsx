import { useTranslation } from "react-i18next";
import Slider from "react-slick";

const bannersData = [
  { title: "title01", path: "/", src: "/menu/images/banner/Americano.jpg" },
  { title: "title02", path: "/", src: "/menu/images/banner/Latte.jpg" },
  { title: "title03", path: "/", src: "/menu/images/banner/Cappuccino.jpg" },
  { title: "title04", path: "/", src: "/menu/images/banner/Americano.jpg" },
  { title: "title05", path: "/", src: "/menu/images/banner/Macchiato.jpg" },
];

export default function Banners() {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <div className="px-4 py-2">
      <h4
        className={`${
          language !== "fa" ? "text-start" : "text-end"
        } w-full my-2 md:my-4 text-2xl md:text-3xl font-bold text-[#8d2f2d]`}
      >
        {t("banners.mainTitle")}
      </h4>

      <div className="items-center justify-around flex-wrap gap-4 hidden lg:flex">
        {bannersData.map((banner) => (
          <Banner {...banner} />
        ))}
      </div>

      <div className="relative lg:hidden ">
        <Slider className="" arrows={false} autoplay={true} speed={2000}>
          {bannersData.map((banner) => (
            <Banner {...banner} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

const Banner = ({ src, title }) => {
  const { t } = useTranslation();

  return (
    <div className="lg:w-64 h-48 md:h-72 rounded-xl font-bold text-xl relative overflow-hidden group flex-none lg:h-64">
      <img
        src={src}
        alt="thumbnail"
        className="absolute z-0 inset-0 h-full w-full object-center object-cover"
      />
      <div className="absolute z-10 inset-0 bg-gray-900/50 flex group-hover:backdrop-blur-sm transition-all cursor-pointer items-center justify-center">
        <h4 className="z-10 text-gray-200">{t(`banners.${title}`)}</h4>
      </div>
    </div>
  );
};
