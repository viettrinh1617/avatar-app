import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import Avatar from './components/Avatar';
import PartList from './components/PartList';

function App() {
  const [selectedItems, setSelectedItems] = useState(
    [
      {type:"body", id: 1},
      {type:"eyes", id: 0},
      {type:"hair", id: 0},
      {type:"facial_hair", id: 0},
      {type:"noses", id: 1},
      {type:"mouths", id: 0},
      {type:"eyebrows", id: 0},
      {type:"accessories/hats", id: 0},
      {type:"accessories/glasses", id: 0},
      {type:"accessories/earrings", id: 0},
      {type:"accessories/neckwear", id: 0},
      {type:"clothes/layer_1", id: 0},
      {type:"clothes/layer_2", id: 0},
      {type:"clothes/layer_3", id: 0}
    ] 
  )

  const total = {
    body: 17,
    eyes: 17,
    hair: 73,
    facial_hair:17,
    mouths: 24,
    eyebrows: 15,
    "accessories/hats": 28,
    "accessories/glasses": 17,
    "accessories/earrings": 32,
    "accessories/neckwear": 18,
    "clothes/layer_1": 5,
    "clothes/layer_2": 5,
    "clothes/layer_3": 9,
  };

  const handleSelect = (type, index) => {
    const newCopy = selectedItems.slice();
    newCopy.map(item => {
      if(item.type === type) {
        item.id = index;
        setSelectedItems(newCopy);
      }
    })
  }

  const handleRandomize = () => {
    const newSelect = selectedItems.slice();
    newSelect.map(item => {
      if(item.type === "noses") (item.id = 1) 
      else if(item.type ==="clothes/layer_1"||item.type ==="clothes/layer_2"||item.type ==="eyebrows"||item.type ==="hair") (item.id = Math.floor(Math.random()*total[`${item.type}`]))
      else if(item.type ==="body"|| item.type==="eyes"|| item.type==="mouths") (item.id = Math.floor(Math.random()*total[`${item.type}`])+1) 
      else (
           item.id = Math.ceil(Math.round(Math.random())*Math.random()*total[`${item.type}`])
        // item.id = Math.floor(Math.random()*(total[`${item.type}`]))
      )
      ;
    })
    setSelectedItems(newSelect);
  }

  return (
    <> 
      <div className='container'>
        <h1 className='header'>CHARACTER CUSTOMIZATION</h1>
        <div className='main'>
          <Avatar selectedItems = {selectedItems} handleRandomize = {handleRandomize}/>
          <PartList total={total} handleSelect = {handleSelect}/>
        </div>

      </div>
    </>
  );
}

export default App;
