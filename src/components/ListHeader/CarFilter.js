import React from "react"
import "./CarFilter.css"
import CarFilterAll from "./CarFilterButton/CarFilterAll"
import CarFilterLarge from "./CarFilterButton/CarFilterLarge"
import CarFilterMedium from "./CarFilterButton/CarFilterMedium"
import CarFilterSmall from "./CarFilterButton/CarFilterSmall"
import CarPagination from "./CarPagination"

const CarFilter = () => {
  return (
    <div className="row w-100 mx-1 car-filter-container-only">
      <div className="car-filter-only">
        <div className="col-6 col-sm-1">
          <CarFilterAll />
        </div>
        <div className="col-6 col-sm-1">
          <CarFilterSmall />
        </div>
        <div className="col-6 col-sm-1">
          <CarFilterMedium />
        </div>
        <div className="col-6 col-sm-1">
          <CarFilterLarge />
        </div>
      </div>
      <div>
        <CarPagination />
      </div>
    </div>
  )
}

export default CarFilter
