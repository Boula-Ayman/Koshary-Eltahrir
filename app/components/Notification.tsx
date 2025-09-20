import React, { useEffect } from "react";
import { CheckCircle, XCircle } from "lucide-react";

interface NotificationProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  message,
  type,
  isVisible,
  onClose,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Auto close after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
      <div
        className={`flex items-center space-x-3 px-6 py-4 rounded-xl shadow-lg border-l-4 ${
          type === "success"
            ? "bg-green-50 border-green-500 text-green-800"
            : "bg-red-50 border-red-500 text-red-800"
        }`}
      >
        {type === "success" ? (
          <CheckCircle size={24} className="text-green-600" />
        ) : (
          <XCircle size={24} className="text-red-600" />
        )}
        <p className="font-semibold text-sm">{message}</p>
        <button
          onClick={onClose}
          className="ml-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <XCircle size={20} />
        </button>
      </div>
    </div>
  );
};

export default Notification;
