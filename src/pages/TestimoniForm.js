import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Styles/TestimoniForm.css';

const TestimoniForm = () => {
  const [name, setName] = useState('');
  const [assessment, setAssessment] = useState('');
  const [day, setDay] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5066/api/assessments', {
        name: name,
        assessment: assessment,
        day: day  // Adding day to the request body
      });
      setShowSuccessMessage(true);  // Show success message
      setTimeout(() => {
        setShowSuccessMessage(false);  // Hide success message after 2 seconds
      }, 2000);
      setName('');
      setAssessment('');
      setDay('');
    } catch (error) {
      console.error('Error submitting assessment: ', error);
    }
  };

  return (
    <div className="testimoni-form1">
      <form onSubmit={handleSubmit}>
        <div className="rectangle-parent9">
          <div className="group-child9" />
          <div className="group-child10" />
          <div className="give-your-assessment-container">
            <b>{`Give `}</b>
            <b className="your1">{`Your `}</b>
            <b>Assessment</b>
          </div>
          <div className="rectangle-parent10">
            <div className="group-child11" />
            <input
              className="instance-child5"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <input
            className="your-assessment2"
            type="date"
            placeholder="Day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
          <input
            className="your-assessment1"
            type="text"
            placeholder="Your assessment"
            value={assessment}
            onChange={(e) => setAssessment(e.target.value)}
          />
          <div className="vector-parent5">
            <button type="submit" className="send-button-1">
              Send
            </button>
            <Link to="/afterhome" className="back-link">
              <b className="back-1">Back</b>
            </Link>
          </div>
        </div>
      </form>
      {showSuccessMessage && (
        <div className="success-message">
          <p>Assessment Success</p>
        </div>
      )}
    </div>
  );
};

export default TestimoniForm;
