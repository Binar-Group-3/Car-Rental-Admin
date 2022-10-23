import React from "react"
import "./CarPagination.css"

const CarPagination = ({ setPage, page, data }) => {
  // func
  const nextPage = () => {
    setPage((prev) => prev + 1)
  }
  const prevPage = () => {
    setPage((prev) => Math.max(prev - 1, 0))
  }

  return (
    <nav className="car-pagination-container-only">
      <button onClick={prevPage} disabled={page === 1}>
        <span>&lt;&lt;</span>
      </button>
      <p>{`Page ${page} of ${data?.pageCount}`}</p>
      <button onClick={nextPage} disabled={page === data?.pageCount}>
        <span>&gt;&gt;</span>
      </button>
    </nav>
  )
}

export default CarPagination
