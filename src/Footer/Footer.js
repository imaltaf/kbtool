import React, { useState } from 'react';
import { Avatar, Card, CardContent, IconButton } from '@mui/material';
import {
  Group,
  Twitter,
  GitHub,
  YouTube,
  LinkedIn,
  Instagram,
} from '@mui/icons-material';
import './Footer.css';
import Logo from "../Search/assests/op2.png"; // Replace 'your_logo_path' with your actual logo path

const Footer = () => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <footer className="footer-container">
      <div className="copyright">
      <span style={{ fontSize: '20px' }}>
  © 2023 to 2024 All rights reserved<span style={{ marginLeft: '50px' }}>Developed By : Team-X1</span>
</span>


        <IconButton onClick={toggleVisibility} aria-label="Team">
          <Group style={{ color: '#ffffff', fontSize: '38px' }} />
        </IconButton>
      </div>
      {!isHidden && (
        <div className="team-profiles">
          <Card className="profile">
            <CardContent style={{ background: '#1d2b3a', color: 'whitesmoke' }}>
              <Avatar src="https://avatars.githubusercontent.com/u/121569160?v=4" />
              <h3>A L T A F</h3>
              <p>DevOps and Full Stack Developer</p>
            </CardContent>
          </Card>
          <Card className="profile">
            <CardContent style={{ background: '#1d2b3a', color: 'whitesmoke' }}>
              <Avatar src="https://avatars.githubusercontent.com/u/127886814?v=4" />
              <h3>Waseem Akram</h3>
              <p>Full Stack Web Developer</p>
            </CardContent>
          </Card>
        </div>
      )}
      {/* Placeholder for the logo */}
      <div position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <img src={Logo} alt="Your Logo" height="40px" />
        {/* Adjust width and add your logo image */}
      </div>
      <div className="social-icons">
  {/* Social Media Icons */}
  <IconButton aria-label="Twitter">
    <a href="https://twitter.com/opensec__ai" target="_blank" rel="noopener noreferrer">
      <Twitter style={{ color: '#1DA1F2', fontSize: '36px' }} />
    </a>
  </IconButton>
  <IconButton aria-label="GitHub">
    <a href="https://github.com/opensecai" target="_blank" rel="noopener noreferrer">
      <GitHub style={{ color: 'white', fontSize: '36px' }} />
    </a>
  </IconButton>
  <IconButton aria-label="YouTube">
    <a href="https://www.youtube.com/@opensec_Ai" target="_blank" rel="noopener noreferrer">
      <YouTube style={{ color: '#FF0000', fontSize: '36px' }} />
    </a>
  </IconButton>
  <IconButton aria-label="LinkedIn">
    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
      <LinkedIn style={{ color: '#2867B2', fontSize: '36px' }} />
    </a>
  </IconButton>
  <IconButton aria-label="Instagram">
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
      <Instagram style={{ color: '#8a3ab9', fontSize: '36px' }} />
    </a>
  </IconButton>
</div>

    </footer>
  );
};

export default Footer;
