import { useState } from 'react'
import '../App.css'

type ListProps = {
    initialItems: string[]
}

function List({initialItems}:ListProps) {
  const [list, setList] = useState(initialItems)
  const [newItem, setNewItem] = useState('')

  function addToList() {
    setTimeout(()=>{
      setList(state => [...state, newItem])

    }, 500)
  }
  function removeFromList() {
    setTimeout(()=>{
      setList(state => state.filter(item => item !== item))

    }, 500)
  }

  return (
    <div className="App">
      <input placeholder='Novo item' value={newItem} onChange={e =>setNewItem(e.target.value)} />
     <button onClick={addToList} >Adicionar</button>
     <ul>
        {list.map(item => (
        <li key={item}>
          {item}
          <button onClick={removeFromList}>Remover</button>
        </li>
        ))}
     </ul>
    </div>
  )
}

export default List