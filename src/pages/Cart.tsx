import { useCartStore } from "../store/cartStore";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCartStore();

  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-8">Carrito de compras</h1>
      {cart.length === 0 ? (
        <p className="text-gray-400">Tu carrito está vacío</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="bg-gray-800 p-4 rounded-xl flex justify-between items-center"
              >
                <div>
                  <h2 className="font-bold">{item.name}</h2>
                  <p className="text-gray-400">
                    {item.quantity} x ${item.price}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={clearCart}
            className="mt-6 bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}
