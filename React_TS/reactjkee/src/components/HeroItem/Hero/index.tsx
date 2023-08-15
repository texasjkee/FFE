import {FC, useEffect, useState } from "react";
import axios from 'axios';

import styles from './Hero.module.css';

type HeroType = {
  name: string;
  gender: string;
  height: number;
};

type HeroProps = {
  pageNumber: number;
};

const Hero: FC <HeroProps> = (props: HeroProps) => {
  const [hero, setHero] = useState <HeroType>({name: 'name', gender: 'transgender', height: 160});

  const run: any = async (pageNumber: number) => {
    const result = await axios.get(`https://swapi.dev/api/people/${pageNumber}/`);

    console.log(result.data);

    setHero({
      name: result.data.name,
      gender: result.data.gender,
      height: result.data.height
    });
  };

  useEffect(() => {
    run(props.pageNumber);
  }, []);

  return (
    <div>
      <div className={styles.hero}>
        <ul>
          <li style={{ listStyleType: "none" }}>
            {hero.name}
          </li> 
          <li className={styles.li} >
            {hero.gender}
          </li> 
        </ul>
      </div>
    </div>
  );
};

export default Hero;