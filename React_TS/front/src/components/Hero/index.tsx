import {FC, useState, useEffect} from "react";
import axios from "../../axios";

import Skeleton from "../Skeleton";

import styles from './Hero.module.css';

interface HeroType {
  name: string;
  gender: string;
  height: number;
};

type HeroProps = { pageNumber: number };

const Hero: FC <HeroProps> = (props: HeroProps) => {
  const [hero, setHero] = useState <HeroType>({name: 'name', gender: 'transgender', height: 160});
  const [isLoading, setLoading] = useState <boolean> (true);

  // console.log(props.pageNumber, 'Render the component')
  useEffect(() =>  {
    const run = async (pageNumber: number) => {
      // console.log(pageNumber, 'pageNumber')
      const foundHero = await axios.get(`/hero/${pageNumber}`);
      setHero({
        name: foundHero.data.name,
        gender: foundHero.data.gender,
        height: foundHero.data.height
      });
      setLoading(false);
    };

    run(props.pageNumber);
  }, []);
  
  //TODO: why does style not work?
  // <li className={styles.li} >
  
  const HERO_LIST = () => {
    return (
      <ul>
        <li style={{ listStyleType: "none" }}>
          name: {hero.name}
        </li> 
        <li style={{ listStyleType: "none" }}>
          sex: {hero.gender}
        </li> 
        <li style={{ listStyleType: "none" }}>
          height: {hero.height}
        </li> 
      </ul>
    );
  };

  return (
    <div>
      <div className={styles.hero}>
        {isLoading ? <Skeleton/> : HERO_LIST()}
      </div>
    </div>
  );
};

export default Hero;