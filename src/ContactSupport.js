import React, { useState } from 'react';

const supportOfficers = [
  {
    name: 'John Doe',
    role: 'Customer Service Manager',
    email: 'john.doe@example.com',
    phone: '+1-800-555-1234'
  },
  {
    name: 'Jane Smith',
    role: 'Claims Specialist',
    email: 'jane.smith@example.com',
    phone: '+1-800-555-5678'
  },
  {
    name: 'Emily Johnson',
    role: 'Technical Support',
    email: 'emily.johnson@example.com',
    phone: '+1-800-555-9876'
  },
];

function ContactSupport() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous messages
    setSubmitted(false);
    setError('');

    // Validate inputs
    if (!name || !email || !subject || !message) {
      setError('All fields are required.');
      return;
    }

    // Assuming a backend endpoint to handle the support form submission
    const supportFormEndpoint = 'http://localhost:3001/support';

    try {
      const response = await fetch(supportFormEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        setSubmitted(true);
        // Clear the form
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setError('Failed to send your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Support</h1>
      
      <div style={styles.officerContainer}>
        <h2 style={styles.subHeader}>Meet Our Support Officers</h2>
        {supportOfficers.map((officer, index) => (
          <div key={index} style={styles.officerCard}>
            <h3 style={styles.officerName}>{officer.name}</h3>
            <p style={styles.officerRole}>{officer.role}</p>
            <p style={styles.officerContact}>Email: <a href={`mailto:${officer.email}`} style={styles.link}>{officer.email}</a></p>
            <p style={styles.officerContact}>Phone: <a href={`tel:${officer.phone}`} style={styles.link}>{officer.phone}</a></p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="subject" style={styles.label}>Subject:</label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.textarea}
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        {submitted && <p style={styles.success}>Your message has been sent successfully.</p>}
        <button type="submit" style={styles.button}>Send Message</button>
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
  officerContainer: {
    width: '100%',
    maxWidth: '600px',
    marginBottom: '40px',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
  officerCard: {
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '15px',
  },
  officerName: {
    fontSize: '1.5rem',
    color: '#333',
    margin: '0',
  },
  officerRole: {
    fontSize: '1.2rem',
    color: '#666',
    margin: '5px 0',
  },
  officerContact: {
    fontSize: '1rem',
    color: '#007bff',
    margin: '5px 0',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
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
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    height: '100px',
    resize: 'none',
  },
  error: {
    color: 'red',
    fontSize: '0.875rem',
    margin: '10px 0',
  },
  success: {
    color: 'green',
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
};

export default ContactSupport;
