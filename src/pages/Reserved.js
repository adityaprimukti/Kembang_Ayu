import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/Reserved.css';

const Reserved = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [price, setPrice] = useState(0);
  const [showPopup, setShowPopup] = useState(false); // State for showing the popup

  const navigate = useNavigate();

  const handleReset = () => {
    setSelectedService('');
    setSelectedBranch('');
    setName('');
    setPhone('');
    setEmail('');
    setSelectedDay('');
    setPrice(0);
  };

  const handleServiceChange = (e) => {
    const service = e.target.value;
    setSelectedService(service);

    // Update the price based on the selected service
    switch (service) {
      case 'SPA Treatment':
        setPrice(1250000);
        break;
      case 'Hair Treatment':
        setPrice(400000);
        break;
      case 'Nails':
        setPrice(1500000);
        break;
      case 'Massaging The Face':
        setPrice(1250000);
        break;
      case 'Colagen Injections':
        setPrice(2500000);
        break;
      case 'Facial Mask':
        setPrice(750000);
        break;
      default:
        setPrice(0);
        break;
    }
  };

  const handleSubmit = async () => {
    // Validate the form fields
    if (!selectedService || !selectedBranch || !name || !phone || !email || !selectedDay || !price) {
      alert('Please fill in all fields');
      return;
    }

    const formData = {
      selectedService,
      selectedBranch,
      name,
      phone,
      email,
      selectedDay,
      price,
      userId: 1, // Ganti dengan ID pengguna yang benar dari tabel tbl_reglog
    };

    try {
      const response = await axios.post('http://localhost:3000/api/reservations', formData);
      console.log(response.data);
      const reservationId = response.data.reservationId;

      // Show popup for 2 seconds
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate('/paymenttest', { state: { ...formData, reservationId } }); // Navigate to UserProfile with formData and reservationId
        handleReset(); // Reset the form after successful submission
      }, 2000);
    } catch (error) {
      console.error('Error inserting reservation data: ', error);
    }
  };

  return (
    <div className="back-container1">
      <div className="reserved">
        <div className="reserved-inner">
          <div className="reservation">
            Reservation <span className="data">Data</span>
          </div>
          <div className="kembangayu">Kembang Ayu</div>
          <span className="fill-in-the">Fill in the data correctly</span>
          <div className="input-group">
            <div className="input-item">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text-1"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-item">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="text-1"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="input-item">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-item">
              <label htmlFor="date">Date</label>
              <input
                id="date"
                type="date"
                placeholder="Date"
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
              />
            </div>
          </div>

          <div className="select-group">
            <div className="select-item">
              <label htmlFor="service">Choose one of our services:</label>
              <select
                id="service"
                value={selectedService}
                onChange={handleServiceChange}
              >
                <option value="">--Choose Service--</option>
                <option value="SPA Treatment">SPA Treatment - Rp 1.250.000</option>
                <option value="Hair Treatment">Hair Treatment - Rp 400.000</option>
                <option value="Nails">Nails - Rp 1.500.000</option>
                <option value="Massaging The Face">Massaging The Face - Rp 1.250.000</option>
                <option value="Colagen Injections">Colagen Injections - Rp 2.500.000</option>
                <option value="Facial Mask">Facial Mask - Rp 750.000</option>
              </select>
            </div>
            <div className="select-item">
              <label htmlFor="branch">Choose one of our branches:</label>
              <select
                id="branch"
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
              >
                <option value="">--Choose Branch--</option>
                <option value="Branch 1">Green House Boutique</option>
                <option value="Branch 2">Indonesian Kempiski</option>
                <option value="Branch 3">Ayyarta Hotel</option>
                <option value="Branch 4">Sambi Resort</option>
                <option value="Branch 5">JW Marriot</option>
                <option value="Branch 6">Katamaran</option>
                <option value="Branch 7">Grand Altuz</option>
              </select>
            </div>
          </div>

          <div className="price-display">
            <p><strong>Price:</strong> {price ? `Rp ${price.toLocaleString()}` : 'Please select a service'}</p>
          </div>

          <div className="button-group">
            <button className="button reset-button" onClick={handleReset}>
              Reset
            </button>
            <NavLink to="/afterhome">
              <button className="button back">Back</button>
            </NavLink>
            <button className="button send-button" onClick={handleSubmit}>
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="success-reserved">
          <p>Reserved Success!</p>
        </div>
      )}
    </div>
  );
};

export default Reserved;
