import React from "react"

const CarFilterAll = (props) => {
  const { setCategory, buttonFilter, setButtonFilter } = props

  const handleShowAll = () => {
    setCategory("")
    setButtonFilter("all")
  }

  return (
    <>
      <button className={buttonFilter == "all" ? "btn btn-primary w-100": "btn btn-outline-primary w-100"} onClick={handleShowAll}>
        All
      </button>
    </>
  )
}

export default CarFilterAll
