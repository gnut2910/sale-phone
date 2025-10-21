import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import FooterPage from "./pages/FooterPage";
import Header from "./components/HeaderComponent";
import Banner from "./pages/Banner";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import SortBar from "./components/SortBar";

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Toast notifications */}
      <ToastContainer />

      {/* <HeaderComponent /> */}
      <Header />

      {/*Banner  */}
      {location.pathname === "/" && <Banner />}
      {location.pathname === "/" && <SortBar />}
      {location.pathname === "/products" && <SortBar />}
      {/* Main content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>

      {/* Footer chỉ hiển thị ở HomePage,About,Contact,Product */}
      {location.pathname === "/" && <FooterPage />}
      {location.pathname === "/about" && <FooterPage />}
      {location.pathname === "/contact" && <FooterPage />}
      {location.pathname.startsWith("/products") && <FooterPage />}
    </div>
  );
}

export default AppWrapper;
