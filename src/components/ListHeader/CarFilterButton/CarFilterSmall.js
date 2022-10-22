const CarFilterSmall = (props) => {
  const { setCategory, buttonFilter, setButtonFilter } = props

  const handleShowSmall = () => {
    setCategory("small")
    setButtonFilter("small")
  }

  return (
    <>
      <button
        className={buttonFilter == "small" ? "btn btn-primary w-100": "btn btn-outline-primary w-100"}
        onClick={handleShowSmall}
      >
        Small
      </button>
    </>
  )
}

export default CarFilterSmall
