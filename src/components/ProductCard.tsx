import { motion } from "framer-motion";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "../hooks/useCart";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function ProductCard({ id, name, price, image }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id, // si no tienes id real, usa name o genera uno
      name,
      price,
      image,
      quantity: 1,
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-lg flex flex-col items-center"
    >
      <img src={image} alt={name} className="w-48 h-48 object-cover rounded-lg" />
      <h3 className="text-xl font-semibold mt-4 text-white">{name}</h3>
      <p className="text-gray-300">${price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-3 flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-pink-500 px-4 py-2 rounded-lg text-white font-medium hover:scale-105 transition-transform"
      >
        <ShoppingCartIcon className="w-5 h-5" />
        Añadir
      </button>
    </motion.div>
  );
}
