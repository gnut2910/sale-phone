import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Banner */}
      <div className="relative h-56 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Liên hệ với chúng tôi
        </h1>
      </div>

      {/* Nội dung */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
        {/* Form liên hệ */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Gửi tin nhắn
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Họ và tên</label>
              <input
                type="text"
                placeholder="Nhập họ tên..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                placeholder="Nhập email..."
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Tin nhắn</label>
              <textarea
                placeholder="Viết tin nhắn của bạn..."
                rows={4}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold"
            >
              Gửi tin nhắn
            </button>
          </form>
        </div>

        {/* Thông tin liên hệ + bản đồ */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Thông tin liên hệ
            </h2>
            <p className="text-gray-600 mb-2">
              📍 Địa chỉ: 123 Nguyễn Văn Cừ, Q.1, TP.HCM
            </p>
            <p className="text-gray-600 mb-2">📞 Điện thoại: 1900 1234</p>
            <p className="text-gray-600">✉️ Email: support@phonestore.com</p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0086994389883!2d105.8194541750312!3d21.033781587661513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab95b0cbbc9b%3A0xe4ff7a82a0f1d5f5!2zMTIzIE5ndXnhu4VuIFRyw6NpLCBIYWkgQ2jDrSBNaW5oLCBIw6AgTuG7mWkgMTAwMDA!5e0!3m2!1svi!2s!4v1697975800000!5m2!1svi!2s"
              width="100%"
              height="300"
              allowFullScreen
              loading="lazy"
              className="w-full h-72"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
