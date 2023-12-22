import './App.css';
import InputTransaction from './components/InputTransaction';
import CopyButton from './CopyButton/CopyButtons';
import CompanySearchEngine from './Search/CompanySearchEngine';

function App() {
  return (
    <div className="App">
      
      <InputTransaction />
      <CopyButton />
      <CompanySearchEngine />
     
    </div>
  );
}

export default App;
