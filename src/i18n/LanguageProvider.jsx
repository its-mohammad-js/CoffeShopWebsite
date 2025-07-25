import { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { supabase } from "../../supabaseClient";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [menuFilter, setFilter] = useState(null);
  const [{ loadig, products }, setProducts] = useState({
    loadig: false,
    products: [],
  });

  useEffect(() => {
    const getProducts = async () => {
      setProducts({ loadig: true, products: [] });

      const res = await fetch(
        "https://theorycafe.ir/wp-json/custom/v1/get-products"
      );
      const productsList = await res.json();

      setProducts({
        loadig: false,
        products: productsList,
      });
    };

    getProducts();
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language);
    document.body.setAttribute("data-lang", language);
    setFilter(null);
  }, [language, i18n]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fa" ? "en" : "fa"));
  };

  const isRTL = language === "fa";

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        isRTL,
        setFilter,
        menuFilter,
        loadig,
        products,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
