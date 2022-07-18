import React  from 'react';
import Expenses from "./components/Expenses";

function App(){
  const expenses = [
    {id :'e1', title:'toilet paper',amount:94.12, date: new Date(2020, 5, 22)},
    {id :'e2', title:'News paper',amount:123.12, date: new Date(2021, 7, 18)},
    {id :'e3', title:'car insurance',amount:234.98, date: new Date(2022, 4, 2)},
    {id :'e4', title:'Tv bill',amount:876.98, date: new Date(2021, 8, 28)},
  ];
  return(
    <div>
    <h2>project</h2>
    <Expenses items={expenses}/>
    </div>
    );
}

export default App;