import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profileImg from '../assets/images/photo.jpg';

function Main() {

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
          <h1>Aditia Angga Perdana</h1>
          <p>Full Stack Quality Engineer</p>

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