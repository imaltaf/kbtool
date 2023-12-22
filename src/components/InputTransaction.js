import React, { useState } from 'react';
import './InputTransaction.css';
import { FaCopy } from 'react-icons/fa';
import { MdRefresh } from 'react-icons/md';

const InputTransaction = () => {
  const [customerId, setCustomerId] = useState('');
  const [enteredId, setEnteredId] = useState('');
  const [finalResult, setFinalResult] = useState('');
  const [showFinalResult, setShowFinalResult] = useState(false);

  const handleCustomerIdChange = (e) => {
    setCustomerId(e.target.value);
  };

  const handleEnteredIdChange = (e) => {
    setEnteredId(e.target.value);
  };

  const handleCopy = () => {
    const enteredIdsArray = enteredId.split(' ').filter(Boolean);
    const result = `${customerId}:${enteredIdsArray.length}:${enteredIdsArray.join(',')}`;
    setFinalResult(result.replace(/\s/g, ''));
    setShowFinalResult(true);
  };

  const handleReset = () => {
    setCustomerId('');
    setEnteredId('');
    setFinalResult('');
    setShowFinalResult(false);
  };

  return (
    <div className='transaction-container'>
      <h1>In-put Transaction IDs</h1>
      <div className="input-row">
        <span>Enter customer ID for QID 106 and 117 :   </span>
        <input
          type="text"
          value={customerId}
          onChange={handleCustomerIdChange}
          placeholder="Enter customer ID"
          style={{ width: '200px' }}
        />
      </div>
      <div className="input-row">
        <input
          type="text"
          value={enteredId}
          onChange={handleEnteredIdChange}
          style={{ width: '1000px' }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} className="input-row button-row">
  <button className="copy-button" onClick={handleCopy}>
    <FaCopy /> Copy
  </button>
  <button className="reset-button" onClick={handleReset}>
    <MdRefresh /> Reset
  </button>
</div>

      <div className="input-row">
        <input
          type="text"
          value={finalResult}
          readOnly
          placeholder="Final Result"
          className={showFinalResult ? 'visible' : ''}
          // style={{ width: '900px' }}
        />
      </div>
    </div>
  );
};

export default InputTransaction;
