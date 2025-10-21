import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Input, Space, type GetProps } from "antd";

type SearchProps = GetProps<typeof Input.Search>;
const Header = () => {
  const { Search } = Input;
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MyPhoneShop
        </Link>

        <Space direction="vertical">
          <Search
            placeholder="Tìm kiếm sản phẩm"
            onSearch={onSearch}
            enterButton
            style={{ width: "350px" }}
          />
        </Space>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/products"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Sản phẩm
          </Link>

          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Giới thiệu
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Liên hệ
          </Link>
        </nav>

        {/* Cart & Login */}
        <div className="flex items-center space-x-6">
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600" />
            {/* Badge hiển thị số lượng */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              0
            </span>
          </Link>
          <Link
            to="/login"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Đăng nhập
          </Link>
          <Link
            to="/register"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Đăng ký
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
