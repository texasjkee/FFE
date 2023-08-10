import './Header.css'
import { useState } from 'react';

function Header() {
  const [count, setCount] = useState(0)
  
  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if(count !== 0) setCount(count - 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </>
  );
};

export default Header;