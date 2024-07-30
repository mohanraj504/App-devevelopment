import React, { useState, useEffect } from 'react';

const dummyPolicies = [
  {
    policyNumber: 'POL123456',
    policyType: 'Health',
    startDate: '2023-01-01',
    coverageAmount: '$10,000',
    premium: '$500/year',
  },
  {
    policyNumber: 'POL654321',
    policyType: 'Life',
    startDate: '2022-05-15',
    coverageAmount: '$50,000',
    premium: '$1000/year',
  },
  {
    policyNumber: 'POL789012',
    policyType: 'Auto',
    startDate: '2021-08-20',
    coverageAmount: '$20,000',
    premium: '$300/year',
  },
];

function ViewPolicies() {
  const [policies, setPolicies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching policies from an API
    setTimeout(() => {
      setPolicies(dummyPolicies);
      setLoading(false);
    }, 1000); // Simulated API delay
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Your Policies</h1>
      {loading ? (
        <p>Loading policies...</p>
      ) : (
        <div style={styles.policiesContainer}>
          {policies.map((policy) => (
            <div key={policy.policyNumber} style={styles.policyCard}>
              <h2 style={styles.policyType}>{policy.policyType} Policy</h2>
              <p><strong>Policy Number:</strong> {policy.policyNumber}</p>
              <p><strong>Start Date:</strong> {policy.startDate}</p>
              <p><strong>Coverage Amount:</strong> {policy.coverageAmount}</p>
              <p><strong>Premium:</strong> {policy.premium}</p>
            </div>
          ))}
        </div>
      )}
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
  policiesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '800px',
  },
  policyCard: {
    width: '100%',
    padding: '20px',
    margin: '10px 0',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'left',
  },
  policyType: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '10px',
  },
};

export default ViewPolicies;
