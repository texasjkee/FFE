import { useState } from 'react';
import HeroCard from '../components/HeroCard';
import './App.css';

const App: React.FC = () => {
  const [pageNumber, setPageNumber] = useState<string>('1');

  console.log(pageNumber, 'Render')
  return (
    <>
      <HeroCard pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </>
  );
};

export default App;