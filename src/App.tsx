import { useState } from 'react';
import FormItems from './Items/FormItems';
import ListItems from './Items/ListItems';
import Item from './models/Item';

function App() {
  const [items, setItems] = useState<Item[]>([])

  const addItem = (item: Item) => {
    setItems([...items, item]);
  }

  const removeItem = (item: Item) => {
    setItems([...items.filter(it => it.id !== item.id)]);
  }
  return (
    <div className="App">
      <div className='container mt-5'>
        <FormItems addItem={addItem} />
        <ListItems removeItem={removeItem} items={items} />
      </div>
    </div>
  );
}

export default App;
