import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface Dish {
  id: number;
  name: string;
  desc: string;
  price: number;
  category: string;
  img: string;
}

interface CartContextType {
  cartlist: Dish[];
  favorites: Dish[];
  addToCartlist: (dish: Dish) => void;
  removeFromCartlist: (id: number) => void;
  addToFavorites: (dish: Dish) => void;
  removeFromFavorites: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartlist, setCartlist] = useState<Dish[]>([]);
  const [favorites, setFavorites] = useState<Dish[]>([]);

  useEffect(() => {
    const storedCartlist = localStorage.getItem("cartlist");
    const storedFavorites = localStorage.getItem("favorites");
    if (storedCartlist) {
      setCartlist(JSON.parse(storedCartlist));
    }
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartlist", JSON.stringify(cartlist));
  }, [cartlist]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToCartlist = (dish: Dish) => {
    if (!cartlist.find((item) => item.id === dish.id)) {
      setCartlist((prev) => [...prev, dish]);
    }
  };

  const removeFromCartlist = (id: number) => {
    setCartlist((prev) => prev.filter((item) => item.id !== id));
  };

  const addToFavorites = (dish: Dish) => {
    if (!favorites.find((item) => item.id === dish.id)) {
      setFavorites((prev) => [...prev, dish]);
    }
  };

  const removeFromFavorites = (id: number) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartlist,
        favorites,
        addToCartlist,
        removeFromCartlist,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
