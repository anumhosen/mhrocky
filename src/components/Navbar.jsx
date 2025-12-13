import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavLinks = () => {
    const links = [
        { to: '/', label: 'About' },
        { to: '/educational-background', label: 'Educational Background' },
        { to: '/teaching-experience', label: 'Teaching Experience' },
        { to: '/research-experience', label: 'Research Experience' },
        { to: '/publications', label: 'Publications' },
        { to: '/conferences', label: 'Conferences' },
        { to: '/technical-skills', label: 'Technical Skills' },
        { to: '/references', label: 'References' },
    ];

    return (
        <>
            <h1 className='text-3xl'>Curriculum Vitae</h1>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={link.to}
                    className='block mt-4 hover:text-blue-500 hover:translate-x-4 duration-300'
                    onClick={() => setMenuOpen(false)}
                >
                    {link.label}
                </Link>
            ))}
        </>
    );
};

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            {/* Mobile Menu Button */}
            <button
                className='absolute top-4 right-4 z-50 md:hidden text-2xl focus:outline-none text-white'
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label='Toggle menu'
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            {/* Main Navigation */}
            <nav className='fixed  md:w-[25%] w-full text-white'>
                <div className='px-4 lg:px-8 py-8 hidden md:block bg-[#081826] h-screen'>
                    <NavLinks />
                </div>

                {/*Mobile Navigation Links */}
                <div
                    className={`p-8 bg-[#081826] h-screen transition-all duration-300 ease-in-out ${
                        menuOpen ? 'block' : 'hidden'
                    }`}
                >
                    <NavLinks />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
