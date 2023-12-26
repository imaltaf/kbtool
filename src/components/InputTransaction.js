import React, { useState } from 'react';
import { writeText } from 'clipboard-polyfill';
import './InputTransaction.css';
import { FaCopy } from 'react-icons/fa';
import { MdRefresh } from 'react-icons/md';

const InputTransaction = () => {
  const [customerId, setCustomerId] = useState('');
  const [enteredIds, setEnteredIds] = useState('');
  const [finalResult, setFinalResult] = useState('');
  const [showFinalResult, setShowFinalResult] = useState(false);
  const [inputFocus, setInputFocus] = useState(null);

  const handleCustomerIdChange = (e) => {
    setCustomerId(e.target.value);
    setInputFocus('firstInput');
  };

  const handleEnteredIdsChange = (e) => {
    setEnteredIds(e.target.value);
    setInputFocus('secondInput');
  };

  const handleCopy = async () => {
    let result;

    if (!customerId.trim() && enteredIds.trim()) {
      const enteredIdsArray = enteredIds.split(' ').filter(Boolean);
      result = `${enteredIdsArray.length}:${enteredIdsArray.join(',')}`;
    } else {
      const enteredIdsArray = enteredIds.split(' ').filter(Boolean);
      result = `${customerId}:${enteredIdsArray.length}:${enteredIdsArray.join(',')}`;
    }

    setFinalResult(result.replace(/\s/g, ''));
    setShowFinalResult(true);

    try {
      await writeText(result.replace(/\s/g, ''));
      console.log('Text copied to clipboard:', result.replace(/\s/g, ''));
    } catch (error) {
      console.error('Failed to copy text to clipboard:', error);
    }
  };

  const handleReset = () => {
    setCustomerId('');
    setEnteredIds('');
    setFinalResult('');
    setShowFinalResult(false);
  };

  return (
    <div className='transaction-container'>
      <h1>In-put Transaction IDs</h1>
      <div className="input-row">
        <input
          type="text"
          value={customerId}
          onChange={handleCustomerIdChange}
          placeholder=" QID 106 and 117"
          style={{ width: '330px', fontWeight: "bold", color: "whitesmoke" }}
        />
      </div>
      <div className="input-row">
        <input
          type="text"
          value={enteredIds}
          onChange={handleEnteredIdsChange}
          placeholder="Enter transaction IDs"
          style={{ fontFamily: "sans-serif", fontSmooth: "large", fontWeight: "bold", width: '1570px', color: "whitesmoke" }}
        />
      </div>
      <div className="input-row button-row">
        <button style={{ background: "#0056b3", fontWeight: "bold", fontSize: "18px" }} className="copy-button" onClick={handleCopy}>
          <FaCopy style={{ fontSize: "20px" }} /> Copy
        </button>
        <button style={{ fontWeight: "bold", fontSize: "20px" }} className="reset-button" onClick={handleReset}>
          <MdRefresh style={{ fontSize: "20px" }} /> Reset
        </button>
      </div>
      <div className="input-row">
        <input
          style={{
            color: "white",
            backgroundColor: "transparent",
            width: "70%",
            maxWidth: "100%",
          }}
          type="text"
          value={finalResult}
          readOnly
          placeholder={'Final Result will be displayed here'}
          className={showFinalResult ? 'visible' : 'Final Result'}
        />
      </div>
    </div>
  );
};

export default InputTransaction;
