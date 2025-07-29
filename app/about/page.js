'use client'
import {config} from "../config";
const AboutUs = () => {
    const { teamMembers, milestones, aboutSubHeading, aboutHeading } = config
    const { clients  ,companySize } = config.companyDetails;
    const values = [
      {
        icon: '🎯',
        title: 'Excellence',
        description: 'We strive for excellence in every service we provide, ensuring the highest quality of professional standards.'
      },
      {
        icon: '🤝',
        title: 'Integrity',
        description: 'We maintain the highest ethical standards and transparency in all our professional relationships.'
      },
      {
        icon: '💡',
        title: 'Innovation',
        description: 'We embrace modern technology and innovative solutions to provide efficient and effective services.'
      },
      {
        icon: '⏰',
        title: 'Timeliness',
        description: 'We value your time and ensure all deadlines are met with precision and reliability.'
      }
    ];
  
    return (
      <>
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <div className="hero-content">
              <h1>About Our Firm</h1>
              <p className="hero-subtitle">
                {aboutHeading}
              </p>
            </div>
          </div>
        </section>
  
        {/* Story Section */}
        <section className="story">
          <div className="container">
            <div className="story-grid">
              <div className="story-content">
                <h2>Our Story</h2>
                <p>
                  {aboutSubHeading}
                </p>
              </div>
              <div className="story-stats">
                <div className="stat-card">
                  <div className="stat-number">{clients}+</div>
                  <div className="stat-label">Satisfied Clients</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">{companySize}+</div>
                  <div className="stat-label">Trusted Professionals</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">99%</div>
                  <div className="stat-label">Client Retention Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Mission & Vision */}
        <section className="mission-vision">
          <div className="container">
            <div className="mv-grid">
              <div className="mv-card">
                <div className="mv-icon">🎯</div>
                <h3>Our Mission</h3>
                <p>
                  To provide comprehensive, reliable, and innovative financial services that 
                  enable our clients to make informed decisions, achieve compliance, and 
                  drive sustainable business growth while maintaining the highest standards 
                  of professional integrity.
                </p>
              </div>
              <div className="mv-card">
                <div className="mv-icon">🔮</div>
                <h3>Our Vision</h3>
                <p>
                  To be the most trusted and preferred chartered accountancy firm, recognized 
                  for our expertise, innovation, and commitment to client success. We aspire 
                  to set new benchmarks in professional service delivery and contribute to 
                  the financial well-being of our community.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Values Section */}
        <section className="values">
          <div className="container">
            <div className="section-header">
              <h2>Our Core Values</h2>
              <p>The principles that guide everything we do</p>
            </div>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Team Section */}
        <section className="team">
          <div className="container">
            <div className="section-header">
              <h2>Meet Our trusted Team</h2>
              <p>Experienced professionals dedicated to your financial success</p>
            </div>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-card">
                  <div className="member-image">{member.image}</div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <p className="designation">{member.designation}</p>
                    <p className="experience">{member.experience}</p>
                    <p className="specialization">{member.specialization}</p>
                    <div className="qualifications">
                      {member.qualifications.map((qual, idx) => (
                        <span key={idx} className="qualification-badge">{qual}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Timeline Section */}
        <section className="timeline">
          <div className="container">
            <div className="section-header">
              <h2>Our Journey</h2>
              <p>Key milestones in our growth story</p>
            </div>
            <div className="timeline-container">
              {milestones.map((milestone, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-year">{milestone.year}</div>
                    <h4>{milestone.event}</h4>
                    <p>{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Certifications */}
        <section className="certifications">
          <div className="container">
            <div className="section-header">
              <h2>Certifications & Memberships</h2>
              <p>Our commitment to professional excellence</p>
            </div>
            <div className="cert-grid">
              <div className="cert-item">
                <div className="cert-icon">🏆</div>
                <h4>ICAI Membership</h4>
                <p>Institute of Chartered Accountants of India</p>
              </div>
              <div className="cert-item">
                <div className="cert-icon">💼</div>
                <h4>GST Practitioner</h4>
                <p>Authorized GST Practitioner Certificate</p>
              </div>
              <div className="cert-item">
                <div className="cert-icon">⚖️</div>
                <h4>Tax Consultant</h4>
                <p>Certified Tax Consultant Registration</p>
              </div>
            </div>
          </div>
        </section>
  
        <style jsx>{`
          .about-hero {
            background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
            color: white;
            padding: 8rem 0 4rem;
            text-align: center;
          }
  
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }
  
          .hero-content h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
          }
  
          .hero-subtitle {
            font-size: 1.3rem;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            opacity: 0.9;
          }
  
          .story {
            padding: 6rem 0;
            background: white;
          }
  
          .story-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 4rem;
            align-items: start;
          }
  
          .story-content h2 {
            color: #2c3e50;
            font-size: 2.5rem;
            margin-bottom: 2rem;
          }
  
          .story-content p {
            color: #5a6c7d;
            line-height: 1.8;
            margin-bottom: 1.5rem;
            font-size: 1.1rem;
          }
  
          .story-stats {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
          }
  
          .stat-card {
            background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
            color: white;
            padding: 2rem;
            border-radius: 16px;
            text-align: center;
          }
  
          .stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
          }
  
          .stat-label {
            font-size: 0.9rem;
            opacity: 0.9;
          }
  
          .mission-vision {
            padding: 6rem 0;
            background: #f8f9fa;
          }
  
          .mv-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
  
          .mv-card {
            background: white;
            padding: 3rem;
            border-radius: 16px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.08);
            text-align: center;
          }
  
          .mv-icon {
            font-size: 4rem;
            margin-bottom: 1.5rem;
          }
  
          .mv-card h3 {
            color: #2c3e50;
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
          }
  
          .mv-card p {
            color: #5a6c7d;
            line-height: 1.7;
            font-size: 1.1rem;
          }
  
          .values {
            padding: 6rem 0;
            background: white;
          }
  
          .section-header {
            text-align: center;
            margin-bottom: 4rem;
          }
  
          .section-header h2 {
            color: #2c3e50;
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }
  
          .section-header p {
            color: #6c757d;
            font-size: 1.2rem;
          }
  
          .values-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }
  
          .value-card {
            background: #f8f9fa;
            padding: 2.5rem;
            border-radius: 16px;
            text-align: center;
            transition: transform 0.3s ease;
          }
  
          .value-card:hover {
            transform: translateY(-8px);
          }
  
          .value-icon {
            font-size: 3rem;
            margin-bottom: 1.5rem;
          }
  
          .value-card h3 {
            color: #2c3e50;
            margin-bottom: 1rem;
          }
  
          .value-card p {
            color: #5a6c7d;
            line-height: 1.6;
          }
  
          .team {
            padding: 6rem 0;
            background: #f8f9fa;
          }
  
          .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
          }
  
          .team-card {
            background: white;
            padding: 2.5rem;
            border-radius: 16px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.08);
            text-align: center;
            transition: transform 0.3s ease;
          }
  
          .team-card:hover {
            transform: translateY(-8px);
          }
  
          .member-image {
            font-size: 4rem;
            margin-bottom: 1.5rem;
          }
  
          .member-info h3 {
            color: #2c3e50;
            margin-bottom: 0.5rem;
          }
  
          .designation {
            color: #667eea;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }
  
          .experience {
            color: #6c757d;
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
          }
  
          .specialization {
            color: #5a6c7d;
            font-style: italic;
            margin-bottom: 1.5rem;
          }
  
          .qualifications {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            justify-content: center;
          }
  
          .qualification-badge {
            background: #667eea;
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 12px;
            font-size: 0.8rem;
          }
  
          .timeline {
            padding: 6rem 0;
            background: white;
          }
  
          .timeline-container {
            max-width: 800px;
            margin: 0 auto;
            position: relative;
          }
  
          .timeline-container::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 2px;
            background: #667eea;
            transform: translateX(-50%);
          }
  
          .timeline-item {
            display: flex;
            align-items: center;
            margin-bottom: 3rem;
            position: relative;
          }
  
          .timeline-item:nth-child(odd) {
            flex-direction: row;
          }
  
          .timeline-item:nth-child(even) {
            flex-direction: row-reverse;
          }
  
          .timeline-marker {
            width: 20px;
            height: 20px;
            background: #667eea;
            border-radius: 50%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            z-index: 2;
          }
  
          .timeline-content {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            width: 45%;
            position: relative;
          }
  
          .timeline-year {
            background: #667eea;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-weight: 600;
            display: inline-block;
            margin-bottom: 1rem;
          }
  
          .timeline-content h4 {
            color: #2c3e50;
            margin-bottom: 0.5rem;
          }
  
          .timeline-content p {
            color: #5a6c7d;
            line-height: 1.6;
          }
  
          .certifications {
            padding: 6rem 0;
            background: #f8f9fa;
          }
  
          .cert-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }
  
          .cert-item {
            background: white;
            padding: 2.5rem;
            border-radius: 16px;
            text-align: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          }
  
          .cert-icon {
            font-size: 3rem;
            margin-bottom: 1.5rem;
          }
  
          .cert-item h4 {
            color: #2c3e50;
            margin-bottom: 0.5rem;
          }
  
          .cert-item p {
            color: #5a6c7d;
          }
  
          @media (max-width: 768px) {
            .hero-content h1 {
              font-size: 2.5rem;
            }
  
            .story-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
  
            .story-stats {
              grid-template-columns: 1fr;
            }
  
            .mv-grid {
              grid-template-columns: 1fr;
            }
  
            .timeline-container::before {
              left: 20px;
            }
  
            .timeline-item {
              flex-direction: row !important;
              padding-left: 3rem;
            }
  
            .timeline-marker {
              left: 20px;
            }
  
            .timeline-content {
              width: 100%;
            }
          }
        `}</style>
      </>
    );
  };
  
  export default AboutUs;
  