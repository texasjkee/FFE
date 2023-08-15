import { FC } from "react";
import Hero from "./Hero";

const HeroItem: FC = () => {
  const HERO_LIMIT_ON_PAGE: number = 10;
  const heroesArray: number[] = [];

  for(let i = 1; i <= HERO_LIMIT_ON_PAGE; i++) heroesArray.push(i);

  const heroesData = heroesArray.map(number => {
    return <Hero key ={number} pageNumber={number}/>
  });

  return (
    <div>
      {heroesData}
    </div>
  );
};

export default HeroItem;