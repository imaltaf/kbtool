import React, { useState } from 'react';
import { FaSearch, FaUndo } from 'react-icons/fa';
import './CompanySearchEngine.css'; // Import CSS file for styling

const CompanySearchEngine = () => {
  const [timer, setTimer] = useState(null);

  const resetInput = () => {
    document.getElementById('companyName').value = ''; // Clear input field
    setTimer(null); // Reset timer
  };

  const openTab = (url) => {
    window.open(url, '_blank');
  };

  const searchAll = () => {
    const companyName = document.getElementById('companyName').value;

    const zaubaQuery = encodeURIComponent(`${companyName}+zaubacorp`);
    const companyCheckQuery = encodeURIComponent(`${companyName}+thecompanycheck`);
    const toflerQuery = encodeURIComponent(`${companyName}+tofler`);
    const websiteQuery = encodeURIComponent(`site: ${companyName}`);

    const queries = [
      `https://www.google.com/search?q=${zaubaQuery}`,
      `https://www.google.com/search?q=${companyCheckQuery}`,
      `https://www.google.com/search?q=${toflerQuery}`,
      `https://www.google.com/search?q=${websiteQuery}`,
    ];

    // Set a timer to reset after 15 seconds
    setTimer(setTimeout(() => {
      queries.forEach((query, index) => {
        setTimeout(() => openTab(query), (index + 1) * 1000); // Open each tab with a delay of 1 second
      });
      resetInput();
    }, 1000));
  };

  return (
    <section className="card" style={{ color: "whitesmoke" }}>
      <div style={{ fontWeight: "bold", fontSize: "20px", margin: "20px" }} className="header_h1">
        Company Search Engine
      </div>

      <div className="company-input-container">
        <input
          type="text"
          id="companyName"
          className="company-input"
          placeholder="Enter Company Name"
          style={{ color: "whitesmoke", fontWeight: "bold" }}
        />
        <button className="reset-button" onClick={resetInput}>
          {timer ? `Reset (${Math.ceil(timer / 1000)}s)` : <FaUndo className="icon" />}
        </button>
      </div>

      <div className="button-container">
        <button className="search-button zauba" onClick={() => openTab(`https://www.google.com/search?q=${encodeURIComponent(document.getElementById('companyName').value + '+zaubacorp')}`)}>
          Zauba <FaSearch className="icon" /> {/* Search icon */}
        </button>
        <button className="search-button company-check" onClick={() => openTab(`https://www.google.com/search?q=${encodeURIComponent(document.getElementById('companyName').value + '+thecompanycheck')}`)}>
          Company Check <FaSearch className="icon" /> {/* Search icon */}
        </button>
        <button className="search-button tofler" onClick={() => openTab(`https://www.google.com/search?q=${encodeURIComponent(document.getElementById('companyName').value + '+tofler')}`)}>
          Tofler <FaSearch className="icon" /> {/* Search icon */}
        </button>
        <button className="search-button website" onClick={() => openTab(`https://www.google.com/search?q=${encodeURIComponent(document.getElementById('companyName').value + '+site')}`)}>
          Website <FaSearch className="icon" /> {/* Search icon */}
        </button>
        <button className="search-button all" onClick={searchAll}>
          All Search <FaSearch className="icon" /> {/* Search icon */}
        </button>
      </div>
    </section>
  );
};

export default CompanySearchEngine;
