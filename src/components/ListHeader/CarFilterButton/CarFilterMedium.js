const CarFilterMedium = (props) => {
  const { setCategory, buttonFilter, setButtonFilter } = props

  const handleShowMedium = () => {
    setCategory("medium")
    setButtonFilter("medium")
  }

  return (
    <>
      <button
        className={buttonFilter == "medium" ? "btn btn-primary w-100": "btn btn-outline-primary w-100"}
        onClick={handleShowMedium}
      >
        Medium
      </button>
    </>
  )
}

export default CarFilterMedium
