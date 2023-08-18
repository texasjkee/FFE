import { FC, ReactNode, Dispatch, SetStateAction } from 'react';
import { TabKeys } from '../Card/Card';

interface HeroData {
  name: string;
  gender: string;
  height: number;
};

// type shortHeroData = Omit<HeroData, 'gender'>;
// type partialHeroData = Partial<HeroData>;
// type requiredHeroData = Required<HeroData>;
// type shortHeroData = Pick<HeroData, 'name'>;

type LinkProps = {
  href: string;
  children: ReactNode;
  onClick: Dispatch<SetStateAction<TabKeys>>
};

export const Link: FC<LinkProps> = ({href, children, onClick}) => {
  return <a href={href} onClick={() => {onClick(TabKeys.tab1)}}> {children} </a>
};