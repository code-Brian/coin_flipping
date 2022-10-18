import {useState} from 'react'
import {Coin} from './components/Coin'
import {Display} from './components/Display'
import './App.css'

function App() {
  const [coin, setCoin] = useState("")

  return (
    <div className="App">
      <Coin coin={coin} setCoin={setCoin} />
      <Display coin={coin}/>
    </div>
  )
}

export default App
