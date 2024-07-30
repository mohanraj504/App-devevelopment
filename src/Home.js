import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
        <div style={styles.navLinks}>
          <Link to="/view-policies" style={styles.navLink}>View Policies</Link>
          <Link to="/buy-insurance" style={styles.navLink}>Buy Insurance</Link>
          <Link to="/claim-status" style={styles.navLink}>Claim Status</Link>
          <Link to="/premium-calculator" style={styles.navLink}>Premium Calculator</Link>
          <Link to="/contact-support" style={styles.navLink}>Contact Support</Link>
          <Link to="/logout" style={styles.navLink}>Logout</Link>
        </div>
      </div>
      <div style={styles.content}>
        <div style={styles.welcomeMessage}>
          <h1 style={styles.header}>Life Insurance Portal</h1>
        </div>
        <div style={styles.pageContent}>
          <p style={styles.pageText}>Explore our features and make the most out of our life insurance portal.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundImage: 'url(https://img.freepik.com/free-photo/family-figure-shape-stethoscope-with-copy-space_23-2148488223.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    paddingTop: '50px', // Padding to make space for the navbar
  },
  navbar: {
    position: 'fixed',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black background
    padding: '10px 20px',
    borderBottom: '2px solid rgba(255, 255, 255, 0.3)', // Semi-transparent white border
    width: 'auto',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  navLinks: {
    display: 'flex',
    gap: '15px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  },
  navLinkHover: {
    backgroundColor: 'rgba(255, 255, 255, 0)', // Semi-transparent white for hover effect
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: '20px',
    marginTop: '60px', // Adjust based on navbar height
  },
  welcomeMessage: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  header: {
    fontSize: '2.5rem',
    color: '#fff', // Ensure the text is visible against the semi-transparent navbar
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#ccc', // Light color to stand out on a potentially dark background
    textAlign: 'center',
  },
  pageContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pageText: {
    fontSize: '1rem',
    color: '#fff', // Ensure the text is visible on the background
  },
};

export default Home;
