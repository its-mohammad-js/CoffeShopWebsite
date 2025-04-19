import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import ProductsList from "./pages/ProductsList/ProductsList";
import ProductDetail from "./pages/productDetail/ProductDetail";
import { LanguageProvider } from "./i18n/LanguageProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./layout/Footer";

function App() {
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
