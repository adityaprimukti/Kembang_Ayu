import React, { useRef } from "react";
import "../Styles/AfterHome.css";
import { Link } from "react-router-dom";

const AfterHome = () => {
  const aboutUsRef = useRef(null);
  const ServiceRef = useRef(null);
  

  const scrollToAboutUs = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToService = () => {
    if (ServiceRef.current) {
      ServiceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="home-sesudah-login">
      <div className="home">
        <div className="home-child" data-scroll-to="rectangle" />
        <div className="home-item" />
        <img className="home-inner" alt="" src="/rectangle-33@2x.png" />
        <div className="natural-beauty-is">
          Natural beauty is not just about outer appearance. Here, you are
          invited to celebrate beauty in all its forms, from within and without.
        </div>
        <div className="navbar">
          <div className="frame-parent">
            <div className="kembang-ayu-wrapper">
              <b className="kembang-ayu">Kembang Ayu</b>
            </div>
            <div className="frame-group">
              <div className="kembang-ayu-wrapper">
                <div className="home1">Home</div>
              </div>
              <div className="kembang-ayu-wrapper"onClick={scrollToAboutUs}>
                <div className="About">About</div>
              </div>
              <div className="kembang-ayu-wrapper"onClick={scrollToService}>
                <div className="service">Service</div>
              </div>
              <div className="kembang-ayu-wrapper">
              <Link to="/kontakpage" className="no-underline">            
                <div className="ContactUs">Contact Us</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="vector-parent">
          <img className="instance-child" alt="" src="/rectangle-14.svg" />
          <Link to= "/reserved" >
          <b className="send">Reserve Now</b>
          </Link>
        </div>
        <div className="natural-beauty">natural beauty</div>
        <div className="your">your</div>
      </div>
      <div ref={aboutUsRef} className="about-us">
        <img className="group-icon" alt="" src="/group.svg" />
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
        <div className="about-us1">
          <div className="about-us2">
            <span className="about-us-txt-container">
              <b>{`About `}</b>
              <b className="us">{`Us `}</b>
            </span>
          </div>
        </div>
        <img className="group-icon" alt="" src="/group.svg" />
        <div className="since-2004-we">
          Since 2004, we have been satisfying our customers with high service
          and a friendly atmosphere. Kembang Ayu is not just a place, but also
          an experience. At "Kembang Ayu", the use of natural products is the
          mantra. Every touch is done with care, with products made from natural
          Indonesian ingredients that are rich in nutrients and environmentally
          friendly. Kembang ayu is now spread across big cities in Indonesia.
        </div>
        <div className="vector-group">
        <Link to="/Frame">
          <img className="instance-child" alt="" src="/rectangle-14.svg" />
          <b className="send">Find Our Center</b>
          </Link>
        </div>
      </div>
      <div ref={ServiceRef} className="our-service">
        <div className="our-service-parent">
          <div className="our-service1" data-scroll-to="ourServiceContainer">
            <div className="our-service-child" />
            <div className="overall-care-includes">
              Overall care includes hair care, spa, nails and body care. This
              will provide maximum care for your body.
            </div>
            <div className="this-will-maximize">
              This will maximize your facial care to make it look younger and
              more well-groomed.
            </div>
            <div className="image-5">
              <Link to ="/allservice">
              <img className="image-5-icon" alt="" src="/image-5@2x.png" />
              </Link>
            </div>
            <div className="image-51">
            <Link to ="/faceservice">
              <img className="image-5-icon" alt="" src="/image-51@2x.png" />
              </Link>
            </div>
          </div>
          <div className="our-service-wrapper">
            <div className="our-service2">
              <div className="about-us2">
                <span className="about-us-txt-container">
                  <b>
                    <span>Our</span>
                    <span className="span">{` `}</span>
                  </b>
                  <b className="service1">Service</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="customer-say">
        <div className="desain-tanpa-judul22-parent">
          <img
            className="desain-tanpa-judul22"
            alt=""
            src="/desain-tanpa-judul22@2x.png"
          />
          <div className="group-wrapper">
            <div className="rectangle-parent">
              <div className="group-child" />
              <b className="sofiia">sofiia</b>
              <i className="the-product-is">
                “The product is really good, my skin feels firmer and looks
                brighter. There are no regrets about having facial treatments
                here”
              </i>
            </div>
          </div>
          <img className="instance-inner" alt="" src="/group-54.svg" />
          <img className="instance-child1" alt="" src="/group-541@2x.png" />
        </div>
        <div className="what-our-customer-say-parent">
          <div className="what-our-customer-container">
            <p className="what-our">
              <b>{`What `}</b>
              <b className="us">{`Our `}</b>
            </p>
            <p className="what-our">
              <b>Customer Say?</b>
            </p>
          </div>
          <div className="more-than-10000">
            More than 10000+ of our users are satisfied with our services. It's
            time for you to share your experience
          </div>
          <div className="vector-container">
            <img className="instance-child" alt="" src="/rectangle-141.svg" />
            <Link to ="/testimoni">
            <b className="send2">send Your Assessment</b>
          </Link>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="copyright-2024-">Copyright 2024 - Webbers</div>
        <div className="group-parent">
          <div className="kembang-ayu-parent">
            <b className="kembang-ayu1">Kembang Ayu</b>
            <div className="jl-marunda-makmur-container">
              <p className="what-our">
                Jl. Marunda Makmur, RT.1/RW.1, Marunda, Kec. Cilincing, Jkt
                Utara, Daerah Khusus Ibukota Jakarta 14150
              </p>
              <p className="what-our">&nbsp;</p>
              <ul className="telepon-888-555-1234-instagr">
                <li className="instagram-kembangayuid">
                  telepon: +888-555-1234
                </li>
                <li className="instagram-kembangayuid">
                  instagram: kembangayu.id
                </li>
                <li>email: kembangayu@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="about-service-contact-us-our-c-parent">
            <div className="about-service-contact-container">
              <p className="what-our">About</p>
              <p className="what-our">Service</p>
              <p className="what-our">Contact Us</p>
              <p className="what-our">Our Center</p>
            </div>
            <div className="our-service-container">
              <div className="our-service-container">
                <b className="about-us2">Company</b>
              </div>
            </div>
            <div className="our-service-container">
              <div className="our-service-container">
                <b className="about-us2">Company</b>
              </div>
            </div>
          </div>
          <div className="spa-treatment-hair-treatment-n-parent">
            <div className="spa-treatment-hair-container">
              <p className="what-our">Spa Treatment</p>
              <p className="what-our">Hair Treatment</p>
              <p className="what-our">Nails</p>
              <p className="what-our">Massaging the Face</p>
              <p className="what-our">Collagen Injection</p>
              <p className="what-our">Facial Mask</p>
            </div>
            <div className="group-div">
              <div className="our-service8">
                <b className="about-us2">Service</b>
              </div>
            </div>
          </div>
          <div className="green-house-boutique-indonesia-parent">
            <div className="green-house-boutique-container">
              <p className="what-our">Green House Boutique</p>
              <p className="what-our">Indonesia Kempiski</p>
              <p className="what-our">Ayyartta Hotel</p>
              <p className="what-our">Sambi Resort</p>
              <p className="what-our">JW Marriot</p>
              <p className="what-our">Katamaran</p>
              <p className="what-our">Grand Altuz</p>
            </div>
            <div className="our-service-wrapper1">
              <div className="our-service10">
                <b className="about-us2">Our Center</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterHome;
