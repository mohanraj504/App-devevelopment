import React, { useState } from 'react';
import axios from 'axios'; // Add axios for making HTTP requests

function BuyInsurance() {
  const [insuranceType, setInsuranceType] = useState('');
  const [formDetails, setFormDetails] = useState({
    name: '',
    age: '',
    coverageAmount: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // For handling form submission state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state to true

    try {
      const response = await axios.post('http://localhost:3001/insurance', {
        insuranceType,
        ...formDetails,
      });
      console.log('Insurance Details:', response.data);
      alert('Insurance purchased successfully!');
      setFormDetails({
        name: '',
        age: '',
        coverageAmount: '',
      });
      setInsuranceType('');
    } catch (error) {
      console.error('Error purchasing insurance:', error);
      alert('Failed to purchase insurance. Please try again.');
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Buy Insurance</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Insurance Type:</label>
          <select
            value={insuranceType}
            onChange={(e) => setInsuranceType(e.target.value)}
            style={styles.select}
            required
          >
            <option value="">Select Insurance Type</option>
            <option value="Health">Health Insurance</option>
            <option value="Life">Life Insurance</option>
            <option value="Auto">Auto Insurance</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={formDetails.name}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Age:</label>
          <input
            type="number"
            name="age"
            value={formDetails.age}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Coverage Amount:</label>
          <input
            type="text"
            name="coverageAmount"
            value={formDetails.coverageAmount}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Buy Insurance'}
        </button>
      </form>
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
    width: '100%',
    maxWidth: '400px',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.5)',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '1rem',
    color: 'black',
    fontWeight: 'bold',
  },
  select: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    fontSize: '1rem',
    background: 'rgba(255, 255, 255, 0)',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    fontSize: '1rem',
    background: 'rgba(255, 255, 255, 0)',
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
  },
};

export default BuyInsurance;
