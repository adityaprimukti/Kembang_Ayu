import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/UserProfile.css'; // Import CSS file

const UserProfile = () => {
  const [reservations, setReservations] = useState([]);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [showReservations, setShowReservations] = useState(false);

  useEffect(() => {
    // Fetch user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);

    // Fetch reservations from backend
    fetchReservations();
  }, []);

  const fetchReservations = () => {
    axios.get('http://localhost:3000/api/reservations', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(response => {
        setReservations(response.data);
      })
      .catch(error => {
        console.error('Error fetching reservations:', error);
        setError('Error fetching reservations');
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/reservations/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(response => {
        console.log('Reservation deleted successfully:', response.data);
        // Update reservations state after delete
        setReservations(reservations.filter(reservation => reservation.id !== id));
      })
      .catch(error => {
        console.error('Error deleting reservation:', error);
        setError('Error deleting reservation');
      });
  };

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      {user ? (
        <div className="user-details">
          <p><strong>Username :</strong> {user.username}</p>
          <p><strong>Email    :</strong> {user.email}</p>
          <p><strong>Phone    :</strong> {user.phone}</p>
        </div>
      ) : (
        <p>No user data available.</p>
      )}

      <button className="toggle-button" onClick={() => setShowReservations(!showReservations)}>
        {showReservations ? 'Hide Reservation History' : 'Show Reservation History'}
      </button>

      {showReservations && (
        <div className="reservation-history">
          <h2>Reservation History</h2>
          {error && <p>{error}</p>}
          {reservations.length > 0 ? (
            <div>
              {reservations.map((reservation, index) => (
                <div key={reservation.id} className="reservation-item1">
                  <h3>Reservation {index + 1}</h3>
                  <p><strong>Selected Service:</strong> {reservation.service}</p>
                  <p><strong>Selected Branch:</strong> {reservation.branch}</p>
                  <p><strong>Selected Day:</strong> {reservation.day}</p>
                  <p><strong>Status:</strong> {reservation.status ? reservation.status : 'Pending'}</p>
                  <button onClick={() => handleDelete(reservation.id)}>Delete</button>
                </div>
              ))}
            </div>
          ) : (
            <p>No reservations yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
