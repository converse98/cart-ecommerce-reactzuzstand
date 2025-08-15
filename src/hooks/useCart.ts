import { useCartStore } from "../store/cartStore";

export function useCart() {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice
  };
}
