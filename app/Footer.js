'use client'
import Link from 'next/link';
import {config} from './config';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { name } = config.companyDetails;
  const footerSections = {
    company: {
      title: '',
      links: [
        // { href: '/about', label: 'About Us' },
        // { href: '/careers', label: 'Careers' },
        // { href: '/news', label: 'News' },
        // { href: '/investors', label: 'Investors' },
      ]
    },
  };

  const socialLinks = [
    { href: 'https://twitter.com', label: 'Twitter', icon: '𝕏' },
    { href: 'https://facebook.com', label: 'Facebook', icon: '📘' },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: '💼' },
    { href: 'https://github.com', label: 'GitHub', icon: '🐱' },
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <p className="footer-description">
                Building amazing digital experiences with cutting-edge technology. 
                We help businesses grow through innovative web solutions.
              </p>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <Link
                    style={{textDecoration : "none"}}
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="social-link"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key} className="footer-section">
                <h3>{section.title}</h3>
                <ul>
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; {currentYear} {name}. All rights reserved.</p>
              <div className="footer-bottom-links">
                <Link href="/privacy">Privacy</Link>
                <Link href="/terms">Terms</Link>
                <Link href="/cookies">Cookies</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
          margin-top: auto;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 2rem 0;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 2rem;
          padding-bottom: 2rem;
        }

        .footer-brand {
          max-width: 300px;
        }

        .footer-description {
          color: white;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          text-decoration: none;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: rgba(102, 126, 234, 0.3);
          transform: translateY(-2px);
        }

        .footer-section h3 {
          color: #667eea;
          margin-bottom: 1rem;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .footer-section ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .footer-section li {
          margin-bottom: 0.5rem;
        }

        .footer-section a {
          color: #bdc3c7;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-section a:hover {
          color: #667eea;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem 0;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #95a5a6;
          font-size: 0.9rem;
        }

        .footer-bottom-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-bottom-links a {
          color: #95a5a6;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-bottom-links a:hover {
          color: #667eea;
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 1.5rem;
          }

          .footer-brand {
            grid-column: 1 / -1;
            max-width: none;
            margin-bottom: 1rem;
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            padding: 2rem 1rem 0;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .footer-brand {
            text-align: center;
          }

          .footer-bottom-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .footer-bottom-links {
            gap: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
