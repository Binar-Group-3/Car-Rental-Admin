import React from "react"
import "./CarFilterButton.css"

const CarFilterAll = (props) => {
  const { setCategory, buttonFilter, setButtonFilter } = props

  const handleShowAll = () => {
    setCategory("")
    setButtonFilter("all")
  }

  return (
    <>
      <button className={buttonFilter == "all" ? "car-filter-active": "car-filter-disabled"} onClick={handleShowAll}>
        All
      </button>
    </>
  )
}

export default CarFilterAll
