import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart, ShoppingCart } from "lucide-react";
import Button from "./Button";
import { useCart } from "../context/CartContext";

interface Dish {
  id: number;
  name: string;
  desc: string;
  price: number;
  category: string;
  img: string;
}

interface HeroProps {
  products: Dish[];
  title: string;
  cardsPerView?: number;
}

const Hero: React.FC<HeroProps> = ({
  products,
  title,
  cardsPerView: propCardsPerView = 3,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(propCardsPerView);
  const {
    cartlist,
    // favorites,
    addToCartlist,
    removeFromCartlist,
    // addToFavorites,
    // removeFromFavorites,
  } = useCart();

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsPerView(1);
      } else if (width < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(propCardsPerView);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, [propCardsPerView]);

  const total = products.length;
  const maxIndex = Math.max(0, total - cardsPerView);

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const isInCartlist = (id: number) => cartlist.some((item) => item.id === id);
  // const isInFavorites = (id: number) =>
  //   favorites.some((item) => item.id === id);

  return (
    <section className="relative bg-center h-[80vh] flex flex-col justify-center py-8 ">
      <div className="absolute inset-0 bg-black bg-opacity-60 "></div>
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold pb-8 mt-10 text-start">
          {title}
        </h2>
        <div className="relative overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {products.map((dish: Dish) => (
              <div
                key={dish.id}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <div className="bg-white bg-opacity-95 rounded-xl p-6 text-gray-900 shadow-xl h-full relative transition-all duration-300 hover:shadow-2xl hover:scale-105">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="w-full h-80 object-cover rounded-md mb-4"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-semibold mb-2 mt-2 text-gray-800 ">
                    {dish.name}
                  </h3>
                  <p className="text-sm mb-4">{dish.desc}</p>
                  <div className="flex justify-between items-center mb-4">
                    <Button
                      dish={dish}
                      isInCart={isInCartlist(dish.id)}
                      onCartToggle={(dishItem) => {
                        if (isInCartlist(dish.id)) {
                          removeFromCartlist(dish.id);
                        } else {
                          addToCartlist(dish);
                        }
                      }}
                    >
                      {dish.price
                        .toString()
                        .replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d])}
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
                        className={`p-2 rounded-full ${isInCartlist(dish.id) ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}
                        aria-label={
                          isInCartlist(dish.id)
                            ? `إزالة ${dish.name} من السلة`
                            : `إضافة ${dish.name} إلى السلة`
                        }
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
                        className={`p-2 rounded-full ${isInFavorites(dish.id) ? "bg-red-500 text-white" : "bg-gray-200 text-gray-600"}`}
                        aria-label={
                          isInFavorites(dish.id)
                            ? `إزالة ${dish.name} من المفضلة`
                            : `إضافة ${dish.name} إلى المفضلة`
                        }
                      >
                        <Heart size={16} />
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-[#8dc88c] bg-opacity-70 hover:bg-opacity-90 transition disabled:opacity-50"
            aria-label="السابق"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-[#8dc88c] bg-opacity-70 hover:bg-opacity-90 transition disabled:opacity-50"
            aria-label="التالي"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
