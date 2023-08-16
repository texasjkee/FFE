import {Router, Request, Response} from 'express';
import heroController from '../controller/heroController';
const router = Router();

interface HeroType {
  name: string;
  gender: string;
  height: number;
};

router.get('/hero:id',(req: Request <{id: string}>, res: Response <HeroType>) => {
  const foundHero = heroController.findById(req.params.id);
  res.status(200).json(foundHero);
});

router.post('/hero',(req: Request <{}, {}, {}, HeroType>, res: Response) => {
  heroController.addHero(req.body);
  res.status(201).json({message: 'Hero is created'});
});

module.exports = router;