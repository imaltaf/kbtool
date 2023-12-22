import React, { useState } from 'react';
import { FaClipboard } from 'react-icons/fa'; // Import the desired React Icon
import './CopyButton.css'; // Import your CSS file for styling

const CopyButton = () => {
  const [copiedText, setCopiedText] = useState('');

  const handleCopy = (text, e) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);

    // Create a span element for the copied message
    const span = document.createElement('span');
    span.textContent = 'Copied!';
    span.classList.add('copied-message');
    span.style.top = `${e.clientY - 30}px`; // Adjust positioning above the cursor
    span.style.left = `${e.clientX}px`;

    // Append the message to the body and remove after 2 seconds
    document.body.appendChild(span);
    setTimeout(() => {
      document.body.removeChild(span);
    }, 2000);
  };

  return (
    <div className='container-button'>
      <div className='copy-button-container'>
        <h1>copy-comments</h1>
        <div className='buttons-container'>
          <div className='button-row-right'>
            <button className='Copy-button' onClick={(e) => handleCopy('QID75-Latest 3-months statement not available, Need Recent 3/6 Months Bank Acc statement Hence Given Preset.', e)}>
              <FaClipboard /> QID-75 {/* Use the React Icon here */}
            </button>
            <button className='Copy-button' onClick={(e) => handleCopy('Need valid id card or pay slips to confirm salary', e)}>
              <FaClipboard /> Docs-reupload {/* Use the React Icon here */}
            </button>
            <button className='Copy-button' onClick={(e) => handleCopy('salary not found -- ', e)}>
              <FaClipboard /> not salary {/* Use the React Icon here */}
            </button>
            <button className='Copy-button' onClick={(e) => handleCopy('Need to confirm salary -- ', e)}>
              <FaClipboard /> salary-hold {/* Use the React Icon here */}
            </button>
            <button className='Copy-button' onClick={(e) => handleCopy('Need till date bank statement -- Hence given p-reset ', e)}>
              <FaClipboard /> 1m p-reset {/* Use the React Icon here */}
            </button>
          </div>
          <div className='button-row'></div>
        </div>
      </div>
    </div>
  );
};

export default CopyButton;
