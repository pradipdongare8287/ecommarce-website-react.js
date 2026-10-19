import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
        <footer className="bg-gray-900 text-white mt-45">

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-pink-500 mb-4">
            My<span className="text-white">Website</span>
          </h2>

          <p className="text-gray-400 leading-7">
            We create modern and responsive websites
            using the latest web technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <Link to={"/"} className="hover:text-pink-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="hover:text-pink-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link to={"/products"} className="hover:text-pink-500 transition">
                Products
              </Link>
            </li>
            <li>
              <Link to={"/login"} className="hover:text-pink-500 transition">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Our Services
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Web Development</li>
            <li>Web Design</li>
            <li>React JS</li>
            <li>UI / UX Design</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Contact Us
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Email: info@example.com</li>
            <li>Phone: +91 9876543210</li>
            <li>Location: Maharashtra, India</li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 px-6 py-5 text-center text-gray-400">
        <p>
          © 2026 MyWebsite. All rights reserved.
        </p>
      </div>

    </footer>
        </>
    )
}
export default Footer;