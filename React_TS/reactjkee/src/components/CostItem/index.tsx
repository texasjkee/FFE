import React from "react";
import styles from './CostItem.module.css';

type CostProps = {
  description: string,
  cost:number,
};

const CostItem = (props: CostProps) => {
  return (
    <div className={styles.cost_item}>
      <span>{props.description}</span>
      <span>{props.cost}</span>
    </div>
  );
};

export default CostItem;