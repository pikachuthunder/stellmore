import React from 'react'
import Header from './Headers'
import CategoriesSection from './Categoriessection';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import video from'../assets/video.mp4'
import Showrooom from './Showroom'
import {CompanyJourney, BrandJourney} from './Milestone';
import Project from './ProjectSection';
import Client from './ClientSection';
import Contact from './ContactSection';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="home-container">
      <Header/>
      <Carousel fade indicators={false} controls={true} interval={3000}>
        {/* Slide 1 */}
        <Carousel.Item>
          <video
            className="hero-video"
            src={video}
            autoPlay
            loop
            muted
            playsInline
          />
          {/* <div 
            className="hero-slide" 
            style={{ backgroundImage: `url(${hero5})` }}
          >
          </div> */}
          <Carousel.Caption>
          <h3>Crafted in style Designed by light</h3>
          <div className="d-flex gap-3 justify-content-center">
            <Link to="/projects">
              <button className="btn-outline btn-white-outline">
                View Projects
              </button>
            </Link>
            <button
              className="btn-outline btn-white-outline"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </button>
          </div>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        <div className="section-label-line" />
        <CategoriesSection/>
        <div className="section-label-line" />
      </div>
      <div>
        <div className="section-label-line" />
        <Showrooom/>
        <div className="section-label-line" />
      </div>
      <div>
        <CompanyJourney/>
        <BrandJourney/>
      </div>
      <div>
        <Project/>
      </div>
      <Client/>
      <Contact/>
      <div style={{ textAlign: "center", marginTop: "52px" }}>
        <div className="gold-line" />
        <p style={{
          fontFamily: "'Cinzel', serif", fontSize: "10px", letterSpacing: "4px",
          color: "rgba(201,168,76,0.28)", textTransform: "uppercase", marginTop: "16px",
        }}>
          City Fanoos Trading · Est. Dubai
        </p>
      </div>
    </div>
    
  )
}

export default Home