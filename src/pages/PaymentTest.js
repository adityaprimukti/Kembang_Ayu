import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import '../Styles/PaymentTest.css';

const PaymentTest = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedService, selectedBranch, name, phone, email, selectedDay, price } = location.state || {};

  const handlePayment = async () => {
    const serviceId = selectedService.toLowerCase().replace(/ /g, '_');

    // Fetch transaction token from server
    const response = await fetch('http://localhost:5000/charge', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order_id: 'order-' + Date.now(),
        gross_amount: price,
        customer_details: {
          first_name: name,
          last_name: '',
          email: email,
          phone: phone,
        },
        item_details: [
          {
            id: serviceId,
            price: price,
            quantity: 1,
            name: selectedService,
          },
        ],
      }),
    });

    if (!response.ok) {
      console.log('Failed to fetch transaction token');
      alert('Failed to initiate payment');
      return;
    }

    const data = await response.json();

    // Initiate Snap popup
    window.snap.pay(data.token, {
      onSuccess: function (result) {
        console.log('Payment successful:', result);
        alert('Payment successful');
        navigate('/afterhome');
      },
      onPending: function (result) {
        console.log('Payment pending:', result);
        alert('Payment pending');
        navigate('/afterhome');
      },
      onError: function (result) {
        console.log('Payment error:', result);
        alert('Payment error');
      },
    });
  };

  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });

  const formattedPrice = formatter.format(price);

  const loadSnapScript = () => {
    const script = document.createElement('script');
    script.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
    script.setAttribute('data-client-key', 'SB-Mid-client-5Eyx-ub6TuQ4TFn8');
    document.body.appendChild(script);
  };

  useEffect(() => {
    loadSnapScript();
  }, []);

  return (
    <div className="back-container">
      <div className="payment-container">
        <h1 className="payment-title">Midtrans Payment Test</h1>
        <div className="payment-details">
          <p>Service: {selectedService}</p>
          <p>Branch: {selectedBranch}</p>
          <p>Name: {name}</p>
          <p>Phone: {phone}</p>
          <p>Email: {email}</p>
          <p>Date: {selectedDay}</p>
          <p>Price: {formattedPrice}</p>
        </div>
        <div className="payment-actions">
          <Link to="/reserved">
            <button className="back-button">Back</button>
          </Link>
          <button className="pay-button" onClick={handlePayment}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentTest;