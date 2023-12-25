import React from 'react';
import { FaSearch, FaUndo } from 'react-icons/fa';
import './CompanySearchEngine.css'; // Import CSS file for styling

const CompanySearchEngine = () => {
    const resetInput = () => {
        document.getElementById('companyName').value = ''; // Clear input field
      };
      

  const searchZauba = () => {
    const companyName = document.getElementById('companyName').value;
    const query = encodeURIComponent(`${companyName}+ zaubacorp`);
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  };

  const searchCompanyCheck = () => {
    const companyName = document.getElementById('companyName').value;
    const query = encodeURIComponent(`${companyName}+ thecompanycheck`); // Replace 'thecompanycheck.com' with the actual domain
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  };

  const searchTofler = () => {
    const companyName = 'kreditbee'; // Replace 'kreditbee' with the company name you want to search
    const site = 'tofler';
    const query = encodeURIComponent(`${companyName}+${site}`);
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  };
  
  const siteSearch = () => {
    const companyName = document.getElementById('companyName').value;
    const site = 'site: '; // The space after ':' is important for formatting
    const query = encodeURIComponent(`${site}${companyName}`);
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  };

  return (
    <section className="card" style={{color: "whitesmoke"}}>
      <div style={{fontWeight: "bold", fontSize: "20px", margin: "20px" ,}}className="header_h1">
        Company Search Engine
      </div>

      <div className="company-input-container">
        <input
          type="text"
          id="companyName"
          className="company-input"
          placeholder="Enter Company Name"
          style={{color: "whitesmoke", fontWeight: "bold", fontFamily: ""}}
        />
        <button className="reset-button" onClick={resetInput}>
          <FaUndo className="icon" /> {/* Undo icon */}
        </button>
      </div>

      <div className="button-container">
        <button className="search-button zauba" onClick={searchZauba}>
          Zauba <FaSearch className="icon" /> {/* Search icon */}
        </button>
        <button className="search-button company-check" onClick={searchCompanyCheck}>
          Company Check <FaSearch className="icon" /> {/* Search icon */}
        </button>
        <button className="search-button tofler" onClick={searchTofler}>
          Tofler <FaSearch className="icon" /> {/* Search icon */}
        </button>
        <button className="search-button website" onClick={siteSearch}>
          Website <FaSearch className="icon" /> {/* Search icon */}
        </button>
      </div>
    </section>
  );
};

export default CompanySearchEngine;
