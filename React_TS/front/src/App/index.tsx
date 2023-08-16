import Hero from '../components/Hero';

import './App.css';

const App: React.FC = () => {
  const HERO_LIMIT_ON_PAGE: number = 10;
  const numberOfHeroes: number[] = [];

  for(let i = 1; i <= HERO_LIMIT_ON_PAGE; i++) numberOfHeroes.push(i);

  return (
    <>
      {numberOfHeroes.map((number, _) => <Hero key ={_} pageNumber={number}/>)} 
    </>
  );
};

export default App;