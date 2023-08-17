import HeroCard from '../components/HeroCard';
import './App.css';

const App: React.FC = () => {
  const HERO_LIMIT: number = 16;

  return (
    <>
    {Array.from({length: HERO_LIMIT}, (_, index) => index + 1) 
       .map((number, index) => <HeroCard key={index} pageNumber={number}/>)}
    </>
  );
};

export default App;