const CarFilterLarge = (props) => {
  const { setCategory, buttonFilter, setButtonFilter } = props

  const handleShowLarge = () => {
    setCategory("large")
    setButtonFilter("large")
  }

  return (
    <>
      <button
        className={buttonFilter == "large" ? "btn btn-primary w-100": "btn btn-outline-primary w-100"}
        onClick={handleShowLarge}
      >
        Large
      </button>
    </>
  )
}

export default CarFilterLarge
