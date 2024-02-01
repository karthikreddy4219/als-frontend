// AddSubmission.js

import React, { useState } from 'react';
import '../../css/Employee/AddSubmission.css';

const AddSubmission = ({ onClose, onSubmit }) => {
  const [role, setRole] = useState('');
  const [vendorName, setVendorName] = useState('');
  const [vendorEmail, setVendorEmail] = useState('');
  const [vendorPhoneNumber, setVendorPhoneNumber] = useState('');
  const [client, setClient] = useState('');
  const [submissionDate, setSubmissionDate] = useState('');
  const [submissionBy, setSubmissionBy] = useState('Your Self'); // Changed state name and default value
  const [payRate, setPayRate] = useState('');
  const [onsiteHybridRole, setOnsiteHybridRole] = useState('');

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleSubmit = () => {
    // Validate input and perform submission
    // You can call the onSubmit prop to pass the data to the parent component
    onSubmit({
      role,
      vendorName,
      vendorEmail,
      vendorPhoneNumber,
      client,
      submissionDate,
      submissionBy,
      payRate,
      onsiteHybridRole,
    });

    // Close the AddSubmission component
    onClose();
  };

  const handleDateChange = (e) => {
    // This ensures that the input is always in the format MM/DD/YYYY
    const formattedDate = formatDate(e.target.value);
    setSubmissionDate(formattedDate);
  };

  return (
    <div className="scroll-container">
      <div className="add-submission-container">
        <div className="close-icon" onClick={onClose}>&times;</div>
        <h2>Add Submission</h2>
        <label>Role:</label>
        <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />

        <label>Vendor Name:</label>
        <input type="text" value={vendorName} onChange={(e) => setVendorName(e.target.value)} />

        <label>Vendor Email:</label>
        <input type="text" value={vendorEmail} onChange={(e) => setVendorEmail(e.target.value)} />

        <label>Vendor Phone Number:</label>
        <input type="text" value={vendorPhoneNumber} onChange={(e) => setVendorPhoneNumber(e.target.value)} />

        <label>Client:</label>
        <input type="text" value={client} onChange={(e) => setClient(e.target.value)} />

        <label>Submission Date:</label>
        <input type="date" value={submissionDate} onChange={handleDateChange} />

        <label>Submission By:</label>
        <select value={submissionBy} onChange={(e) => setSubmissionBy(e.target.value)}>
          <option value="Your Self">Your Self</option>
          <option value="Recruiter">Recruiter</option>
        </select>

        <label>Pay Rate:</label>
        <input type="text" value={payRate} onChange={(e) => setPayRate(e.target.value)} />

        <label>Onsite/Hybrid Role:</label>
        <input type="text" value={onsiteHybridRole} onChange={(e) => setOnsiteHybridRole(e.target.value)} />

        <button onClick={handleSubmit}>Submit</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddSubmission;
