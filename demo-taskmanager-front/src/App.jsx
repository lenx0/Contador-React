import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [word, setWord] = useState("")

  const handleSubmitUp = (e) => {
    if (count < 10) {
      setWord("Adicionando")
      setCount(count + 1)
    } if (count === 9) {
      setWord("Limite alcançado!")
    } else {
    }
    console.log(count + 1);
  }

  const handleSubmitDown = (e) => {
    if (count === 0) {
      setWord("Não é possível diminuir mais...")
      setCount(count)
    } else {
      if (count === 10)
        setWord("Diminuindo")
      setCount(count - 1)
    }
    console.log(count - 1);
  }
  return (
    <>
    <div className="App">
      <div className="App-count">
        <h1>{word}</h1>
        <h1>{count}</h1>
      </div>
      <div className="App-buttons">
        <button type="button" onClick={handleSubmitUp} className="add btn btn-success">+1</button>
        <button type="button" onClick={handleSubmitDown} className="btn btn-warning">-1</button>
      </div>
      </div>
    </>
  )
}

export default App
