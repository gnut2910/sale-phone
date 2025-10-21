import React from "react";
import { type Product } from "../../types/product";
import { Link } from "react-router";
import { Star } from "lucide-react";

interface Props {
  product: Product;
  rating: number;
}

const ProductCard: React.FC<Props> = ({ product, rating }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="container mx-auto px-6 mb-10 border-1 rounded-lg p-6 mx-3 hover:bg-gray-100"
    >
      <img
        src={`http://localhost:5000${product.image_url}`}
        alt={product.name}
        className="w-50 h-40 object-fix mx-auto w-40 h-40 object-contain mx-auto transition-transform duration-300 hover:scale-105  "
      />
      <h3 className="mt-5 text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">
        {Number(product.price).toLocaleString("vi-VN")} VND
      </p>
      <div className="flex items-center space-x-1 mt-2">
        <Star className={`w-5 h-5 text-yellow-400 fill-yellow-400`} />
        <span className=" text-sm text-gray-600">{rating}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
