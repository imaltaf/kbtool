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
      <Toolbar sx={{ display: 'flex', justifyContent: 'center',marginLeft: "10px" }}>
        {/* Centered logo */}
        <img src={Logo} alt="Your Logo" height="86px" /> {/* Adjust height as needed */}

        {/* Menu button */}
        <IconButton
         size="larger"
         edge="end"
         color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          style={{margin: "10px"}}
        >
          <MenuIcon />
        </IconButton>

        {/* Dropdown */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>KB Tool</MenuItem>
          <MenuItem onClick={handleMenuClose}>Business Tools</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
