
import { Link } from "react-router-dom";
import { useState } from "react";
import { RiShoppingCart2Fill, RiUserFill } from "@remixicon/react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-9999">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <div className="text-2xl font-bold text-pink-600">
          My<span className="text-gray-900">Website</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-pink-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-pink-600">About</Link></li>
          <li><Link to="/contact" className="hover:text-pink-600">Contact</Link></li>
          <li><Link to="/products" className="hover:text-pink-600">Products</Link></li>
        </ul>

        {/* Desktop Buttons */}
        {
          localStorage.getItem('token') ? 
          <div className="hidden md:flex gap-3">
          <Link to="/cart" className="bg-pink-600 text-white px-5 py-2 rounded-full">
            <RiShoppingCart2Fill />
          </Link>
          <Link to="/User_info" className="bg-blue-600 text-white px-5 py-2 rounded-full">
            <RiUserFill />
          </Link>
          </div> : 
          <div className="hidden md:flex gap-3">
          <Link to="/register_new_user" className="bg-pink-600 text-white px-5 py-2 rounded-full">
            Register
          </Link>
          <Link to="/login" className="bg-blue-600 text-white px-5 py-2 rounded-full">
            Login
          </Link>
          </div> 
        }

        {/* Mobile / Tablet Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-pink-600"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile / Tablet Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/card" onClick={() => setMenuOpen(false)}>Card</Link></li>
            <li>
              <Link to="/register" onClick={() => setMenuOpen(false)}
                className="inline-block bg-pink-600 text-white px-5 py-2 rounded-full">
                Register
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={() => setMenuOpen(false)}
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full">
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
