import React, { useState } from "react";
import styles from './CostItem.module.css';

type CostProps = {
  description: string,
  cost:number,
};

const CostItem: React.FC <CostProps> = (props: CostProps) => {

  const [description, setDescription] = useState(props.description);
  const changeDescriptionHandler = () => {
    setDescription('Yo');
  };

  return (
    <div className={styles.cost_item}>
      <span>{description}</span>
      <span>{props.cost}</span>
      <button onClick={changeDescriptionHandler}>Click</button>
    </div>
  );
};

export default CostItem;