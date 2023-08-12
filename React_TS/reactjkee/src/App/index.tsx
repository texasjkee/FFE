import User from '../components/User';
import CostItem from '../components/CostItem';

import './App.css';

const user = {
  email: "john.doe@kindacode.com",
};

const costData: {description: string, cost: number}[] = [
  {
    description: "MacBook",
    cost: 1800,
  },
  {
    description: "Asus",
    cost: 900,
  },
  {
    description: "ThinkPad",
    cost: 1100,
  },
];

const App = () => {
  return (
    <div>
      <CostItem 
        description={costData[0].description}
        cost={costData[0].cost}
      />
      <CostItem 
        description={costData[1].description}
        cost={costData[1].cost}
      />
      <CostItem 
        description={costData[1].description}
        cost={costData[1].cost}
      />
      <User email={user.email}/>
    </div>
  );
};

export default App;