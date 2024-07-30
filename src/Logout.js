import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user session data
    localStorage.removeItem('user'); // Adjust based on how you're storing user data

    // Optionally clear any other session information or tokens here

    // Redirect to login or home page
    navigate('/');
  }, [navigate]);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Logging out...</h1>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundImage: 'url(https://colibriwp.com/blog/wp-content/uploads/2019/08/bg11.png)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '0 20px',
  },
  header: {
    fontSize: '2.5rem',
    color: '#333',
  },
};

export default Logout;
