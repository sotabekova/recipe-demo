import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#43695D] text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Italian Recipes</h3>
          <p className="text-sm text-gray-200">
            Discover authentic Italian flavors, crafted with love and tradition.
            Cook, taste, and enjoy every bite 🇮🇹
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-[#A4C3B2] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/italian" className="hover:text-[#A4C3B2] transition">
                Italian
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#A4C3B2] transition">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Social / Info */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Follow Us</h4>
          <p className="text-sm text-gray-200 mb-3">
            Get more recipes and cooking inspiration.
          </p>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-[#A4C3B2] transition">
              Instagram
            </span>
            <span className="cursor-pointer hover:text-[#A4C3B2] transition">
              Pinterest
            </span>
            <span className="cursor-pointer hover:text-[#A4C3B2] transition">
              YouTube
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 text-center py-4 text-sm text-gray-200">
        © {new Date().getFullYear()} Italian Recipes. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
