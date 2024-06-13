import React, { useState } from "react";
import axios from "axios";
import "../Styles/KontakPage.css";

const KontakPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    telepon: "",
    email: "",
    subject: "",
    message: "",
    branch: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  axios.post("http://localhost:3000/api/contacts", formData)
    .then(response => {
      console.log(response.data);  // Log response data for debugging
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        telepon: "",
        email: "",
        subject: "",
        message: "",
        branch: ""
      });
    })
    .catch(error => {
      console.error("Error submitting the form:", error);  // Log detailed error message
      alert("There was an error submitting the form!");
    });
};

  return (
    <div className="kontak-page">
      <div className="kontak">
        <img className="kontak-child" alt="" src="/rectangle-45@2x.png" />
        <div className="about-us3">
          <div className="about-us4">
            <div className="about-us5">
              <span className="about-us-txt-container1">
                <b>Contact </b>
              </span>
              <span className="about-us-txt-container2">
                <b className="us1">Us</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="kontak-2">
        <div className="kontak-2-child" />
        <div className="call-us-now-container">
          <div className="kembang-ayu-wrapper3">
            <b className="kembang-ayu8">Kembang Ayu</b>
          </div>
          <p className="call-us-now">
            Call us now! We are available to answer your call daily from 09:00
            AM to 05:00 PM. If your call is not being answered, please expect us
            to call you back. Or send your inquiry, or booking request and our
            team will contact you as soon as possible.
          </p>
          <p className="find-kembang-ayu">&nbsp;</p>
          <p className="find-kembang-ayu">Find Kembang Ayu on:</p>
          <ul className="telepon-888-555-1234-instagr3">
            <li className="email-kembangayugmailcom">telepon: +888-555-1234</li>
            <li className="email-kembangayugmailcom">
              instagram: kembangayu.id
            </li>
            <li className="email-kembangayugmailcom">
              email: kembangayu@gmail.com
            </li>
          </ul>
          <p className="find-kembang-ayu">&nbsp;</p>
          <p className="find-kembang-ayu">Head Office: Yumiko Alida</p>
        </div>
        <b className="send-your-message">Send your message here</b>
        <form onSubmit={handleSubmit}>
          <div className="component-11">
            <select className="branch-select1" name="branch" onChange={handleChange} value={formData.branch}>
              <option value="">--Choose Branch--</option>
              <option value="Green House Boutique">Green House Boutique</option>
              <option value="Indonesian Kempiski">Indonesian Kempiski</option>
              <option value="Ayyarta Hotel">Ayyarta Hotel</option>
              <option value="Sambi Resort">Sambi Resort</option>
              <option value="JW Marriot">JW Marriot</option>
              <option value="Katamaran">Katamaran</option>
              <option value="Grand Altuz">Grand Altuz</option>
            </select>
          </div>
          <div className="rectangle-parent5">
            <input className="name1" type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="rectangle-parent6">
            <input className="telepon1" type="text" placeholder="Telepon" name="telepon" value={formData.telepon} onChange={handleChange} />
          </div>
          <div className="rectangle-parent7">
            <input className="email2" type="text" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="rectangle-parent8">
            <input className="subject" type="text" placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} />
          </div>
          <div className="group-parent5">
            <div className="rectangle-wrapper">
              <input className="your-message" type="text" placeholder="Your Message" name="message" value={formData.message} onChange={handleChange} />
            </div>
          </div>
          <div className="vector-parent4">
            <button type="submit" className="send6">Send</button>
          </div>
        </form>
      </div>
      <div className="footer3">
        <div className="group-parent6">
          <div className="kembang-ayu-parent1">
            <b className="kembang-ayu9">Kembang Ayu |</b>
            <div className="jl-marunda-makmur-container3">
              <p className="find-kembang-ayu">
                Jl. Marunda Makmur, RT.1/RW.1, Marunda, Kec. Cilincing, Jkt
                Utara, Daerah Khusus Ibukota Jakarta 14150
              </p>
              <p className="find-kembang-ayu">&nbsp;</p>
              <ul className="telepon-888-555-1234-instagr4">
                <li className="email-kembangayugmailcom">
                  telepon: +888-555-1234
                </li>
                <li className="email-kembangayugmailcom">
                  instagram: kembangayu.id
                </li>
                <li>email: kembangayu@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="about-service-contact-us-our-c-parent1">
            <div className="about-service-contact-container3">
              <div className="our-service33">
                <b>Company |</b>
              </div>
              <div className="find-kembang-ayu">About</div>
              <div className="find-kembang-ayu">Service</div>
              <div className="find-kembang-ayu">Contact Us</div>
              <div className="find-kembang-ayu">Our Center</div>
            </div>
            <div className="our-service-wrapper11">
              <div className="our-service-wrapper11">
                <div className="about-us5"></div>
              </div>
              <div className="our-service-wrapper13"></div>
              <div className="our-service-wrapper14"></div>
            </div>
          </div>
          <div className="spa-treatment-hair-treatment-n-parent1">
            <div className="spa-treatment-hair-container3">
              <div className="our-service34">
                <b>Service |</b>
                <div className="find-kembang-ayu">Spa Treatment</div>
                <div className="find-kembang-ayu">Hair Treatment</div>
                <div className="find-kembang-ayu">Nails</div>
                <div className="find-kembang-ayu">Massaging the Face</div>
                <div className="find-kembang-ayu">Collagen Injection</div>
                <div className="find-kembang-ayu">Facial Mask</div>
              </div>
              <div className="green-house-boutique-indonesia-parent1">
                <div className="green-house-boutique-container5">
                  <div className="our-service35">
                    <b>Our Center |</b>
                                        <div className="find-kembang-ayu1">Green House Boutique</div>
                    <div className="find-kembang-ayu1">Indonesian Kempiski</div>
                    <div className="find-kembang-ayu1">Ayyarta Hotel</div>
                    <div className="find-kembang-ayu1">Sambi Resort</div>
                    <div className="find-kembang-ayu1">JW Marriot</div>
                    <div className="find-kembang-ayu1">Katamaran</div>
                    <div className="find-kembang-ayu1">Grand Altuz</div>
                  </div>
                  <div className="copyright-2024-3">Copyright 2024 - Webbers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KontakPage;

