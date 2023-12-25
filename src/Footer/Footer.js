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
          © 2023 to 2024 All rights reserved OpensecAiTeam
        </span>
        <IconButton onClick={toggleVisibility} aria-label="Team">
          <Group style={{ color: '#ffffff', fontSize: '38px' }} />
        </IconButton>
      </div>
      {!isHidden && (
        <div className="team-profiles">
          <Card className="profile">
            <CardContent style={{ background: '#1d2b3a', color: 'whitesmoke' }}>
              <Avatar src="/avatar2.jpg" />
              <h3>Shaik Altaf</h3>
              <p>DevOps and Full Stack Developer</p>
            </CardContent>
          </Card>
          <Card className="profile">
            <CardContent style={{ background: '#1d2b3a', color: 'whitesmoke' }}>
              <Avatar src="/avatar1.jpg" />
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
          <Twitter style={{ color: '#1DA1F2', fontSize: '36px' }} />
        </IconButton>
        <IconButton aria-label="GitHub">
          <GitHub style={{ color: '#181717', fontSize: '36px' }} />
        </IconButton>
        <IconButton aria-label="YouTube">
          <YouTube style={{ color: '#FF0000', fontSize: '36px' }} />
        </IconButton>
        <IconButton aria-label="LinkedIn">
          <LinkedIn style={{ color: '#2867B2', fontSize: '36px' }} />
        </IconButton>
        <IconButton aria-label="Instagram">
          <Instagram style={{ color: '#8a3ab9', fontSize: '36px' }} />
        </IconButton>
      </div>
    </footer>
  );
};

export default Footer;
