import { FC } from "react"
import Skeleton from "../Skeleton";

type HeroItemProps = {
  loading: boolean;
  height: number | undefined;
  gender: string | undefined;
};

const HeroItem: FC<HeroItemProps> = ({loading, height, gender}) => {

  return (
    <div>
        {loading ? <Skeleton/> : (
          <div>
            <div>height: {height}</div>
            <div>gender: {gender}</div>
          </div>
        )}
    </div>
  );
};

export default HeroItem;