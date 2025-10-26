import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../apis/product.ts";
import { type Product } from "../../types/product";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      axiosClient
        .get<Product>(`/products/${id}`)
        .then((res) => setProduct(res.data))
        .catch((err) => console.error("Lỗi fetch product detail:", err));
    }
  }, [id]);

  if (!product) {
    return (
      <p className="text-center mt-10 text-gray-600">Đang tải dữ liệu...</p>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 my-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ảnh sản phẩm */}
        <div className="flex justify-center">
          <img
            src={`https://artistic-enthusiasm-production.up.railway.app${product.image_url}`}
            alt={product.name}
            className="w-full max-w-md object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Thông tin sản phẩm */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl text-red-500 font-semibold mt-4">
            {Number(product.price).toLocaleString("vi-VN")} VND
          </p>
          <p className="text-gray-700 mt-4">{product.description}</p>

          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer">
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
