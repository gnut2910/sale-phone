import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/store/store.ts";
import { removeFromCart, updateQuantity } from "../../redux/features/cartSlice";

const CartPage: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">🛒 Giỏ hàng</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-600">Giỏ hàng của bạn đang trống!</p>
          <Link
            to="/"
            className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Tiếp tục mua sắm
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {/* Danh sách sản phẩm */}
          <div className="col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center border rounded-lg p-4 shadow"
              >
                <img
                  src={`https://artistic-enthusiasm-production.up.railway.app${item.image_url}`}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-600">
                    {Number(item.price).toLocaleString("vi-VN")} VND
                  </p>
                  <div className="flex items-center mt-2">
                    <button
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700 ml-4"
                >
                  Xóa
                </button>
              </div>
            ))}
          </div>

          {/* Thanh toán */}
          <div className="border rounded-lg p-6 shadow h-fit">
            <h2 className="text-xl font-bold mb-4">Tóm tắt đơn hàng</h2>
            <div className="flex justify-between mb-2">
              <span>Tạm tính</span>
              <span>{totalPrice.toLocaleString("vi-VN")} VND</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Tổng cộng</span>
              <span>{totalPrice.toLocaleString("vi-VN")} VND</span>
            </div>
            <button className="w-full mt-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Thanh toán
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
