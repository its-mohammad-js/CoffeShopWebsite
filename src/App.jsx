import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import ProductsList from "./pages/ProductsList/ProductsList";
import ProductDetail from "./pages/productDetail/ProductDetail";
import { LanguageProvider } from "./i18n/LanguageProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./layout/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          "https://theorycafe.ir/wp-json/custom/v1/get-products"
        );
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log("ERROR:", error);
      }
    };

    getProducts();
  }, []);

  // useEffect(() => {
  //   const createProduct = async () => {
  //     try {
  //       await fetch("https://theorycafe.ir/wp-json/custom/v1/add-product", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           name: { en: "test name", fa: "محصول تستی" },
  //           category: { en: "drinks", fa: "نوشیدنی" },
  //           desc: { en: "this is a test", fa: "این یک تست است" },
  //           thumbnailSrc: "url",
  //           price: "145,000",
  //         }),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => console.log(data));

  //       console.log("ok");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   createProduct();
  // }, []);

  return (
    <LanguageProvider>
      <div className="mx-auto 2xl:max-w-[1440px]">
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
