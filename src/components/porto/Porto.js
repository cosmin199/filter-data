import { useState } from "react"
import items from "../../allData"
import Menu from "./Menu"
import Button from "./Button"

const allCategories = ["All", ...new Set(items.map((item) => item.category))]

const Porto = () => {
  const [menuItem, setMenuItem] = useState(items)
  // const [buttons, setButtons] = useState(allCategories)
  //const buttons = allCategories

  const filter = (button) => {
    if (button === "All") {
      setMenuItem(items)
      return
    }

    const filteredData = items.filter((item) => item.category === button)
    setMenuItem(filteredData)
  }

  return (
    <div>
      <div className="title">
        <h1>
          Portofolio
          <span> filter</span>
        </h1>
      </div>
      <Button button={allCategories} filter={filter} />
      <Menu menuItem={menuItem} />
    </div>
  )
}

export default Porto
