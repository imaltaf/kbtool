// KBTools.js
import React from 'react';
import InputTransaction from './components/InputTransaction';
import CopyButton from './CopyButton/CopyButtons';
import CompanySearchEngine from './Search/CompanySearchEngine';
import Footer from './Footer/Footer';

const KBTools = () => {
  return (
    <div>
      <InputTransaction />
      <CopyButton />
      <CompanySearchEngine />
      <Footer />
    </div>
  );
};

export default KBTools;
