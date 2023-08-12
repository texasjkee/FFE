import React, { useState } from "react";
import styles from './User.module.css'

type AuthUser = {
  name: string,
  email: string,
  age: number,
  sex: "male" | "female"
  adress?: string
};

interface UserProps {
  email: string;
};

const User = (props: UserProps) => {
  const [user, setUser] = useState <AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: "John",
      email: "example@gmail.com",
      age: 47,
      sex: "male",
    });
  };
  const handleLoggout = () => { setUser(null)};
 
  return(
    <div className="none">
      <button className={styles.button} onClick={handleLogin}>Login</button>      
      <button className={styles.button} onClick={handleLoggout}>Logout</button>      
      <div className={styles.nav}> 
        <span>User is {user?.name}</span>
      </div>
      <div className={styles.nav}>
        <span>User is {user?.email}</span>
      </div>
    </div>
  );
};

export default User;