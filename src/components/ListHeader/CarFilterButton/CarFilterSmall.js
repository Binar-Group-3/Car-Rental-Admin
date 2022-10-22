const CarFilterSmall = (props) => {
  const { setCategory, buttonFilter, setButtonFilter } = props

  const handleShowSmall = () => {
    setCategory("small")
    setButtonFilter("small")
  }

  return (
    <>
      <button
        className="btn btn-outline-primary w-100"
        onClick={handleShowSmall}
      >
        Small
      </button>
    </>
  )
}

export default CarFilterSmall
