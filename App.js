import List from './components/List';
import React from 'react'
import './App.css';

function App() {
  let shopping = [
    {
      Item_Name: "Nord Stage 3 88 Keys",
      Item_Price: "$5,738"
    },
    {
      Item_Name: "Line6 Helix Rack Guitar Processor -1x",
      Item_Price: "$1,831.57"
    },
    {
      Item_Name: "Nord Lead A1",
      Item_Price: "$1,700"
    },
    {
      Item_Name: "Moog Subsequent 37",
      Item_Price: "$1,700"
    },
    {
      Item_Name: "Moog Minitaure 2010s Black",
      Item_Price: "$682.80"
    },

  ]
  return (
    <div className="App ">
      {shopping.map((shopping_items, index) => {
        return <List item={shopping_items} key={index} />
      })}
    </div>
  );
}

export default App;
