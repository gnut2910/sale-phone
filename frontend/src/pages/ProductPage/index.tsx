import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/index.tsx";
import { type Product } from "../../types/product";
import axiosClient from "../../apis/product.ts";

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axiosClient
      .get<Product[]>("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error("Lỗi fetch sản phẩm:", err));
  }, []);

  return (
    <div className="container mx-auto px-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">Tất cả sản phẩm</h2>
      <div className="grid grid-cols-5 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} rating={5} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
