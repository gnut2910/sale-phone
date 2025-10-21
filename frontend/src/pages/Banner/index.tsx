import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <section className="relative bg-gray-100">
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Điện thoại mới nhất <br /> với giá cực sốc!
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Khám phá ngay bộ sưu tập smartphone 2025. Giảm giá đến{" "}
            <span className="font-bold text-red-500">30%</span>.
          </motion.p>

          <motion.div
            className="mt-6 flex justify-center md:justify-start space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition"
            >
              Mua ngay
            </Link>
            <Link
              to="/about"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
            >
              Xem chi tiết
            </Link>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          className="flex-1 mt-8 md:mt-0 flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <img
            src="/images/banner.jpg"
            alt="Smartphone Banner"
            className="w-80 md:w-[720px] rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
