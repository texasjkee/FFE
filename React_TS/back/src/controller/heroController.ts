import heroModel from '../models/Hero';

interface HeroType {
  name: string;
  gender: string;
  height: number;
};

const addHero = async (hero: HeroType) => {
  await heroModel.create(hero);
  return { status: 200, message: 'Hero is created'}; 
};

const findHero = async (heroNumber: number) => {
  const foundHero = await heroModel.findById(heroNumber);

  if(foundHero) {
    return { status: 200, message: 'Hero is created' };  
  } else {
    return { status: 404, message: 'Hero not found' };  
  };
};

module.exports = {
  addHero,
  findHero
}