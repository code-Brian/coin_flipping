import {useState} from 'react'
import {Coin} from './components/Coin'
import {Display} from './components/Display'
import './App.css'

function App() {
  const [coin, setCoin] = useState("")
  const [data, setData] = useState("")
  const [success, setSuccess] = useState("")
  return (
    <div className="App">
      <Coin setSuccess={setSuccess} data={data} setData={setData} coin={coin} setCoin={setCoin} />
      <Display success={success} data={data} coin={coin}/>
    </div>
  )
}

export default App
