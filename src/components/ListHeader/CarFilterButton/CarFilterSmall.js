const CarFilterSmall = (props) => {
  const { setCategory, buttonFilter, setButtonFilter } = props

  const handleShowSmall = () => {
    setCategory("small")
    setButtonFilter("small")
  }

  return (
    <>
      <button
        className={buttonFilter == "small" ? "car-filter-active": "car-filter-disabled"}
        onClick={handleShowSmall}
      >
        Small
      </button>
    </>
  )
}

export default CarFilterSmall
