import { TrashIcon } from "@heroicons/react/24/outline";

interface CartItemProps {
  name: string;
  price: number;
  quantity: number;
  image: string;
  onRemove: () => void;
}

export default function CartItem({ name, price, quantity, image, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center justify-between bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4">
      <div className="flex items-center gap-4">
        <img src={image} alt={name} className="w-16 h-16 object-cover rounded-lg" />
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-gray-300">${price} x {quantity}</p>
        </div>
      </div>
      <button onClick={onRemove} className="text-red-400 hover:text-red-500">
        <TrashIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
