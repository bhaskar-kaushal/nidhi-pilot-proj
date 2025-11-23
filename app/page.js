'use client'
import Link from 'next/link';
import { config } from './config';

const HomePage = () => {
  const { homeHeading, homeSubheading, contactNumber, services, testimonials, stats} = config;
  const { clients, yearsOfExperience} = config.companyDetails;

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>{homeHeading}</h1>
              <p className="hero-subtitle">
                {homeSubheading}
              </p>
              <div className="hero-cta">
                <Link style={{textDecoration : "none"}} href="/contact" >
                 <span className="btn-primary"> Get Free Consultation </span>
                </Link>
                <Link style={{textDecoration : "none"}} href="/about">
                <span className="btn-primary"> Learn More </span>
                </Link>
              </div>
              <div className="hero-features">
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>ICAI Certified Professionals</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>{yearsOfExperience.charAt(0).toUpperCase() + String(yearsOfExperience).slice(1)} experience across sectors </span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>{clients}+ Satisfied Clients</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-card">
                <div className="card-header">
                  <div className="card-title">Professional Excellence</div>
                </div>
                <div className="card-stats">
                  <div className="stat">
                    <div className="stat-number">{clients}</div>
                    <div className="stat-label">Client Satisfaction</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Professional Services</h2>
            <p>Comprehensive financial solutions tailored to your business needs</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link href="/contact" className="service-link">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Trusted by businesses across various industries</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <div className="stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p>{"\""}{testimonial.feedback}{"\""}</p>
                </div>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Financial Future?</h2>
            <p>Schedule a free consultation with our trusted chartered accountants today</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn-primary" style={{textDecoration: "none"}}>
                <span className='btn-primary'> Schedule Consultation </span>
              </Link>
              <div className="cta-contact">
                <span>Or call us directly:</span>
                <a href="tel:{contactNumber.replace(/\s/g, '')}" className="phone-link">{contactNumber}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
          padding: 4rem 0 4rem;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.03)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.03)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          opacity: 0.1;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-text h1 {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          line-height: 1.6;
          margin-bottom: 2.5rem;
          opacity: 0.9;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .btn-primary {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .btn-primary:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          border: 2px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .hero-features {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .feature-icon {
          background: rgba(255, 255, 255, 0.2);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        .hero-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .card-header {
          margin-bottom: 1.5rem;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 600;
          text-align: center;
        }

        .card-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.8rem;
          opacity: 0.8;
        }

        .services {
          padding: 6rem 0;
          background: #f8f9fa;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .section-header p {
          font-size: 1.2rem;
          color: #6c757d;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: white;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }

        .service-card h3 {
          color: #2c3e50;
          font-size: 1.4rem;
          margin-bottom: 1rem;
        }

        .service-card p {
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .service-features {
          list-style: none;
          margin: 0 0 1.5rem 0;
          padding: 0;
        }

        .service-features li {
          color: #5a6c7d;
          margin-bottom: 0.5rem;
          position: relative;
          padding-left: 1.5rem;
        }

        .service-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: bold;
        }

        .service-link {
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .service-link:hover {
          color: #764ba2;
        }

        .stats {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
          padding: 4rem 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .stat-item {
          text-align: center;
        }

        .stats .stat-number {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: #fff;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stats .stat-label {
          font-size: 1.1rem;
          opacity: 0.9;
        }

        .testimonials {
          padding: 6rem 0;
          background: white;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .testimonial-card {
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 16px;
          border-left: 4px solid #667eea;
        }

        .testimonial-content {
          margin-bottom: 1.5rem;
        }

        .stars {
          margin-bottom: 1rem;
        }

        .testimonial-content p {
          color: #2c3e50;
          font-style: italic;
          line-height: 1.6;
        }

        .testimonial-author strong {
          color: #2c3e50;
          display: block;
          margin-bottom: 0.25rem;
        }

        .testimonial-author span {
          color: #6c757d;
          font-size: 0.9rem;
        }

        .cta {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
          padding: 5rem 0;
          text-align: center;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .cta-content p {
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
        }

        .cta-buttons {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .cta .btn-primary {
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
        }

        .cta-contact {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          align-items: center;
        }

        .phone-link {
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.2rem;
        }

        .phone-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
        .hero {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
          padding: 2rem 0 4rem;
          position: relative;
          overflow: hidden;
        }
          .hero-content {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .hero-text h1 {
            font-size: 2.5rem;
          }

          .hero-cta {
            flex-direction: column;
            align-items: stretch;
            gap: 3rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default HomePage;
