import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { usePersistedCart } from "./hooks/usePersistedCart"; // 👈 importa el hook


export default function App() {
  usePersistedCart();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-white/5 backdrop-blur-md border-b border-white/10">
        <Link to="/" className="text-xl font-bold tracking-wide hover:text-teal-400 transition">
          🛒 Mi E-Commerce
        </Link>
        <div className="space-x-6">
          <Link
            to="/"
            className="hover:text-teal-300 transition"
          >
            Productos
          </Link>
          <Link
            to="/cart"
            className="hover:text-teal-300 transition"
          >
            Carrito
          </Link>
        </div>
      </nav>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
