import React, { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import Button from "../components/Button";
import { useCart } from "../context/CartContext";
import { AllProducts, DISHES, Additions, Drinks, Desserts } from "~/utils/data";
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

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = AllProducts.filter(
    (dish) =>
      dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dish.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [
    {
      name: "الأطباق الرئيسية",
      data: filteredProducts.filter((dish) => dish.id >= 1 && dish.id <= 6),
      icon: "🍽️",
    },
    {
      name: "الإضافات",
      data: filteredProducts.filter((dish) => dish.id >= 7 && dish.id <= 12),
      icon: "🥄",
    },
    {
      name: "المشروبات",
      data: filteredProducts.filter((dish) => dish.id >= 13 && dish.id <= 18),
      icon: "🥤",
    },
    {
      name: "الحلويات",
      data: filteredProducts.filter((dish) => dish.id >= 19 && dish.id <= 23),
      icon: "🍰",
    },
  ];

  const isInCartlist = (id: number) => cartlist.some((item) => item.id === id);
  const isInFavorites = (id: number) =>
    favorites.some((item) => item.id === id);

  return (
    <Layout>
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-enhanced">
          <div className="mb-12 text-center">
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              className="w-full max-w-lg p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent shadow-sm transition-all duration-300 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-gray-800">
            قائمتنا
          </h2>
          {categories.map(
            (category, categoryIndex) =>
              category.data.length > 0 && (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                  className="mb-16"
                >
                  <div className="flex items-center justify-center mb-8">
                    <div className="flex items-center space-x-4 bg-gradient-to-r from-green-100 to-green-200 px-6 py-3 rounded-full shadow-lg">
                      <span className="text-3xl">{category.icon}</span>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {category.name}
                      </h3>
                      <span className="text-3xl">{category.icon}</span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-100 to-transparent opacity-30 rounded-lg"></div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: categoryIndex * 0.3 }}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10 p-6"
                    >
                      {category.data.map((dish, index) => (
                        <motion.div
                          key={dish.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="card-enhanced transition-all duration-300"
                        >
                          <img
                            src={dish.img}
                            alt={dish.name}
                            className="w-full h-48 object-cover rounded-t-lg mb-4"
                          />
                          <h4 className="text-xl font-bold mb-3 text-gray-800 text-center">
                            {dish.name}
                          </h4>
                          <p className="text-gray-600 mb-6 text-center text-sm leading-relaxed">
                            {dish.desc}
                          </p>
                          <div className="flex justify-center">
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
                              {dish.price
                                .toString()
                                .replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d])}
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              )
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
