// hooks/usePersistedCart.ts
import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useCartStore, Product } from "../store/cartStore";

export function usePersistedCart() {
  const [storedCart, setStoredCart] = useLocalStorage<Product[]>("cart", []);
  const cart = useCartStore((state) => state.cart);
  const setCart = useCartStore((state) => state.setCart);

  // Al montar, cargamos lo que haya en localStorage
  useEffect(() => {
    setCart(storedCart);
  }, []);

  // Cada vez que cambia el carrito, lo guardamos en localStorage
  useEffect(() => {
    setStoredCart(cart);
  }, [cart]);
}
