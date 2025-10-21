import { useEffect, useState } from "react";
import axiosClient from "../../apis/product.ts";
import { type Product } from "../../types/product";
import ProductCard from "../../components/ProductCard/index.tsx";
// import SortBar from "../../components/SortBar/index.tsx";

const HomePage = () => {
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
    <>
      <div className="container mx-auto px-6 mb-10">
        <div>
          <h1 className=" text-2xl font-bold mt-10 ">Danh sách sản phẩm</h1>
          {/* <SortBar /> */}
        </div>
        <div className="grid gap-6 mt-4 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
          {products.slice(0, 10).map((p) => (
            <ProductCard key={p.id} product={p} rating={5} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
