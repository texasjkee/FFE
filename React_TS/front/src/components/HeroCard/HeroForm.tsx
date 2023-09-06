import {FC, ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react'

import style from './HeroForm.module.css';

type HeroFormProps = {
   loading: boolean;
   setPageNumber: Dispatch<SetStateAction<string>> 
};

const HeroForm: FC<HeroFormProps> = ({loading, setPageNumber}) => {
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
      {loading ? <input type ="number" readOnly/> :
        <input type="number" value={value} onChange={(e) => getInputValue(e)}/>}      
    </div>
  );
};

export default HeroForm;