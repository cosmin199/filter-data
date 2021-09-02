import { useState } from "react"
import "./styles/App.css"
import items from "./allData"
import Menu from "./components/Menu"
import Button from "./components/Button"

const allCategories = ["All", ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItem, setMenuItem] = useState(items)
  const [buttons, setButtons] = useState(allCategories)

  const filter = (button) => {
    if (button === "All") {
      setMenuItem(items)
      return
    }

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
      <Button button={buttons} filter={filter} />
      <Menu menuItem={menuItem} />
    </div>
  )
}

export default App
