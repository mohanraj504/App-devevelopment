import React, { useState, useEffect } from 'react';

const dummyClaims = [
  {
    claimId: 'CLAIM123456',
    policyNumber: 'POL123456',
    claimType: 'Health',
    dateFiled: '2024-06-01',
    status: 'Processing',
    amount: '$500',
    steps: [
      { step: 'Submitted', date: '2024-06-01' },
      { step: 'Under Review', date: '2024-06-03' },
    ],
  },
  {
    claimId: 'CLAIM654321',
    policyNumber: 'POL654321',
    claimType: 'Auto',
    dateFiled: '2024-05-20',
    status: 'Approved',
    amount: '$1200',
    steps: [
      { step: 'Submitted', date: '2024-05-20' },
      { step: 'Under Review', date: '2024-05-22' },
      { step: 'Approved', date: '2024-05-25' },
    ],
  },
  {
    claimId: 'CLAIM789012',
    policyNumber: 'POL789012',
    claimType: 'Life',
    dateFiled: '2024-04-15',
    status: 'Rejected',
    amount: '$950',
    steps: [
      { step: 'Submitted', date: '2024-04-15' },
      { step: 'Under Review', date: '2024-04-18' },
      { step: 'Rejected', date: '2024-04-20' },
    ],
  },
];

function ClaimStatus() {
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching claims from an API
    setTimeout(() => {
      setClaims(dummyClaims);
      setLoading(false);
    }, 1000); // Simulated API delay
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Claim Status</h1>
      {loading ? (
        <p>Loading claims...</p>
      ) : (
        <div style={styles.claimsContainer}>
          {claims.map((claim) => (
            <div key={claim.claimId} style={styles.claimCard}>
              <h2 style={styles.claimType}>{claim.claimType} Claim</h2>
              <p><strong>Claim ID:</strong> {claim.claimId}</p>
              <p><strong>Policy Number:</strong> {claim.policyNumber}</p>
              <p><strong>Date Filed:</strong> {claim.dateFiled}</p>
              <p><strong>Status:</strong> {claim.status}</p>
              <p><strong>Amount:</strong> {claim.amount}</p>
              <h3 style={styles.subHeader}>Steps:</h3>
              <ul style={styles.stepsList}>
                {claim.steps.map((step, index) => (
                  <li key={index} style={styles.stepItem}>
                    <span><strong>{step.step}:</strong> {step.date}</span>
                  </li>
                ))}
              </ul>
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
  claimsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '800px',
  },
  claimCard: {
    width: '100%',
    padding: '20px',
    margin: '10px 0',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'left',
  },
  claimType: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '10px',
  },
  subHeader: {
    fontSize: '1.2rem',
    color: '#333',
    margin: '10px 0',
  },
  stepsList: {
    listStyleType: 'none',
    padding: 0,
  },
  stepItem: {
    marginBottom: '5px',
  },
};

export default ClaimStatus;
