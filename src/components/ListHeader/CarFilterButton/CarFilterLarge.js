const CarFilterLarge = (props) => {
  const { setCategory, buttonFilter, setButtonFilter } = props

  const handleShowLarge = () => {
    setCategory("large")
    setButtonFilter("large")
  }

  return (
    <>
      <button
        className={buttonFilter == "large" ? "car-filter-active": "car-filter-disabled"}
        onClick={handleShowLarge}
      >
        Large
      </button>
    </>
  )
}

export default CarFilterLarge
