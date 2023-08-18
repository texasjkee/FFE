import { FC, useState } from 'react';
import { Link } from '../Link';

type CardProps = {
  test: number;
}

export enum TabKeys {
  tab1 = 'tab1',
  tab2 = 'tab2'
};

export const Card: FC<CardProps> = (props) =>  {
  const [link, setLink] = useState<TabKeys>(TabKeys.tab1);
  
  // const clickHandle = (tab: TabKeys) => setLink(tab);

  return (
    <>
      {/* <button onClick={() => clickHandle(TabKeys.tab1)}> Tab one </button>
      <button onClick={() => clickHandle(TabKeys.tab2)}> Tab two </button> */}
      <Link href='www' onClick={setLink}> Sad </Link>
    </>
  );
};;