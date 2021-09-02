import { useState } from "react"
import "./styles/App.css"
import items from "./allData"
import Menu from "./components/Menu"
import Button from "./components/Button"

function App() {
  const [menuItem, setMenuItem] = useState(items)
  const [button, setButtons] = useState([])

  return (
    <div className="App">
      <div className="title">
        <h1>
          Portofolio
          <span> filter</span>
        </h1>
      </div>
      <Button />
      <Menu menuItem={menuItem} />
    </div>
  )
}

export default App
