import './App.css';
import User from '../components/User';
import CostItem from '../components/CostItem';

function App() {
  
  // const costs: {date: Date, description: string, amount: number}[] = [
  //   {
  //     date: new Date(),
  //     description: "MacBook",
  //     amount: 1238
  //   },
  //   {
  //     date: new Date(),
  //     description: "Hewlett-Packard",
  //     amount: 818
  //   },
  //   {
  //     date: new Date(),
  //     description: "ThinkPad",
  //     amount: 908
  //   },
  // ];
 
 type CostType = {
  date: string,
  // description: string,
  // amount: number
 };

  const costs: Array <CostType> = [
    {
      date: 'wow', 
      // description: "MacBook",
      // amount: 1238
    },
    // {
    //   date: new Date(),
    //   description: "Hewlett-Packard",
    //   amount: 818
    // },
    // {
    //   date: new Date(),
    //   description: "ThinkPad",
    //   amount: 908
    // },
  ];
  const str: string = "wow";

  return (
    <div className="App">
      {/* <CostItem yo={str}/> */}
      <CostItem/>
      <User/>
    </div>
  );
};

export default App;