import React, { useState } from 'react';

function PremiumCalculator() {
  const [age, setAge] = useState('');
  const [coverageAmount, setCoverageAmount] = useState('');
  const [policyTerm, setPolicyTerm] = useState('');
  const [premium, setPremium] = useState(null);
  const [error, setError] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const calculatePremium = () => {
    // Clear previous results
    setPremium(null);
    setError('');

    // Validate inputs
    if (!age || !coverageAmount || !policyTerm) {
      setError('All fields are required.');
      return;
    }

    if (isNaN(age) || isNaN(coverageAmount) || isNaN(policyTerm)) {
      setError('Please enter valid numbers.');
      return;
    }

    // Basic premium calculation formula (example only, not accurate)
    const basePremium = 0.1;
    const calculatedPremium = (coverageAmount * basePremium) / (1000 * policyTerm) * age;

    setPremium(calculatedPremium.toFixed(2));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Premium Calculator</h1>
      <div style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="coverageAmount">Coverage Amount ($):</label>
          <input
            type="number"
            id="coverageAmount"
            value={coverageAmount}
            onChange={(e) => setCoverageAmount(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="policyTerm">Policy Term (years):</label>
          <input
            type="number"
            id="policyTerm"
            value={policyTerm}
            onChange={(e) => setPolicyTerm(e.target.value)}
            style={styles.input}
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <button
          onClick={calculatePremium}
          style={isHovered ? {...styles.button, ...styles.buttonHovered} : styles.button}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Calculate Premium
        </button>
        {premium !== null && (
          <div style={styles.result}>
            <p>Your annual premium is: <strong>${premium}</strong></p>
          </div>
        )}
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
    backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFLc5LDjuqow2hOj_j4F-fUK_WySeqeRbpyw&s)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '0 20px',
  },
  header: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '400px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  formGroup: {
    marginBottom: '15px',
    width: '100%',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '1rem',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  error: {
    color: 'red',
    fontSize: '0.875rem',
    margin: '10px 0',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHovered: {
    backgroundColor: '#0056b3',
  },
  result: {
    marginTop: '20px',
    fontSize: '1.2rem',
    color: '#333',
  },
};

export default PremiumCalculator;
