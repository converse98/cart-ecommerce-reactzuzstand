// store/cartStore.ts
import { create } from "zustand";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  setCart: (cart: Product[]) => void; // 👈 aquí añadimos setCart
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const exists = state.cart.find((p) => p.id === product.id);
      if (exists) {
        return {
          cart: state.cart.map((p) =>
            p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
      }
      return { cart: [...state.cart, product] };
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((p) => p.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
  setCart: (cart) => set({ cart }), // 👈 implementación de setCart
}));
