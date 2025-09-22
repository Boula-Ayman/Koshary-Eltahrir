import React from "react";
import { Heart, ShoppingCart } from "lucide-react";
import Button from "../components/Button";
import { useCart } from "../context/CartContext";
import { DISHES, Additions, Drinks } from "~/utils/data";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

const Menu: React.FC = () => {
  const {
    cartlist,
    favorites,
    addToCartlist,
    removeFromCartlist,
    addToFavorites,
    removeFromFavorites,
  } = useCart();

  const allProducts = [...DISHES, ...Additions, ...Drinks];

  const isInCartlist = (id: number) => cartlist.some((item) => item.id === id);
  const isInFavorites = (id: number) =>
    favorites.some((item) => item.id === id);

  return (
    <Layout>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">قائمتنا</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {allProducts.map((dish) => (
              <div key={dish.id} className="bg-white rounded-lg p-4 shadow-lg">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-66 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-gray-800 text-center">
                  {dish.name}
                </h3>
                <p className="text-gray-600 mb-4 text-center">{dish.desc}</p>
                <div className="flex justify-between items-center">
                  <Button
                    dish={dish}
                    isInCart={isInCartlist(dish.id)}
                    onCartToggle={(dishItem) => {
                      if (isInCartlist(dishItem.id)) {
                        removeFromCartlist(dishItem.id);
                      } else {
                        addToCartlist(dishItem);
                      }
                    }}
                  >
                    {dish.price}
                  </Button>
                  {/* <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        if (isInCartlist(dish.id)) {
                          removeFromCartlist(dish.id);
                        } else {
                          addToCartlist(dish);
                        }
                      }}
                      className={`p-2 rounded-full ${
                        isInCartlist(dish.id)
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      <ShoppingCart size={16} />
                    </button>
                    <button
                      onClick={() => {
                        if (isInFavorites(dish.id)) {
                          removeFromFavorites(dish.id);
                        } else {
                          addToFavorites(dish);
                        }
                      }}
                      className={`p-2 rounded-full ${
                        isInFavorites(dish.id)
                          ? "bg-red-500 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      <Heart size={16} />
                    </button>
                  </div> */}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
