import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/users');
      const users = await response.json();

      const validUser = users.find(user => user.email === email && user.password === password);

      if (validUser) {
        alert('Login successful');
        navigate('/home'); 
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
        <button style={styles.signupButton} onClick={() => navigate('/signup')}>Signup</button>
      </div>
      <div style={styles.formContainer}>
        <h2 style={styles.header}>Login</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
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
    backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/005/879/862/small/abstract-soft-pink-background-modern-and-clean-banner-landing-page-concept-with-pastel-color-free-vector.jpg)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '0 20px',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    padding: '20px',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  signupButton: {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: 'black',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '400px',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.5)',
    background: 'rgba(255, 255, 255, 0)', 
    backdropFilter: 'blur(5px)', 
    border: '1px solid rgba(255, 255, 255, 0.5)', 
  },
  header: {
    marginBottom: '20px',
    fontSize: '2rem',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '1rem',
    color: 'black',
    fontWeight: 'bold'
  },
  input: {
    width: '100%', 
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid rgba(255, 255, 255, 0.5)', 
    fontSize: '1rem',
    background: 'rgba(255, 255, 255, 0)', 
  },
  error: {
    color: 'red',
    fontSize: '0.875rem',
    margin: '10px 0',
  },
  button: {
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }
};

export default Login;
