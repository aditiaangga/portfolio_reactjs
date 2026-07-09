import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profileImg from '../assets/images/photo.jpg';

function Main() {

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImg} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/aditiaangga" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/aditia-angga-perdana-67a862aa/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Aditia Angga <span className="hero-highlight">Perdana</span></h1>
          <p className="hero-role">✦ Full Stack Quality Engineer</p>
          <p className="hero-tagline">
            Building test automation frameworks that make software teams move faster — across web, mobile, API, and performance testing.
          </p>
          <div className="hero-cta-group">
            <button className="hero-btn hero-btn-primary" onClick={scrollToProjects}>See My Work</button>
            <button className="hero-btn hero-btn-secondary" onClick={scrollToContact}>Let's Talk</button>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/aditiaangga" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/aditia-angga-perdana-67a862aa/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;