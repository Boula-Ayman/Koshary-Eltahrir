import React from "react";
import { useCart } from "../context/CartContext";
import Button from "../components/Button";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import Layout from "../components/Layout";

const Cart: React.FC = () => {
  const { cartlist, favorites, removeFromCartlist } = useCart();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-block mb-6 bg-[#8dc88c]  text-gray-700 p-2 rounded-full"
          title="Back to Main Page"
        >
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-3xl font-bold mb-8">السلة</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">السلة</h2>
          {cartlist.length === 0 ? (
            <p>لا توجد عناصر في السلة.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cartlist.map((dish) => (
                <div
                  key={dish.id}
                  className="bg-white rounded-lg p-4 shadow-lg"
                >
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.desc}</p>
                  <div className="flex justify-between items-center">
                    <Button>{dish.price}</Button>
                    <button
                      onClick={() => removeFromCartlist(dish.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      إزالة
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* <div>
          <h2 className="text-2xl font-semibold mb-4">المفضلة</h2>
          {favorites.length === 0 ? (
            <p>لا توجد عناصر في المفضلة.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {favorites.map((dish) => (
                <div
                  key={dish.id}
                  className="bg-white rounded-lg p-4 shadow-lg"
                >
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.desc}</p>
                  <div className="flex justify-between items-center">
                    <Button>{dish.price}</Button>
                    <button
                      onClick={() => removeFromFavorites(dish.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      إزالة
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div> */}
      </div>
    </Layout>
  );
};

export default Cart;
