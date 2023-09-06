import {FC, useState, useEffect, Dispatch, SetStateAction} from "react";
import axios from "../../axios";

import HeroForm from "./HeroForm";
import HeroItem from "./HeroItem";
import Skeleton from "../Skeleton";

import styles from './Hero.module.css';

interface HeroData {
  name: string;
  gender: string;
  height: number;
};

//TODO: try to optimize this
export type HeroProps = { 
  pageNumber: string;
  setPageNumber: Dispatch<SetStateAction<string>>
};

const HeroCard: FC <HeroProps> = ({pageNumber, setPageNumber}) => {
  const [hero, setHero] = useState <HeroData | null>(null);
  const [isLoading, setLoading] = useState <boolean> (true);

  useEffect(() =>  {
    const run = async (pageNumber: string) => {
      // const foundHero = await axios.get(`/hero/${pageNumber}`);
      const URL = `https://swapi.dev/api/people/${pageNumber}`;
      const foundHero = await axios.get<HeroData>(URL);

      setHero({
        name: foundHero.data.name,
        gender: foundHero.data.gender,
        height: foundHero.data.height
      });
      setLoading(false);
    };

    run(pageNumber);
  }, [pageNumber]);
 
  //TODO: why does style not work?
  // <li className={styles.li} >

  return (
    <div>
      <div className={styles.hero}>
        {isLoading ? <Skeleton/> : <h2>{hero?.name}</h2>}
        <HeroItem loading={isLoading} height={hero?.height} gender={hero?.gender}/>
        <HeroForm loading ={isLoading}setPageNumber={setPageNumber}/>
      </div>
    </div>
  );
};

export default HeroCard;