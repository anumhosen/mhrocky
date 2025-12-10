import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-gray-800 w-[25%] h-full text-white">
            {/* Main Navigation */}
            <nav>
                {/* Logo Section */}
                <Link to="/">
                    <p>Mahabub Hasan Rocky</p>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Navigation Links */}
                <div
                    className={`transition-all duration-300 ease-in-out ${
                        menuOpen ? 'block' : 'hidden'
                    }`}
                >
                    <Link
                        to="/"
                        className={`block px-3 py-2 rounded-lg hover:bg-[#00A8CC] hover:text-teal-300 transition-colors`}
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/contact"
                        className={`block px-3 py-2 rounded-lg hover:bg-[#00A8CC] hover:text-teal-300 transition-colors`}
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </Link>
                    <Link
                        to="/about"
                        className={`block px-3 py-2 rounded-lg hover:bg-[#00A8CC] hover:text-teal-300 transition-colors`}
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
