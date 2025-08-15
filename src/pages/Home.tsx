import { useCartStore } from "../store/cartStore";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";


const products = [
  { id: 1, name: "Laptop", price: 1200, image: "https://rymportatiles.com.pe/cdn/shop/files/UM5606WA-RJ230W-1.png" },
  { id: 2, name: "Auriculares", price: 200, image: "https://m.media-amazon.com/images/I/51dh4wtJR7L._UF1000,1000_QL80_.jpg" },
  { id: 3, name: "Mouse", price: 50, image: "https://www.impulso.pe/imagenes/galeria/productos/23586-impulso-informatico.webp" },
];

export default function Home() {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-8">Productos</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition flex flex-col items-center text-center"
            >
            <div className="aspect-square w-full overflow-hidden rounded-lg mb-4">
                <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                />
            </div>
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-400">${product.price}</p>
            <button
                onClick={() => addToCart({ ...product, quantity: 1 })}
                className="mt-4 mx-auto flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-500 px-5 py-2 rounded-lg text-white font-medium hover:from-indigo-500 hover:to-blue-400 transition-all duration-300"
            >
                <ShoppingCartIcon className="w-5 h-5" />
                Añadir al carrito
            </button>
            </div>
        ))}
      </div>
    </div>
  );
}
