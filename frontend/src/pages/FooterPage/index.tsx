const FooterPage = () => {
  return (
    <>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚚</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Giao Hàng Miễn Phí
              </h4>
              <p className="text-gray-600">
                Miễn phí giao hàng toàn quốc cho đơn hàng trên 5 triệu
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Bảo Hành Chính Hãng
              </h4>
              <p className="text-gray-600">
                Bảo hành chính hãng 12 tháng, đổi mới trong 7 ngày
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💳</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Trả Góp 0%
              </h4>
              <p className="text-gray-600">
                Hỗ trợ trả góp 0% lãi suất qua thẻ tín dụng
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-xl font-bold mb-4">PhoneStore Pro</h5>
              <p id="footer-text" className="text-gray-400">
                Cửa hàng điện thoại uy tín hàng đầu Việt Nam. Chất lượng - Uy
                tín - Giá tốt.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Sản Phẩm</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    iPhone
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Samsung
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Xiaomi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Oppo
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Hỗ Trợ</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Chính sách bảo hành
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Hướng dẫn mua hàng
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Chính sách đổi trả
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Liên Hệ</h5>
              <div className="space-y-2 text-gray-400">
                <p>📍 123 Nguyễn Văn Cừ, Q.1, TP.HCM</p>
                <p>📞 1900 1234</p>
                <p>✉️ info@phonestorepro.vn</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 PhoneStore Pro. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default FooterPage;
