import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navbar: {
        menu: "Our Products",
        about: "About Us",
        contact: "Contact",
        changelng: "English",
        contact: "contact us",
        footerDesc:
          "Join us on our journey to make meal planning simple and joyful Connect with us on social media, explore our FAQs for quick answers, or drop us a line anytime.",
        terms: "© 2025 All rights reserved. | Privacy Policy | Terms of Use",
      },
      banners: {
        allProducts: "All Products",
        mainTitle: "Suggested Products",
        title01: "Espresso",
        title02: "Latte",
        title03: "Cappuccino",
        title04: "Americano",
        title05: "Macchiato",
      },
      insights: {
        title: "Suggested Products",
        subtitle:
          "Discover our handpicked favorites – perfect for any time of day.",
      },
    },
  },
  fa: {
    translation: {
      navbar: {
        menu: "منوی محصولات",
        about: "درباره ما",
        contact: "تماس با ما",
        changelng: "فارسی",
        contact: "ارتباط با ما",
        footerDesc:
          "در شبکه‌های اجتماعی با ما در ارتباط باشید، پاسخ پرسش‌های رایج را در بخش سؤالات متداول بیابید، یا در هر زمان برایمان پیام بفرستید",
        terms:
          "© ۲۰۲۵ تمامی حقوق این وب‌سایت متعلق به کافه است. | سیاست حفظ حریم خصوصی | شرایط استفاده",
      },
      banners: {
        allProducts: "همه محصولات",
        mainTitle: "محصولات پیشنهادی",
        title01: "اسپرسو",
        title02: "لته",
        title03: "کاپوچینو",
        title04: "امریکانو",
        title05: "ماکیاتو",
      },
      insights: {
        title: "پیشنهاد ما",
        subtitle:
          "منتخب‌های ویژه ما را امتحان کنید – مناسب برای هر ساعتی از روز.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fa",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
