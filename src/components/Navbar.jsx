import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleResume = () => {
    const resumeUrl = '/Ameenur.pdf';
    window.open(resumeUrl);
  };

  useEffect(() => {
    if (toggle) {
      setActive('');
    }
  }, [toggle]);

  // Handle scrolling to section after navigation (for anchor links)
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

  /**
   * Handle navigation click - works for both pages and sections
   * @param {Event} e - Click event
   * @param {Object} link - Navigation link object from navLinks config
   * @param {boolean} isSecondary - Whether this is the mobile menu
   */
  const handleNavClick = (e, link, isSecondary) => {
    setActive(link.title);
    if (isSecondary) {
      setToggle(false);
    }

    // Handle based on link type (page or section)
    if (link.type === 'page') {
      // Navigate to the page route
      navigate(link.path);
    } else if (link.type === 'section') {
      // For section links, scroll to section or navigate to home first
      e.preventDefault();
      if (location.pathname !== '/') {
        // If not on home page, navigate to home with hash
        navigate(`/#${link.id}`);
      } else {
        // If on home page, just scroll to section
        const element = document.getElementById(link.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  /**
   * Render navigation links - uses navLinks config to determine link type
   * @param {boolean} isSecondary - Whether to render for mobile menu
   */
  const renderNavLinks = (isSecondary) => (
    <ul className={`list-none ${isSecondary ? 'flex sm:hidden' : 'hidden sm:flex'} flex-row gap-6`}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${active === link.title ? 'text-[#915EFF]' : isSecondary ? 'text-secondary' : 'text-zinc-300'
            } hover:text-[#915EFF] text-[18px] font-medium cursor-pointer transition-colors duration-300`}
        >
          {link.type === 'page' ? (
            // Page links use React Router Link
            <Link to={link.path} onClick={(e) => handleNavClick(e, link, isSecondary)}>
              {link.title}
            </Link>
          ) : (
            // Section links use anchor tags
            <a href={`/#${link.id}`} onClick={(e) => handleNavClick(e, link, isSecondary)}>
              {link.title}
            </a>
          )}
        </li>
      ))}
      <li
        className={`${isSecondary ? 'text-secondary' : 'text-zinc-300'
          } hover:text-[#915EFF] text-[18px] font-medium cursor-pointer transition-colors duration-300`}
      >
        <button onClick={toggleResume}>Resume</button>
      </li>
    </ul>
  );

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary/80 backdrop-blur-md border-b border-white/10`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-cover rounded-full" />
            <p className="text-white text-[20px] font-bold cursor-pointer flex">
              Ameenur&nbsp;
              <span className="sm:block hidden">Rahman</span>
            </p>
          </Link>
          {renderNavLinks(false)}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[18px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`p-4 black-gradient absolute top-14 right-0 mx-2 my-2 min-w-[120px] z-10 rounded-xl foggy-glass ${toggle ? 'flex' : 'hidden'
                }`}
            >
              {renderNavLinks(true)}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
