import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D5603AQGu0GNdkw5jHg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732452387622?e=1765411200&v=beta&t=hPl_r22249kxGItZDFwGwPtb_X2Tzl7D_MTVlLin7Do" alt="Avatar" />
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