import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-social">
          <a href="https://github.com/aditiaangga" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          <a href="https://www.linkedin.com/in/aditia-angga-perdana-67a862aa/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        </div>
        <p>© 2026 Aditia Angga Perdana. Built with React</p>
        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">↑</button>
      </div>
    </footer>
  );
}

export default Footer;