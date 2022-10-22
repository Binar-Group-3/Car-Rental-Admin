import React from "react"
import "./CarPagination.css"

const CarPagination = () => {
  return (
    <nav className="car-pagination-container-only">
      <button>
        <span>&lt;&lt;</span>
      </button>
      <p>page 1 of 1</p>
      <button>
        <span>&gt;&gt;</span>
      </button>
    </nav>
  )
}

export default CarPagination
