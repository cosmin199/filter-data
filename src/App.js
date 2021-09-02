import { useState } from "react"
import "./styles/App.css"
import items from "./allData"
import Menu from "./components/Menu"
import Button from "./components/Button"

function App() {
  const [menuItem, setMenuItem] = useState(items)
  const [buttons, setButtons] = useState([])

  const filter = (button) => {
    const filteredData = items.filter((item) => item.category === button)
    setMenuItem(filteredData)
  }

  return (
    <div className="App">
      <div className="title">
        <h1>
          Portofolio
          <span> filter</span>
        </h1>
      </div>
      <Button filter={filter} />
      <Menu menuItem={menuItem} />
    </div>
  )
}

export default App
