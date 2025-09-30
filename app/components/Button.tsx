import React, { useState } from "react";
import Notification from "./Notification";

interface ButtonProps {
  children: React.ReactNode;
  dish: Dish;
  isInCart: boolean;
  onCartToggle: (dish: Dish) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  dish,
  isInCart,
  onCartToggle,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState<"success" | "error">(
    "success"
  );

  const handleClick = () => {
    setIsClicked(true);
    onCartToggle(dish);

    // Show notification
    if (isInCart) {
      setNotificationMessage(`تم حذف "${dish.name}" من السلة`);
      setNotificationType("error");
    } else {
      setNotificationMessage(`تم حفظ "${dish.name}" في السلة`);
      setNotificationType("success");
    }
    setShowNotification(true);

    // reset click state
    setTimeout(() => setIsClicked(false), 300);
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`${
          isClicked
            ? "bg-gradient-to-br from-green-400 to-green-600 text-white"
            : "bg-white text-gray-600"
        } border-2 border-[#8dc88c]
          hover:bg-gradient-to-br hover:from-green-400 hover:to-green-600 hover:text-white font-semibold
          py-3 px-6 rounded-2xl shadow-lg transition-all duration-300
          ease-in-out transform hover:scale-105 hover:shadow-xl capitalize`}
      >
        {children}
      </button>

      <Notification
        message={notificationMessage}
        type={notificationType}
        isVisible={showNotification}
        onClose={closeNotification}
      />
    </>
  );
};

export default Button;
