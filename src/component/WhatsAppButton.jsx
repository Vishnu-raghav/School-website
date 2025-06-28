import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919911733387"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[9999] bg-green-500 text-white rounded-full shadow-xl p-4 flex items-center justify-center animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsAppButton;

