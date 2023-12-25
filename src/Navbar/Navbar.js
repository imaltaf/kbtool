import React from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../Search/assests/11Logo11-removebg-preview.png"; // Replace 'your_logo_path' with your actual logo path

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        {/* Centered logo */}
        <img src={Logo} alt="Your Logo" height="86px" /> {/* Adjust height as needed */}

        {/* Menu button */}
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>

        {/* Dropdown */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          getContentAnchorEl={null}
          elevation={0}
          PaperProps={{
            style: {
              background: 'rgba(255, 255, 255, 0.8)',
              boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
            },
          }}
        >
          <MenuItem onClick={handleMenuClose}>KB-Tool</MenuItem>
          <MenuItem onClick={handleMenuClose}>BL-Tools</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
