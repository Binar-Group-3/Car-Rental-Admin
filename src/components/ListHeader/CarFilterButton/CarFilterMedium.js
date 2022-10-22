const CarFilterMedium = (props) => {
  const { setCategory, buttonFilter, setButtonFilter } = props

  const handleShowMedium = () => {
    setCategory("medium")
    setButtonFilter("medium")
  }

  return (
    <>
      <button
        className={buttonFilter == "medium" ? "car-filter-active": "car-filter-disabled"}
        onClick={handleShowMedium}
      >
        Medium
      </button>
    </>
  )
}

export default CarFilterMedium
