import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { useLanguage } from "../../../i18n/LanguageProvider";

const bannersData = [
  {
    title: "title01",
    path: "/",
    src: "https://brgcjextuxehgykzniwp.supabase.co/storage/v1/object/sign/productimages/HotDrinks.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2M5NWQ3MzRiLWE5OGMtNGVkNS04YWIyLWUxYmMwMjQ1N2FiNiJ9.eyJ1cmwiOiJwcm9kdWN0aW1hZ2VzL0hvdERyaW5rcy5qcGciLCJpYXQiOjE3NDU1MTM4NTksImV4cCI6MTc0NjExODY1OX0.K0cJVjXxHFhuEhZNM4nLIZCr-rbK6FEFxSX5zdovovM",
  },
  {
    title: "title02",
    path: "/",
    src: "https://brgcjextuxehgykzniwp.supabase.co/storage/v1/object/sign/productimages/ColdDrinks.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2M5NWQ3MzRiLWE5OGMtNGVkNS04YWIyLWUxYmMwMjQ1N2FiNiJ9.eyJ1cmwiOiJwcm9kdWN0aW1hZ2VzL0NvbGREcmlua3MuanBnIiwiaWF0IjoxNzQ1NTEzNzM1LCJleHAiOjE3NzcwNDk3MzV9.Y19a71qGOiAOQsniIjS0XfmSqG70jwCtzFOLSRZ_Wm8",
  },
  {
    title: "title03",
    path: "/",
    src: "https://brgcjextuxehgykzniwp.supabase.co/storage/v1/object/sign/productimages/Sandwiches.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2M5NWQ3MzRiLWE5OGMtNGVkNS04YWIyLWUxYmMwMjQ1N2FiNiJ9.eyJ1cmwiOiJwcm9kdWN0aW1hZ2VzL1NhbmR3aWNoZXMuanBnIiwiaWF0IjoxNzQ1NTEzODc2LCJleHAiOjE3NzcwNDk4NzZ9._aGtTvsnwRapgG30LMeGAfeUF2vecSa9DIUmXrMCiBM",
  },
  {
    title: "title04",
    path: "/",
    src: "https://brgcjextuxehgykzniwp.supabase.co/storage/v1/object/sign/productimages/Desserts.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2M5NWQ3MzRiLWE5OGMtNGVkNS04YWIyLWUxYmMwMjQ1N2FiNiJ9.eyJ1cmwiOiJwcm9kdWN0aW1hZ2VzL0Rlc3NlcnRzLmpwZyIsImlhdCI6MTc0NTUxMzc3MSwiZXhwIjoxNzc3MDQ5NzcxfQ.5iV451jB-iIER6aU7bfroUXwpyHIFK7Bz4ihjTIH4LA",
  },
  {
    title: "title05",
    path: "/",
    src: "https://brgcjextuxehgykzniwp.supabase.co/storage/v1/object/sign/productimages/Sweets.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2M5NWQ3MzRiLWE5OGMtNGVkNS04YWIyLWUxYmMwMjQ1N2FiNiJ9.eyJ1cmwiOiJwcm9kdWN0aW1hZ2VzL1N3ZWV0cy5qcGciLCJpYXQiOjE3NDU1MTM4OTUsImV4cCI6MTc3NzA0OTg5NX0.xfP3TZo7g6Tfft42SLIjs_7e4eQjW2NsObB0aSDkFqI",
  },
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
  const { setFilter } = useLanguage();

  return (
    <div
      onClick={() => setFilter(t(`banners.${title}`))}
      className="lg:w-64 h-48 md:h-72 rounded-xl font-bold text-xl relative overflow-hidden group flex-none lg:h-64"
    >
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
