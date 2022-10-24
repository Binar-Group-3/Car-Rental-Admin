import React, { useState } from "react"
import "./CarFilter.css"
import CarFilterAll from "./CarFilterButton/CarFilterAll"
import CarFilterLarge from "./CarFilterButton/CarFilterLarge"
import CarFilterMedium from "./CarFilterButton/CarFilterMedium"
import CarFilterSmall from "./CarFilterButton/CarFilterSmall"
import CarPagination from "./CarPagination"

const CarFilter = ({
  page,
  setPage,
  category,
  setCategory,
  data,
  isLoading,
  isPreviousData,
}) => {
  const [buttonFilter, setButtonFilter] = useState("all")

  const props = {
    setButtonFilter,
    buttonFilter,
    page,
    setPage,
    category,
    setCategory,
    data,
    isLoading,
    isPreviousData,
  }
  return (
    <div className="row w-100 mx-1 car-filter-container-only">
      <div className="car-filter-only">
        <div className="col-6 col-sm-1">
          <CarFilterAll {...props} />
        </div>
        <div className="col-6 col-sm-1">
          <CarFilterSmall {...props} />
        </div>
        <div className="col-6 col-sm-1">
          <CarFilterMedium {...props} />
        </div>
        <div className="col-6 col-sm-1">
          <CarFilterLarge {...props} />
        </div>
      </div>
      <div>
        <CarPagination {...props} />
      </div>
    </div>
  )
}

export default CarFilter
