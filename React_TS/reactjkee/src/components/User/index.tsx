import { useState } from "react";
import './User.css'

type AuthUser = {
  name: string,
  email: string,
  age: number,
  sex: "male" | "female"
  adress?: string
};

const User = () => {
  const [user, setUser] = useState <AuthUser | null>(null);
  // const [user, setUser] = useState <AuthUser>({} as AuthUser);
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
      <button onClick={handleLogin}>Login</button>      
      <button onClick={handleLoggout}>Logout</button>      
      <div>User is {user?.name} </div>
      <div>User is {user?.email} </div>
    </div>
  );
};

export default User;