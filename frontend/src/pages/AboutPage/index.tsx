import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Banner */}
      <div className="relative h-64 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Giới thiệu về chúng tôi
        </h1>
      </div>

      {/* Nội dung */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Phần 1: Giới thiệu */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Về cửa hàng</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Chúng tôi là <span className="font-semibold">PhoneStore</span>, cửa
            hàng chuyên cung cấp các dòng điện thoại chính hãng, giá tốt nhất
            thị trường. Với hơn{" "}
            <span className="text-blue-600 font-semibold">
              5 năm kinh nghiệm
            </span>
            , chúng tôi luôn đặt chất lượng và uy tín lên hàng đầu.
          </p>
        </section>

        {/* Phần 2: Sứ mệnh */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            alt="Sứ mệnh"
            className="rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Sứ mệnh của chúng tôi
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Sứ mệnh của chúng tôi là mang đến cho khách hàng những sản phẩm
              công nghệ hiện đại nhất với mức giá hợp lý, cùng dịch vụ chăm sóc
              khách hàng tận tình và chuyên nghiệp.
            </p>
          </div>
        </section>

        {/* Phần 3: Đội ngũ */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Đội ngũ của chúng tôi
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Nguyễn Văn A",
                role: "CEO",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Trần Thị B",
                role: "Chăm sóc khách hàng",
                img: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "Lê Văn C",
                role: "Kỹ thuật viên",
                img: "https://randomuser.me/api/portraits/men/65.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500"
                />
                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
