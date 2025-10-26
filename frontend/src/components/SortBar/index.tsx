import React, { useEffect, useState } from "react";
import type { Brand } from "../../types/brand";

const SortBar: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<number[]>([]);
  useEffect(() => {
    fetch("https://artistic-enthusiasm-production.up.railway.app/api/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data))
      .catch(console.error);
  }, []);
  const toggleBrand = (brand_id: number) => {
    setSelectedBrands((prev) =>
      prev.includes(brand_id)
        ? prev.filter((bid) => bid !== brand_id)
        : [...prev, brand_id]
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Bộ lọc thương hiệu</h2>
      <div style={{ marginBottom: 20 }}>
        {brands.map((b) => (
          <button
            key={b.brand_id}
            onClick={() => toggleBrand(b.brand_id)}
            style={{
              margin: 5,
              padding: "5px 10px",
              fontWeight: selectedBrands.includes(b.brand_id)
                ? "bold"
                : "normal",
              backgroundColor: selectedBrands.includes(b.brand_id)
                ? "#007bff"
                : "#f0f0f0",
              color: selectedBrands.includes(b.brand_id) ? "white" : "black",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            {b.brand_name}
          </button>
        ))}
      </div>

      <h3>Sắp xếp theo giá</h3>
      <div>
        <button className="border rounded p-1 mr-2 mt-2 cursor-pointer hover:bg-gray-200">
          Giá Cao - Thấp
        </button>

        <button className="border rounded p-1 mr-2 cursor-pointer hover:bg-gray-200">
          Giá Thấp - Cao
        </button>
        <button className="border rounded p-1 mr-2 cursor-pointer hover:bg-gray-200">
          Mặc định
        </button>
      </div>
    </div>
  );
};

export default SortBar;
