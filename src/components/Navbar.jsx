import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, FileText } from 'lucide-react';
import { logo } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = ({ menuItems = navLinks }) => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const menuRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    if (toggle) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggle]);

  // Handle active state based on scroll position/route
  useEffect(() => {
    if (toggle) {
      return; // Don't reset active when menu is open
    }
    // Logic to set active based on path can go here if needed
  }, [toggle]);

  // Handle scrolling to section after navigation
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const toggleResume = () => {
    const resumeUrl = '/Ameenur.pdf';
    window.open(resumeUrl);
    setToggle(false);
  };

  const handleNavClick = (e, link) => {
    if (link.children) {
      // Toggle dropdown on mobile, do nothing on desktop (hover handles it)
      e.preventDefault();
      setActiveDropdown(activeDropdown === link.title ? null : link.title);
      return;
    }

    setActive(link.title);
    setToggle(false);
    setActiveDropdown(null);

    // Call custom onClick if provided
    if (link.onClick) {
      link.onClick();
      return;
    }

    if (link.type === 'page') {
      navigate(link.path);
      window.scrollTo(0, 0);
    } else if (link.type === 'section') {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate(`/#${link.id}`);
      } else {
        const element = document.getElementById(link.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  // Render a single menu item (desktop)
  const renderDesktopMenuItem = (link) => {
    const isDropdown = link.children && link.children.length > 0;

    return (
      <li
        key={link.title}
        className="relative group h-full flex items-center"
        onMouseEnter={() => isDropdown && setActiveDropdown(link.title)}
        onMouseLeave={() => isDropdown && setActiveDropdown(null)}
      >
        {link.type === 'page' ? (
          <Link
            to={link.path || '#'}
            className={`${active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-300 flex items-center gap-1 py-4`}
            onClick={(e) => handleNavClick(e, link)}
          >
            {link.title}
            {isDropdown && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
          </Link>
        ) : (
          <a
            href={`/#${link.id}`}
            className={`${active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-300 flex items-center gap-1 py-4`}
            onClick={(e) => handleNavClick(e, link)}
          >
            {link.title}
            {isDropdown && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
          </a>
        )}

        {/* Desktop Dropdown */}
        {isDropdown && (
          <div
            className={`absolute top-full left-0 mt-0 w-48 bg-primary/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl overflow-hidden transition-all duration-300 origin-top transform ${activeDropdown === link.title
              ? 'opacity-100 translate-y-0 scale-100 visible'
              : 'opacity-0 translate-y-2 scale-95 invisible'
              }`}
          >
            <ul className="py-2 flex flex-col">
              {link.children.map((child) => (
                <li key={child.id || child.title}>
                  <Link
                    to={child.path || '#'}
                    className="block px-4 py-3 text-sm text-secondary hover:text-white hover:bg-white/5 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent parent click
                      handleNavClick(e, child);
                    }}
                  >
                    {child.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    );
  };

  // Render a single menu item (mobile)
  const renderMobileMenuItem = (link) => {
    const isDropdown = link.children && link.children.length > 0;
    const isExpanded = activeDropdown === link.title;

    return (
      <li key={link.title} className="w-full border-b border-white/5 last:border-0">
        <div
          className={`flex justify-between items-center w-full py-4 text-[18px] font-medium cursor-pointer transition-colors duration-300 ${active === link.title ? 'text-white' : 'text-secondary'
            }`}
          onClick={(e) => handleNavClick(e, link)}
        >
          {link.type === 'page' ? (
            <Link to={link.path || '#'} className="flex-1" onClick={(e) => isDropdown && e.preventDefault()}>
              {link.title}
            </Link>
          ) : (
            <a href={`/#${link.id}`} className="flex-1" onClick={(e) => isDropdown && e.preventDefault()}>
              {link.title}
            </a>
          )}

          {isDropdown && (
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            />
          )}
        </div>

        {/* Mobile Dropdown (Accordion) */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <ul className="flex flex-col pl-4 pb-2 bg-black/20 rounded-lg mb-2">
            {isDropdown && link.children.map((child) => (
              <li key={child.id || child.title} className="w-full">
                <Link
                  to={child.path || '#'}
                  className="block py-3 text-secondary hover:text-white text-[16px] transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavClick(e, child);
                  }}
                >
                  {child.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  };

  return (
    <nav
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent'
        }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex flex-col sm:flex-row sm:items-center leading-none">
            <span>Ameenur</span>
            <span className="hidden sm:block sm:ml-1 text-[#915EFF]">Rahman</span>
          </p>
        </Link>

        {/* Mobile/Tablet Profile Pic (Hidden on Desktop) */}
        <div className="lg:hidden flex-1 flex justify-end mr-4">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#915EFF]/50">
            <img
              src={logo}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="list-none hidden lg:flex flex-row gap-8 items-center h-full">
          {menuItems.map((link) => renderDesktopMenuItem(link))}

          <li className="ml-4">
            <button
              onClick={toggleResume}
              className="flex items-center gap-2 bg-[#915EFF] hover:bg-[#7e4bd6] text-white px-5 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-purple-500/25"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-white focus:outline-none p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {toggle ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${toggle ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
            }`}
          onClick={() => setToggle(false)}
        />

        {/* Mobile Menu Sidebar */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 h-screen w-[300px] z-50 bg-[#050816] shadow-2xl transform transition-transform duration-300 ease-out lg:hidden flex flex-col ${toggle ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Mobile Header */}
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <span className="text-xl font-bold text-white">Menu</span>
            <button
              onClick={() => setToggle(false)}
              className="text-secondary hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
            <ul className="list-none flex flex-col gap-2">
              {menuItems.map((link) => renderMobileMenuItem(link))}
            </ul>
          </div>

          {/* Mobile Footer (Resume) */}
          <div className="p-6 border-t border-white/10 bg-black/20">
            <button
              onClick={toggleResume}
              className="w-full flex items-center justify-center gap-2 bg-[#915EFF] hover:bg-[#7e4bd6] text-white px-5 py-3 rounded-xl font-bold text-lg transition-all active:scale-95 shadow-lg"
            >
              <FileText className="w-5 h-5" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
