import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/AdminDashboard.css';

const AdminDashboard = () => {
  const [reservationData, setReservationData] = useState([]);
  const [assessmentData, setAssessmentData] = useState([]);
  const [contactData, setContactData] = useState([]);
  const [showReservations, setShowReservations] = useState(false);
  const [showAssessments, setShowAssessments] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [loading, setLoading] = useState(true); // State for loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reservationResponse = await axios.get('http://localhost:3000/api/reservations');
        setReservationData(reservationResponse.data);

        const assessmentResponse = await axios.get('http://localhost:3000/api/assessments');
        setAssessmentData(assessmentResponse.data);

        const contactResponse = await axios.get('http://localhost:3000/api/contacts');
        setContactData(contactResponse.data);

        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching data: ', error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData();
  }, []);

  const handleConfirmReservation = async (id) => {
    try {
      await axios.put(`http://localhost:3000/api/reservations/${id}/confirm`);
      setReservationData((prevData) =>
        prevData.map((reservation) =>
          reservation.id === id ? { ...reservation, status: 'Confirmed' } : reservation
        )
      );
    } catch (error) {
      console.error('Error confirming reservation: ', error);
    }
  };

  const handleDelete = async (type, id) => {
    try {
      if (type === 'reservation') {
        await axios.delete(`http://localhost:3000/api/reservations/${id}`);
        setReservationData((prevData) => prevData.filter((reservation) => reservation.id !== id));
      } else if (type === 'assessment') {
        await axios.delete(`http://localhost:3000/api/assessments/${id}`);
        setAssessmentData((prevData) => prevData.filter((assessment) => assessment.id !== id));
      } else if (type === 'contact') {
        await axios.delete(`http://localhost:3000/api/contacts/${id}`);
        setContactData((prevData) => prevData.filter((contact) => contact.id !== id));
      }
    } catch (error) {
      console.error('Error deleting data: ', error);
    }
  };  

  return (
    <div className="admin-dashboard-container">
      <div className="Hi-Admin">Hi-Admin...</div>
      <h2 className="wellcome-admin">Wellcome Back!!👋😁</h2>
      <h1 className="Dashboard-admin">Admin Dashboard</h1>
      <div className="button-container">
        <button onClick={() => setShowReservations(!showReservations)}>
          {showReservations ? 'Hide Reservations' : 'Show Reservations'}
        </button>
        <button onClick={() => setShowAssessments(!showAssessments)}>
          {showAssessments ? 'Hide Assessments' : 'Show Assessments'}
        </button>
        <button onClick={() => setShowContacts(!showContacts)}>
          {showContacts ? 'Hide Contacts' : 'Show Contacts'}
        </button>
      </div>
      <div className="dashboard-sections">
        {showReservations && (
          <div className="reservations-section">
            <h2>Reservations</h2>
            {reservationData.length > 0 ? (
              <div className="reservation-list">
                {reservationData.map((reservation) => (
                  <div key={reservation.id} className="reservation-item">
                    <h3>Reservation {reservation.id}</h3>
                    <div className="reservation-details">
                      <p><strong>Name:</strong> {reservation.name}</p>
                      <p><strong>Phone:</strong> {reservation.phone}</p>
                      <p><strong>Email:</strong> {reservation.email}</p>
                      <p><strong>Selected Service:</strong> {reservation.service}</p>
                      <p><strong>Selected Branch:</strong> {reservation.branch}</p>
                      <p><strong>Selected Day:</strong> {new Date(reservation.day).toLocaleDateString()}</p>
                      {reservation.status === 'Confirmed' ? (
                        <div className="status-confirmed">
                          <p><strong>Status:</strong> {reservation.status}</p>
                          <button className="delete-button" onClick={() => handleDelete('reservation', reservation.id)}>Delete</button>
                        </div>
                      ) : (
                        <div className="status-pending">
                          <button className="confirm-button" onClick={() => handleConfirmReservation(reservation.id)}>Confirm</button>
                          <button className="delete-button" onClick={() => handleDelete('reservation', reservation.id)}>Delete</button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No reservations yet.</p>
            )}
          </div>
        )}
        {showAssessments && (
          <div className="assessments-section">
            <h2>Assessments</h2>
            {loading ? (
              <p>Loading assessments...</p>
            ) : assessmentData.length > 0 ? (
              <div className="assessment-list">
                {assessmentData.map((assessment) => (
                  <div key={assessment.id} className="assessment-item">
                    <h3>Assessment {assessment.id}</h3>
                    <div className="assessment-details">
                      <p><strong>Name:</strong> {assessment.name}</p>
                      <p><strong>Assessment:</strong> {assessment.assessment}</p>
                      <p><strong>Day:</strong> {new Date(assessment.day).toLocaleDateString()}</p>
                      <button className="delete-button" onClick={() => handleDelete('assessment', assessment.id)}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No assessments yet.</p>
            )}
          </div>
        )}
        {showContacts && (
          <div className="contacts-section">
            <h2>Contacts</h2>
            {contactData.length > 0 ? (
              <div className="contact-list">
                {contactData.map((contact) => (
                  <div key={contact.id} className="contact-item">
                    <h3>Contact {contact.id}</h3>
                    <div className="contact-details">
                      <p><strong>Name:</strong> {contact.name}</p>
                      <p><strong>Phone:</strong> {contact.telepon}</p>
                      <p><strong>Email:</strong> {contact.email}</p>
                      <p><strong>Subject:</strong> {contact.subject}</p>
                      <p><strong>Message:</strong> {contact.message}</p>
                      <p><strong>Branch:</strong> {contact.branch}</p>
                      <button className="delete-button" onClick={() => handleDelete('contact', contact.id)}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No contacts yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
