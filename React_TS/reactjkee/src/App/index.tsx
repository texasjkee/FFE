import User from '../components/User';
import HeroItem from '../components/HeroItem';
import './App.css';

const user = {
  email: "john.doe@kindacode.com",
};

const App = () => {
  return (
    <div>
    <HeroItem/>
      {/* <User email={user.email}/> */}
    </div>
  );
};

export default App;