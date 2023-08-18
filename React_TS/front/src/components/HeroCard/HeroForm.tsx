import {FC, ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react'

import style from './HeroForm.module.css';

type HeroFormProps = { setPageNumber: Dispatch<SetStateAction<string>> };

const HeroForm: FC<HeroFormProps> = ({setPageNumber}) => {
  const [value, setValue] = useState<string>('');
  // const inputRef = useRef<HTMLInputElement>(null);

  const clearInputValue = () => { setValue('') }; 

  const getInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setPageNumber(e.target.value);
    setValue(e.target.value)
    // clearInputValue();
  };

  return (
    <div className={style.form}>
      <input type="number" value={value} onChange={(e) => getInputValue(e)}/>      
    </div>
  );
};

export default HeroForm;