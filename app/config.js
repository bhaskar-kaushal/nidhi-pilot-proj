const yearsOfExperience = "comprehensive";
const foundationYear = 2025;
const clients = 15
const companySize = 10;
export const config = {
    homeHeading: "Strategic Financial Solutions for Your Business Successsss",
    homeSubheading: "Chartered Accountants with comprehensive experience, Committed to excellence and client satisfaction",
    aboutHeading : `With over ${yearsOfExperience} years of excellence in financial services, we are your trusted partners in navigating the complex world of accounting, taxation, and business advisory.`,
    aboutSubHeading : `Established in ${foundationYear}, our firm began with a simple yet powerful vision: to provide exceptional financial services that empower businesses and individuals to achieve 
    their financial goals. What started as a small practice has grown into one of the most trusted chartered accountancy firms in the region.Over the years, we have built our reputation on the 
    foundation of professional excellence, ethical practices, and client-focused service delivery. Our team of experienced professionals brings together decades of combined expertise across 
    various domains of accounting, taxation, audit, and business advisory services.Today, we proudly serve over 50 clients ranging from startups and SMEs to large corporations, helping 
    them navigate complex financial landscapes with confidence and achieve sustainable growth`,
    contactNumber: "+91 83600 96251",
    services : [
        {
        icon: '📊',
        title: 'Tax Planning & Compliance',
        description: 'Strategic tax planning strategies to minimize your tax liability while ensuring full compliance with regulations.',
        features: ['Income Tax Returns', 'Tax Advisory', 'Tax Optimization', 'Compliance Management']
        },
        {
        icon: '🔍',
        title: 'Audit & Assurance',
        description: 'Comprehensive audit services to ensure accuracy, compliance, and financial transparency.',
        features: ['Statutory Audits', 'Internal Audits', 'Due Diligence', 'Risk Assessment']
        },
        {
        icon: '💼',
        title: 'Business Advisory',
        description: 'Strategic business consulting to help you make informed decisions and grow your business.',
        features: ['Financial Planning', 'Business Strategy', 'Performance Analysis', 'Growth Consulting']
        },
        {
        icon: '🏢',
        title: 'Corporate Services',
        description: 'Complete corporate solutions from company formation to ongoing compliance requirements.',
        features: ['Company Registration', 'Legal Compliance', 'Board Meetings', 'Annual Filings']
        },
        {
        icon: '📈',
        title: 'GST Services',
        description: 'End-to-end GST solutions including registration, filing, and compliance management.',
        features: ['GST Registration', 'Return Filing', 'GST Advisory', 'Refund Processing']
        },
        {
        icon: '💰',
        title: 'Financial Planning',
        description: 'Personalized financial planning to help you achieve your long-term financial goals.',
        features: ['Investment Planning', 'Retirement Planning', 'Insurance Advisory', 'Wealth Management']
        }
    ],
    testimonials: [
        {
            name: "Rajesh Kumar",
            position: "CEO, Tech Innovations Pvt. Ltd.",
            feedback: "The team at ABC & Co. has been instrumental in our financial success. Their expertise in tax planning and compliance has saved us significant costs."
        },
        {
            name: "Sita Verma",
            position: "Founder, Green Earth Solutions",
            feedback: "Their audit services are thorough and professional. We trust them completely with our financial matters."
        },
        {
            name: "Anil Mehta",
            position: "CFO, Global Enterprises",
            feedback: "ABC & Co. provides exceptional business advisory services that have helped us streamline our operations and improve profitability."
        }
    ],
    stats : [
        { number: clients, label: 'Happy Clients' },
        { number: companySize, label: 'Trusted Team' },
        { number: '99%', label: 'Success Rate' }
    ],
    companyDetails: { "name" : "Shankar Shekhar & Associates", "yearsOfExperience": yearsOfExperience, "foundationYear": foundationYear, "clients": clients, "companySize": companySize},
    teamMembers : [
        {
        name: 'CA Shankar',
        designation: 'Managing Partner',
        experience: '20+ Years',
        specialization: 'Tax Planning & Corporate Law',
        image: '👨‍💼',
        qualifications: ['Chartered Accountant', 'GST Practitioner', 'Tax Consultant']
        },
        {
        name: 'CA Nidhi Kaushal',
        designation: 'Senior Partner',
        experience: '15+ Years',
        specialization: 'Audit & Assurance',
        image: '👩‍💼',
        qualifications: ['Chartered Accountant', 'GST Practitioner', 'Tax Consultant']
        },
        {
        name: 'CA Shekhar',
        designation: 'Partner',
        experience: '12+ Years',
        specialization: 'GST & Indirect Taxes',
        image: '👨‍💼',
        qualifications: ['Chartered Accountant', 'GST Practitioner', 'Tax Consultant']
        },
        {
        name: 'CA Mohit',
        designation: 'Associate Partner',
        experience: '8+ Years',
        specialization: 'Financial Planning & Advisory',
        image: '👩‍💼',
        qualifications: ['Chartered Accountant', 'GST Practitioner', 'Tax Consultant']
        }
    ],
    milestones : [
        { year: '2025', event: 'Firm Established', description: 'Founded with a vision to provide exceptional financial services' },
        { year: '2026', event: `${clients}+ Clients`, description: `Reached our first major milestone of serving ${clients} clients` } 
    ]
};
