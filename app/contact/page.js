'use client';
import { useState } from 'react';
import {config} from '../config';

const ContactForm = () => {
  const {contactNumber} = config ;
  const {name} = config.companyDetails ;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    preferredContact: 'email'
  });
  const formUrl = "https://script.google.com/macros/s/AKfycby4gFJpMfXNU29CmP2Z6ycQ8oKmpu6XWcyiCbaueSDhclNKa7YrXM_7nfM9EG9iZf5Z/exec"
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    'Tax Planning & Compliance',
    'Audit & Assurance',
    'Business Advisory',
    'Corporate Finance',
    'GST Services',
    'Company Registration',
    'Accounting & Bookkeeping',
    'Financial Planning',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // await new Promise(resolve => setTimeout(resolve, 2000));
      const response = await fetch(formUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        redirect: 'follow' ,
        body: JSON.stringify(formData)
      });
      console.log(response);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        preferredContact: 'email'
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('success');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get Professional Financial Guidance</h2>
              <p className="lead">
                Ready to take control of your finances? Our experienced chartered accountants 
                are here to help you navigate complex financial matters with confidence.
              </p>
              
              <div className="contact-methods">
                {config.contactMethods && config.contactMethods.map((method, idx) => (
                  <div className="contact-method" key={idx}>
                    <div className="contact-icon">{method.icon}</div>
                    <div>
                      <h4>{method.title}</h4>
                      {method.lines && method.lines.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                      {method.note && <span>{method.note}</span>}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <h3>Schedule a Consultation</h3>
                
                {submitStatus === 'success' && (
                  <div className="alert alert-success">
                    <strong>Thank you!</strong> Your message has been sent successfully. 
                    We&quotll get back to you within 24 hours.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="alert alert-error">
                    <strong>Error!</strong> There was a problem sending your message. 
                    Please try again or call us directly.
                  </div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="company">Company/Organization</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Required *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Preferred Contact Method</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleChange}
                      />
                      Email
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleChange}
                      />
                      Phone
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us about your requirements or ask any questions..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                <p className="form-note">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-section {
          padding: 4rem 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info h2 {
          color: #2c3e50;
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .lead {
          font-size: 1.2rem;
          color: #5a6c7d;
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .contact-methods {
          margin-bottom: 2.5rem;
        }

        .contact-method {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }

        .contact-icon {
          font-size: 2rem;
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-method h4 {
          color: #2c3e50;
          margin: 0 0 0.5rem 0;
          font-size: 1.1rem;
        }

        .contact-method p {
          color: #333;
          margin: 0 0 0.25rem 0;
          font-weight: 500;
        }

        .contact-method span {
          color: #6c757d;
          font-size: 0.9rem;
        }

        .certifications {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }

        .certifications h4 {
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .cert-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .cert-badge {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .contact-form {
          background: white;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .contact-form h3 {
          color: #2c3e50;
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .alert {
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }

        .alert-success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }

        .alert-error {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #2c3e50;
          font-weight: 500;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .radio-group {
          display: flex;
          gap: 1.5rem;
          margin-top: 0.5rem;
        }

        .radio-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          font-weight: normal;
        }

        .radio-label input[type="radio"] {
          width: auto;
          margin: 0;
        }

        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .form-note {
          text-align: center;
          font-size: 0.85rem;
          color: #6c757d;
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-info h2 {
            font-size: 2rem;
          }

          .contact-form {
            padding: 1.5rem;
          }

          .radio-group {
            flex-direction: column;
            gap: 0.75rem;
          }
        }
      `}</style>
    </>
  );
};

export default ContactForm;
