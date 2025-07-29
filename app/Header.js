'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { config } from './config';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { name } = config.companyDetails;
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '/', label: 'Home' ,icon: '🏠'},
    { href: '/about', label: 'About' , icon: 'ℹ️'},
    { href: '/#services', label: 'Services', icon: '🛠️' },
    { href: '/contact', label: 'Contact', icon: '📞' },
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo-container">
            <Link style={{textDecoration: "none"}} href="/">
              <div className="logo-wrapper">
                <img 
                  src="/logo.jpeg" 
                  alt="Company Logo" 
                  className="logo-image"
                />
                <span className="logo">{name}</span>
              </div>
            </Link>
          </div>

          <nav className="desktop-nav">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link style={{textDecoration : "none"}}
                    href={item.href} 
                  >
                      <span className="icon-button">{item.icon}</span>
                      {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button 
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={isMenuOpen ? 'open' : ''}></span>
            <span className={isMenuOpen ? 'open' : ''}></span>
            <span className={isMenuOpen ? 'open' : ''}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            {navItems.map((item) => (
                <Link style={{textDecoration : "none"}}
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                <li key={item.href}>
                  <span className="icon-button mobile">{item.icon}</span> {item.label}
                </li>
                </Link>
            ))}
          </ul>
        </div>
      </header>

      <style jsx>{`
        .logo-container {
          display: flex;
          align-items: center;
        }
        
        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .logo-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }
        
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
          
        .logo {
          text-decoration: none;
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: opacity 0.3s ease;
        }

        .logo:hover {
          color: #764ba2;
          opacity: 0.8;
        }

        .desktop-nav ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 2rem;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .icon-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
          margin-right: 8px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .icon-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }

        .icon-button.mobile {
          width: 28px;
          height: 28px;
          font-size: 0.9rem;
        }

        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          justify-content: space-around;
          width: 30px;
          height: 30px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .mobile-menu-toggle span {
          width: 100%;
          height: 3px;
          background: #333;
          border-radius: 3px;
          transition: all 0.3s ease;
          transform-origin: 1px;
        }

        .mobile-menu-toggle span.open:nth-child(1) {
          transform: rotate(45deg);
        }

        .mobile-menu-toggle span.open:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-toggle span.open:nth-child(3) {
          transform: rotate(-45deg);
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .mobile-menu.open {
          max-height: 400px;
        }

        .mobile-menu ul {
          list-style: none;
          margin: 0;
          padding: 1rem 0;
        }

        .mobile-menu li {
          padding: 0.75rem 2rem;
        }

        .mobile-menu a {
          display: flex;
          align-items: center;
          color: #333;
          text-decoration: none;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .header-container {
            padding: 1rem;
          }

          .desktop-nav {
            display: none;
          }

          .mobile-menu-toggle {
            display: flex;
          }

          .logo {
            font-size: 1.5rem;
          }
          
          .logo-wrapper {
            gap: 0.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Header;