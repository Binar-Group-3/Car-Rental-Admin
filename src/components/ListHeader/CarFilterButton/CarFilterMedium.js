const CarFilterMedium = (props) => {
  const { setCategory, buttonFilter, setButtonFilter } = props

  const handleShowMedium = () => {
    setCategory("medium")
    setButtonFilter("medium")
  }

  return (
    <>
      <button
        className="btn btn-outline-primary w-100"
        onClick={handleShowMedium}
      >
        Medium
      </button>
    </>
  )
}

export default CarFilterMedium
