import React, { useState, useEffect } from 'react';
import { writeText } from 'clipboard-polyfill';
import './InputTransaction.css';
import { FaCopy } from 'react-icons/fa';
import { MdRefresh } from 'react-icons/md';

const InputTransaction = () => {
  const [customerId, setCustomerId] = useState('');
  const [enteredIds, setEnteredIds] = useState('');
  const [finalResult, setFinalResult] = useState('');
  const [showFinalResult, setShowFinalResult] = useState(false);
  const [resetTimer, setResetTimer] = useState(null);

  useEffect(() => {
    let timerId;

    if (resetTimer !== null) {
      timerId = setInterval(() => {
        setResetTimer((prevTimer) => prevTimer - 1000);

        if (resetTimer <= 0) {
          clearInterval(timerId);
          handleReset();
        }
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [resetTimer]);

  const handleCustomerIdChange = (e) => {
    setCustomerId(e.target.value);
    setResetTimer(null); // Reset timer when input changes
  };

  const handleEnteredIdsChange = (e) => {
    setEnteredIds(e.target.value);
    setResetTimer(null); // Reset timer when input changes
  };

  const handleCopy = async () => {
    if (!customerId.trim() && !enteredIds.trim()) {
      alert('Please enter valid IDs'); // Display popup message for empty inputs
      return;
    }

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
      setResetTimer(10000); // 10 seconds in milliseconds
    } catch (error) {
      console.error('Failed to copy text to clipboard:', error);
    }
  };

  const handleReset = () => {
    setCustomerId('');
    setEnteredIds('');
    setFinalResult('');
    setShowFinalResult(false);
    setResetTimer(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCopy();
    }
  };

  return (
    <div className='transaction-container'>
      <div className="input-row">
        <input
          type="text"
          value={customerId}
          onChange={handleCustomerIdChange}
          onKeyDown={handleKeyPress}
          placeholder=" QID 106 and 117"
          style={{ width: '330px', fontWeight: "bold", color: "whitesmoke" }}
        />
      </div>
      <div className="input-row">
        <input
          type="text"
          value={enteredIds}
          onChange={handleEnteredIdsChange}
          onKeyDown={handleKeyPress}
          placeholder="Enter transaction IDs"
          style={{ fontFamily: "sans-serif", fontSmooth: "large", fontWeight: "bold", width: '1570px', color: "whitesmoke" }}
        />
      </div>
      <div className="input-row button-row">
        <button style={{ fontWeight: "bold", fontSize: "18px" }} className="copy-button" onClick={handleCopy}>
          <FaCopy style={{ fontSize: "20px" }} /> Copy
        </button>
        <button style={{ fontWeight: "bold", fontSize: "20px" }} className="reset-button" onClick={handleReset} disabled={resetTimer !== null}>
          <MdRefresh style={{ fontSize: "20px" }} /> Reset {resetTimer !== null && `(${Math.ceil(resetTimer / 1000)}s)`}
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
