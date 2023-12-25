import React, { useState } from 'react';
import { FaClipboard } from 'react-icons/fa'; // Import the desired React Icon
import './CopyButton.css'; // Import your CSS file for styling
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';

const CopyButton = () => {
  const [copiedText, setCopiedText] = useState('');
  const handleCopy = (text, e) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
  
    const span = document.createElement('span');
    span.textContent = 'Copied!';
    span.classList.add('copied-message');
  
    // Position the message relative to the clicked button
    const rect = e.target.getBoundingClientRect();
    span.style.top = `${rect.top - 30}px`;
    span.style.left = `${rect.left + (rect.width / 2)}px`;
  
    document.body.appendChild(span);
  
    setTimeout(() => {
      document.body.removeChild(span);
    }, 2000);
  };
  
  

  return (
    <div style={{ border: '2px solid #ddd', borderRadius: '10px', padding: '20px' }} className='container-button'>
      <div className='copy-button-container'>
        <h1 style={{ margin: '10px', padding: '10px' }}>copy-comments</h1>
        <div className='buttons-container' style={{ paddingTop: '15px', margin: '25px' }}>
          <div className='button-row-right'>
            <button className='Copy-button' onClick={(e) => handleCopy('QID75-Latest 3-months statement not available, Need Recent 3/6 Months Bank Acc statement Hence Given Preset.', e)}>
              <span style={{ marginRight: '10px' }}>QID-75</span>
              <FaClipboard style={{ fontSize: '24px', color: '#3498db' }} />
            </button>
            <button className='Copy-button' onClick={(e) => handleCopy('Need valid id card or pay slips to confirm salary', e)}>
              <span style={{ marginRight: '10px' }}>Docs</span>
              <FaClipboard style={{ fontSize: '24px', color: '#2ecc71' }} />
            </button>
            <button className='Copy-button' onClick={(e) => handleCopy('salary not found -- ', e)}>
              <span style={{ marginRight: '10px' }}>not salary</span>
              <FaClipboard style={{ fontSize: '24px', color: '#e74c3c' }} />
            </button>
            <button className='Copy-button' onClick={(e) => handleCopy('Need to confirm salary -- ', e)}>
              <span style={{ marginRight: '10px' }}>salary-hold</span>
              <FaClipboard style={{ fontSize: '24px', color: '#f39c12' }} />
            </button>
            <button className='Copy-button' onClick={(e) => handleCopy('Need till date bank statement -- Hence given p-reset ', e)}>
              <span style={{ marginRight: '10px' }}>1m p-reset</span>
              <FaClipboard style={{ fontSize: '24px', color: '#9b59b6' }} />
            </button>
          </div>
          <div className='button-row'></div>
        </div>
      </div>
    </div>
  );
};

export default CopyButton;
