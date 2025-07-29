// components/Layout.js
'use client'
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <html>
      <body style={{margin:"0px"}}>
        <div className="layout">
          <Header />
          <main className="main-content">
            {children}
          </main>
          <Footer />

          <style jsx>{`
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .main-content {
          flex: 1;
        }

        @media (max-width: 768px) {
          .main-content {
            padding-top: 70px;
          }
        }
      `}</style>
        </div>
      </body>
    </html>
  );
};

export default Layout;
